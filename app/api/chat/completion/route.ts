import { type NextRequest, NextResponse } from "next/server"
import { OpenAI } from "openai"
import { selectModel } from "@/lib/ai-config"

// System prompt to guide the model's behavior
const systemPrompt = `You are Ex314.ai, a Catholic AI assistant designed to provide information and guidance on Catholic theology, liturgy, and practice.
Your responses should be faithful to Catholic teaching and tradition.
When discussing theological matters, cite relevant scripture, Church documents, or teachings when appropriate.
Be respectful, charitable, and clear in your explanations.
If you're unsure about something, acknowledge the limits of your knowledge rather than speculating.
For matters of personal spiritual guidance, remind users to consult with their priest or spiritual director.`

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
  try {
    const { messages, stream = false } = await req.json()

    // Get the user's latest message
    const latestMessage = messages[messages.length - 1].content

    // Select the appropriate model 
    const aiModel = selectModel(latestMessage)
    // For OpenAI fallback when Together API isn't available
    const openaiModel = "gpt-3.5-turbo"

    // Format messages for the AI
    const formattedMessages = [{ role: "system", content: systemPrompt }, ...messages]

    if (stream) {
      // Stream the response using OpenAI
      const response = await openai.chat.completions.create({
        model: openaiModel,
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
      try {
        // Try using the selected model from Together AI
        // This would require additional implementation with the Together AI SDK
        // For now, we'll use OpenAI as a fallback
        
        // Generate a complete response using OpenAI
        const completion = await openai.chat.completions.create({
          model: openaiModel,
          messages: formattedMessages
        });

        return NextResponse.json({ text: completion.choices[0].message.content });
      } catch (error) {
        console.error("Error with Together AI, falling back to OpenAI:", error);
        
        // Fallback to OpenAI
        const completion = await openai.chat.completions.create({
          model: openaiModel,
          messages: formattedMessages
        });

        return NextResponse.json({ text: completion.choices[0].message.content });
      }
    }
  } catch (error) {
    console.error("Error in chat completion:", error)
    return NextResponse.json({ error: "An error occurred during chat completion" }, { status: 500 })
  }
}
