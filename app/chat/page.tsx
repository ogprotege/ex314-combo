'use client';

import React, { useEffect, useState } from 'react';
import { Sidebar } from '@/components/chat/Sidebar';
import { InitialView } from '@/components/chat/InitialView';
import { ChatView } from '@/components/chat/ChatView';
import { Header } from '@/components/chat/Header';
import { useRouter } from 'next/navigation';
import type { Message } from '@/lib/types';
import { useAuth } from '@/hooks/use-auth';
import { useChat } from '@/context/ChatContext';

// Fallback types for build-time compatibility
type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  logout?: () => void;
};

export default function Home() {
  const auth = useAuth() as AuthState;
  const { isAuthenticated, isLoading: authLoading, logout } = auth;
  const [isClient, setIsClient] = useState(false);
  
  const router = useRouter();
  
  // Set isClient to true once component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check authentication on mount
  useEffect(() => {
    if (!isClient || authLoading) return;
    
    // Skip auth check during build time
    if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') return;
    
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [router, isClient, isAuthenticated, authLoading]);

  const handleLogout = () => {
    if (!isClient) return;
    if (logout) logout();
  };

  const chatContext = useChat();
  const { 
    sendMessage: contextSendMessage, 
    isLoading: chatLoading, 
    messages: chatMessages, 
    currentChatId,
    newChat 
  } = chatContext;
  
  // For backward compatibility
  const activeChatId = 'activeChatId' in chatContext 
    ? (chatContext as any).activeChatId 
    : null;
    
  // Use either activeChatId or currentChatId
  const currentChat = activeChatId || currentChatId;
  
  useEffect(() => {
    if (isAuthenticated && !chatLoading && !currentChat) {
      // If authenticated and no active chat, create a new one
      newChat();
    }
  }, [isAuthenticated, chatLoading, currentChat, newChat]);
  
  
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    contextSendMessage(content);
  };

  // Show loading during client-side rendering or authentication check
  if (!isClient || authLoading || (!isAuthenticated && process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK !== 'true')) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark-bg">
        <div className="animate-pulse text-white text-lg font-medium">Loading...</div>
      </div>
    );
  }

  // Skip auth check for build time
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen bg-dark-bg text-white font-segoe">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
          onLogout={handleLogout} 
        />
        <main className="flex-grow flex flex-col h-full overflow-hidden">
          <Header />
          {chatMessages.length === 0 ? (
            <InitialView onSendMessage={handleSendMessage} />
          ) : (
            <ChatView 
              messages={chatMessages} 
              isLoading={chatLoading} 
              onSendMessage={handleSendMessage} 
            />
          )}
        </main>
      </div>
    </div>
  );
}