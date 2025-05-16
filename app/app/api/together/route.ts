import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase for logging
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Together API configuration
const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;
const TOGETHER_API_URL = 'https://api.together.xyz/v1/completions';

export async function POST(req: NextRequest) {
  try {
    const { messages, model = 'mistralai/Mixtral-8x7B-Instruct-v0.1', temperature = 0.7, max_tokens = 1000 } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Invalid messages array' }, { status: 400 });
    }

    if (!TOGETHER_API_KEY) {
      return Response.json({ error: 'Together API not configured' }, { status: 500 });
    }

    // Convert messages array to a prompt string
    let prompt = '';
    messages.forEach((message) => {
      if (message.role === 'system') {
        prompt += `System: ${message.content}\n\n`;
      } else if (message.role === 'user') {
        prompt += `User: ${message.content}\n\n`;
      } else if (message.role === 'assistant') {
        prompt += `Assistant: ${message.content}\n\n`;
      }
    });

    // Add final assistant prefix to get response
    prompt += 'Assistant: ';
    
    // Log the prompt to Supabase for debugging/analytics
    if (supabaseUrl !== 'https://placeholder-for-build.supabase.co') {
      try {
        await supabase.from('ai_logs').insert({
          provider: 'together',
          model,
          messages,
          temperature,
          max_tokens,
          created_at: new Date().toISOString()
        });
      } catch (error) {
        console.error('Failed to log prompt:', error);
      }
    }

    // Make API call to Together
    const response = await fetch(TOGETHER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOGETHER_API_KEY}`
      },
      body: JSON.stringify({
        model,
        prompt,
        temperature,
        max_tokens,
        stop: ['\nUser:', '\nSystem:']
      })
    });

    const data = await response.json();
    
    return Response.json({
      text: data.choices?.[0]?.text || ''
    });
  } catch (err: any) {
    console.error('[Together API Error]', err);
    return Response.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}