import { type NextRequest } from "next/server"
import { OpenAI } from "openai"
import { selectModel } from "@/lib/ai-config"

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
  try {
    // Skip real API calls during build time
    if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true' || openaiApiKey === 'sk-placeholder-for-build') {
      return Response.json({ 
        text: "This is a build-time placeholder response. The actual model will be used in production.",
        model: "build-placeholder",
      });
    }
    
    const { messages, stream = false } = await req.json()

    // Get the user's latest message
    const latestMessage = messages[messages.length - 1].content

    // Format messages for the AI
    const formattedMessages = [{ role: "system", content: systemPrompt }, ...messages]

    // Try using Together AI first
    try {
      // Select the appropriate model based on content
      const aiModel = selectModel(latestMessage)
      
      // Generate a response using the selected Together.ai model
      const completion = await aiModel.chat({
        messages: formattedMessages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      })

      return Response.json({ 
        text: completion.content,
        model: aiModel.name
      });
    } catch (togetherError) {
      console.error("Error with Together AI, falling back to OpenAI:", togetherError);
      
      // Fall back to OpenAI
      if (stream) {
        // Stream the response using OpenAI
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: formattedMessages,
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
          messages: formattedMessages
        });

        return Response.json({ 
          text: completion.choices[0].message.content,
          model: "openai-fallback"
        });
      }
    }
  } catch (error) {
    console.error("Error in chat completion:", error)
    return Response.json({ error: "An error occurred during chat completion" }, { status: 500 })
  }
}