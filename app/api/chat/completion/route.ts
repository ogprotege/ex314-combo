import { type NextRequest } from "next/server"
import { OpenAI } from "openai"
import { selectModel } from "@/lib/ai-config"
import { conversationLogger } from "@/lib/logging/conversation-logger"
import { biasDetector } from "@/lib/logging/bias-detector"
import { checkRateLimit } from "@/lib/database/cache-middleware"
import crypto from "crypto"
import { z } from "zod"

// Input validation schema
const chatRequestSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string().min(1).max(10000)
  })).min(1).max(50),
  stream: z.boolean().optional().default(false),
  sessionId: z.string().optional(),
  userId: z.string().optional(),
  conversationId: z.string().optional()
})

// Type for OpenAI messages
type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Hash IP addresses for privacy
function hashIP(ip: string): string {
  return crypto.createHash('sha256').update(ip + process.env.IP_SALT || 'default-salt').digest('hex').substring(0, 16);
}

// System prompt to guide the model's behavior
const systemPrompt = `You are Ex314.ai, a Catholic AI assistant designed to provide information and guidance on Catholic theology, liturgy, and practice.
Your responses should be faithful to Catholic teaching and tradition.
When discussing theological matters, cite relevant scripture, Church documents, or teachings when appropriate.
Be respectful, charitable, and clear in your explanations.
If you're unsure about something, acknowledge the limits of your knowledge rather than speculating.
For matters of personal spiritual guidance, remind users to consult with their priest or spiritual director.`

// Initialize OpenAI client with fallback for build time
const openaiApiKey = process.env.OPENAI_API_KEY || 'sk-placeholder-for-build';
const openai = new OpenAI({
  apiKey: openaiApiKey
});

export async function POST(req: NextRequest) {
  let conversationId: string | null = null;
  const startTime = Date.now();
  
  try {
    // Extract client identifier for rate limiting
    const clientId = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'anonymous';
    
    // Check rate limit: 10 requests per minute for chat API
    const rateLimit = await checkRateLimit(clientId, 10, 60);
    
    if (!rateLimit.allowed) {
      const retryAfterSeconds = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
      return Response.json(
        { 
          error: 'Rate limit exceeded. Please wait before sending more messages.',
          retryAfter: retryAfterSeconds 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': String(rateLimit.remaining),
            'X-RateLimit-Reset': new Date(rateLimit.resetAt).toISOString(),
            'Retry-After': String(retryAfterSeconds)
          }
        }
      );
    }
    
    // Skip real API calls during build time
    if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true' || openaiApiKey === 'sk-placeholder-for-build') {
      return Response.json({ 
        text: "This is a build-time placeholder response. The actual model will be used in production.",
        model: "build-placeholder",
      });
    }
    
    // Parse and validate request body
    const body = await req.json()
    const validationResult = chatRequestSchema.safeParse(body)
    
    if (!validationResult.success) {
      return Response.json(
        { error: 'Invalid request', details: validationResult.error.flatten() },
        { status: 400 }
      )
    }
    
    const { messages, stream = false, sessionId, userId } = validationResult.data

    // Get the user's latest message
    const latestMessage = messages[messages.length - 1].content

    // Create conversation log if this is the first message
    if (messages.length === 1 || !conversationId) {
      conversationId = await conversationLogger.createConversation({
        userId,
        sessionId: sessionId || 'anonymous',
        modelConfig: {
          model: 'gpt-4o', // Will be updated when you switch to custom model
          temperature: 0.7,
          systemPrompt,
          provider: 'openai'
        }
      });
    }

    // Log user message
    await conversationLogger.logMessage({
      conversationId,
      role: 'user',
      content: latestMessage,
      metadata: {
        timestamp: new Date()
      }
    });

    // Format messages for the AI
    const formattedMessages = [{ role: "system", content: systemPrompt }, ...messages]

    // Try using Together AI first
    try {
      // For now, skip Together AI and use OpenAI directly
      // TODO: Implement proper Together AI integration
      throw new Error("Together AI integration pending");
    } catch (togetherError) {
      console.error("Error with Together AI, falling back to OpenAI:", togetherError);
      
      // Fall back to OpenAI
      if (stream) {
        // Stream the response using OpenAI
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: formattedMessages as any, // Type cast for OpenAI SDK
          stream: true
        });

        // Convert the stream to a readable stream
        const stream = new ReadableStream({
          async start(controller) {
            for await (const chunk of response) {
              const content = chunk.choices[0]?.delta?.content || '';
              if (content) {
                const encoder = new TextEncoder();
                controller.enqueue(encoder.encode(content));
              }
            }
            controller.close();
          }
        });

        return new Response(stream);
      } else {
        // Generate a complete response using OpenAI
        const completion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: formattedMessages as any // Type cast for OpenAI SDK
        });

        const assistantResponse = completion.choices[0].message.content;
        const latency = Date.now() - startTime;

        // Log assistant response with comprehensive analysis
        await conversationLogger.logMessage({
          conversationId,
          role: 'assistant',
          content: assistantResponse || '',
          metadata: {
            timestamp: new Date(),
            latency,
            modelVersion: 'gpt-4o',
            promptTokens: completion.usage?.prompt_tokens,
            completionTokens: completion.usage?.completion_tokens,
            tokenCount: completion.usage?.total_tokens,
            temperature: 0.7, // Default OpenAI temperature
            maxTokens: 12228
          },
          analysis: {
            biasIndicators: await biasDetector.detectBias(assistantResponse || '') as any,
            theologicalTopics: biasDetector.extractTheologicalTopics(assistantResponse || ''),
            citations: biasDetector.analyzeCitations(assistantResponse || ''),
            modelFit: biasDetector.detectModelFit(assistantResponse || '', latestMessage)
          },
          adminMetadata: {
            userAgent: req.headers.get('user-agent') || undefined,
            ipHash: hashIP(req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'),
            requestHeaders: {
              'x-forwarded-for': req.headers.get('x-forwarded-for') || '',
              'x-real-ip': req.headers.get('x-real-ip') || '',
              'referer': req.headers.get('referer') || ''
            },
            flaggedForReview: false // Will be set to true if bias/fit issues detected
          }
        });

        return Response.json({ 
          text: assistantResponse,
          model: "openai-fallback",
          conversationId
        });
      }
    }
  } catch (error) {
    console.error("Error in chat completion:", error)
    return Response.json({ error: "An error occurred during chat completion" }, { status: 500 })
  }
}