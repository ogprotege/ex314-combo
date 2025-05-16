'use client';

import React, { useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { InitialView } from '@/components/InitialView';
import { ChatView } from '@/components/ChatView';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import type { Message } from '@/lib/types';
import { useAuth } from '@/hooks/use-auth';
import { useChat } from '@/context/ChatContext';

export default function Home() {
  const { isAuthenticated, isLoading: authLoading, logout } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const router = useRouter();
  
  // Set isClient to true once component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check authentication on mount
  useEffect(() => {
    if (!isClient || authLoading) return;
    
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [router, isClient, isAuthenticated, authLoading]);

  const handleLogout = () => {
    if (!isClient) return;
    logout();
  };

  const chatContext = useChat();
  const { sendMessage: contextSendMessage, isLoading: chatLoading, messages: chatMessages, activeChatId, newChat } = chatContext;
  
  useEffect(() => {
    if (isAuthenticated && !chatLoading && !activeChatId) {
      // If authenticated and no active chat, create a new one
      newChat();
    }
  }, [isAuthenticated, chatLoading, activeChatId, newChat]);
  
  
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    contextSendMessage(content);
  };

  // Show loading during client-side rendering or authentication check
  if (!isClient || authLoading || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark-bg">
        <div className="animate-pulse text-white text-lg font-medium">Loading...</div>
      </div>
    );
  }

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