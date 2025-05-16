import { OpenAI } from 'openai';
import { NextRequest } from 'next/server';

// Server-side only — NEVER use in client code!
let openai;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // or TOGETHER_API_KEY
    baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1', // or Together's URL
  });
}

export async function POST(req: NextRequest) {
  try {
    const { messages, model = 'gpt-3.5-turbo', max_tokens = 1000 } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Missing or invalid messages' }, { status: 400 });
    }
    
    if (!openai) {
      return Response.json({ error: 'OpenAI API not configured' }, { status: 500 });
    }

    const chatResponse = await openai.chat.completions.create({
      model,
      messages,
      max_tokens,
    });

    return Response.json({
      result: chatResponse.choices[0].message?.content ?? '',
    });
  } catch (err: any) {
    console.error('[OpenAI Error]', err);
    return Response.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}