'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot, where, Timestamp } from 'firebase/firestore';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, AlertCircle, Hash, Clock } from 'lucide-react';

interface ConversationLog {
  id: string;
  userId?: string;
  sessionId: string;
  startTime: any;
  messageCount: number;
  modelConfig: {
    model: string;
    provider: string;
  };
}

interface MessageLog {
  id: string;
  conversationId: string;
  role: string;
  content: string;
  reasoning?: string;
  metadata?: {
    timestamp: any;
    latency?: number;
    tokenCount?: number;
  };
  analysis?: {
    biasIndicators?: any[];
    theologicalTopics?: string[];
    citations?: string[];
    modelFit?: any;
  };
  adminMetadata?: {
    ipHash?: string;
    userAgent?: string;
    requestHeaders?: Record<string, string>;
    flaggedForReview?: boolean;
  };
}

export default function LogsPage() {
  const [conversations, setConversations] = useState<ConversationLog[]>([]);
  const [messages, setMessages] = useState<MessageLog[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [biasAlerts, setBiasAlerts] = useState<MessageLog[]>([]);
  const [db, setDb] = useState<any>(null);

  useEffect(() => {
    // Lazy load Firebase
    try {
      const firebase = require('@/lib/firebase');
      setDb(firebase.db);
    } catch (error) {
      console.error('Firebase not initialized:', error);
    }
  }, []);

  useEffect(() => {
    if (!db) return;
    // Subscribe to recent conversations
    const conversationsQuery = query(
      collection(db, 'conversation_logs'),
      orderBy('startTime', 'desc'),
      limit(50)
    );

    const unsubscribeConversations = onSnapshot(conversationsQuery, (snapshot) => {
      const convs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ConversationLog[];
      setConversations(convs);
    });

    // Subscribe to messages with bias indicators
    const biasQuery = query(
      collection(db, 'message_logs'),
      where('analysis.biasIndicators', '!=', null),
      orderBy('metadata.timestamp', 'desc'),
      limit(20)
    );

    const unsubscribeBias = onSnapshot(biasQuery, (snapshot) => {
      const biasMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MessageLog[];
      setBiasAlerts(biasMessages);
    });

    return () => {
      unsubscribeConversations();
      unsubscribeBias();
    };
  }, [db]);

  useEffect(() => {
    if (!selectedConversation || !db) return;

    // Subscribe to messages for selected conversation
    const messagesQuery = query(
      collection(db, 'message_logs'),
      where('conversationId', '==', selectedConversation),
      orderBy('metadata.timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MessageLog[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [selectedConversation, db]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Conversation Logs & Analysis</h1>

      <Tabs defaultValue="conversations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="bias">Bias Alerts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="metadata">Admin Metadata</TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold mb-3">Recent Conversations</h2>
              {conversations.map(conv => (
                <Card
                  key={conv.id}
                  className={`p-3 cursor-pointer hover:bg-accent ${selectedConversation === conv.id ? 'bg-accent' : ''}`}
                  onClick={() => setSelectedConversation(conv.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Session: {conv.sessionId}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {conv.startTime?.toDate?.()?.toLocaleString() || 'Unknown'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        <Hash className="w-3 h-3 mr-1" />
                        {conv.messageCount || 0}
                      </Badge>
                      <Badge>{conv.modelConfig.provider}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold mb-3">Conversation Messages</h2>
              <div className="max-h-[600px] overflow-y-auto space-y-2">
                {messages.map(msg => (
                  <Card key={msg.id} className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={msg.role === 'user' ? 'default' : 'secondary'}>
                        {msg.role}
                      </Badge>
                      {msg.metadata?.latency && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {msg.metadata.latency}ms
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-2">{msg.content}</p>
                    {msg.analysis?.theologicalTopics && msg.analysis.theologicalTopics.length > 0 && (
                      <div className="flex gap-1 flex-wrap">
                        {msg.analysis.theologicalTopics.map(topic => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {msg.analysis?.biasIndicators && msg.analysis.biasIndicators.length > 0 && (
                      <div className="mt-2 p-2 bg-destructive/10 rounded">
                        <p className="text-xs font-medium flex items-center gap-1 text-destructive">
                          <AlertCircle className="w-3 h-3" />
                          Bias Detected
                        </p>
                      </div>
                    )}
                    {msg.analysis?.modelFit && (
                      <div className="mt-2 p-2 bg-warning/10 rounded">
                        <p className="text-xs font-medium text-warning">
                          Model {msg.analysis.modelFit.type}: {msg.analysis.modelFit.indicators.join(', ')}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bias" className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">Bias Detection Alerts</h2>
          <div className="space-y-2">
            {biasAlerts.map(msg => (
              <Card key={msg.id} className="p-4 border-destructive/50">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="destructive">Bias Alert</Badge>
                  <span className="text-xs text-muted-foreground">
                    {msg.metadata?.timestamp?.toDate?.()?.toLocaleString() || 'Unknown'}
                  </span>
                </div>
                <p className="text-sm mb-2">{msg.content}</p>
                {msg.analysis?.biasIndicators?.map((bias, idx) => (
                  <div key={idx} className="mt-2 p-2 bg-destructive/10 rounded">
                    <p className="text-xs font-medium">Type: {bias.type}</p>
                    <p className="text-xs">Severity: {bias.severity}</p>
                    {bias.matches && (
                      <p className="text-xs mt-1">Matches: {bias.matches.join(', ')}</p>
                    )}
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">Usage Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Total Conversations</h3>
              <p className="text-2xl font-bold">{conversations.length}</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Bias Alerts</h3>
              <p className="text-2xl font-bold text-destructive">{biasAlerts.length}</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Active Model</h3>
              <p className="text-lg font-medium">GPT-4o (OpenAI)</p>
              <p className="text-xs text-muted-foreground">Transitioning to Llama-3.3-70B</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="metadata" className="space-y-4">
          <h2 className="text-xl font-semibold mb-3">Admin-Only Metadata</h2>
          <div className="space-y-2">
            {messages.filter(msg => msg.adminMetadata).map(msg => (
              <Card key={msg.id} className="p-4">
                <div className="mb-2">
                  <Badge variant={msg.role === 'user' ? 'default' : 'secondary'}>
                    {msg.role}
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2">
                    {msg.metadata?.timestamp?.toDate?.()?.toLocaleString() || 'Unknown'}
                  </span>
                </div>
                <p className="text-sm mb-2 truncate">{msg.content.substring(0, 100)}...</p>
                {msg.adminMetadata && (
                  <div className="space-y-1 text-xs">
                    <p><strong>IP Hash:</strong> {msg.adminMetadata.ipHash}</p>
                    <p><strong>User Agent:</strong> {msg.adminMetadata.userAgent}</p>
                    {msg.adminMetadata.flaggedForReview && (
                      <Badge variant="destructive" className="mt-1">Flagged for Review</Badge>
                    )}
                    {msg.analysis?.modelFit && (
                      <div className="mt-2 p-2 bg-muted rounded">
                        <p className="font-medium">Model Fit Issue: {msg.analysis.modelFit.type}</p>
                        <p>Confidence: {(msg.analysis.modelFit.confidence * 100).toFixed(0)}%</p>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}