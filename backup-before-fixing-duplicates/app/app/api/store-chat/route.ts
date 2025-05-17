// app/api/store-chat/route.ts
import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { MessageSchema } from '@/lib/validation/messageSchema';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate the request body
    const result = MessageSchema.safeParse(body);
    if (!result.success) {
      return Response.json(
        { 
          error: 'Invalid request format',
          details: result.error.errors 
        }, 
        { status: 400 }
      );
    }
    
    // Get the validated data
    const { messages, userId, chatId, title } = result.data;
    
    // Store in Supabase
    const { error } = await supabase
      .from('chats')
      .insert({
        user_id: userId,
        chat_id: chatId,
        title: title || 'Chat ' + new Date().toISOString(),
        messages: messages
      });
      
    if (error) {
      console.error('Supabase error:', error);
      return Response.json({ error: 'Supabase storage failed' }, { status: 500 });
    }
    
    return Response.json({ success: true });
    
  } catch (error) {
    console.error('Error storing chat:', error);
    return Response.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}