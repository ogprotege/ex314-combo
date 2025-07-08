import { collection, addDoc, updateDoc, doc, arrayUnion, Timestamp, DocumentReference } from 'firebase/firestore';

interface ConversationMetadata {
  userId?: string;
  sessionId: string;
  userAgent?: string;
  ipHash?: string; // Hashed for privacy
  modelConfig: {
    model: string;
    temperature?: number;
    maxTokens?: number;
    systemPrompt?: string;
    provider: 'openai' | 'together' | 'custom';
  };
}

interface MessageLog {
  conversationId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  reasoning?: string; // For chain-of-thought from Llama
  metadata?: {
    timestamp: Date;
    tokenCount?: number;
    latency?: number;
    modelVersion?: string;
    promptTokens?: number;
    completionTokens?: number;
    temperature?: number;
    maxTokens?: number;
  };
  analysis?: {
    biasIndicators?: any[];
    theologicalTopics?: string[];
    sentimentScore?: number;
    citations?: string[]; // Biblical/Church document citations
    modelFit?: any; // Overfitting/underfitting detection
  };
  // Admin-only metadata (not shown to users)
  adminMetadata?: {
    ipHash?: string;
    userAgent?: string;
    requestHeaders?: Record<string, string>;
    modelInternalState?: any; // For debugging
    flaggedForReview?: boolean;
    reviewNotes?: string;
  };
  error?: string;
}

export class ConversationLogger {
  private db: any;
  private conversationsRef: any;
  private messagesRef: any;

  constructor() {
    // Lazy load Firebase to avoid initialization issues
    try {
      const firebase = require('@/lib/firebase');
      this.db = firebase.db;
      this.conversationsRef = collection(this.db, 'conversation_logs');
      this.messagesRef = collection(this.db, 'message_logs');
    } catch (error) {
      console.warn('Firebase not initialized for logging:', error);
    }
  }

  async createConversation(metadata: ConversationMetadata): Promise<string> {
    if (!this.db) {
      console.warn('Firebase not initialized, skipping conversation logging');
      return 'demo-conversation-' + Date.now();
    }
    try {
      const docRef = await addDoc(this.conversationsRef, {
        ...metadata,
        startTime: Timestamp.now(),
        messageCount: 0,
        status: 'active'
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating conversation log:', error);
      throw error;
    }
  }

  async logMessage(message: MessageLog): Promise<void> {
    if (!this.db) {
      console.warn('Firebase not initialized, skipping message logging');
      return;
    }
    try {
      await addDoc(this.messagesRef, {
        ...message,
        metadata: {
          ...message.metadata,
          timestamp: Timestamp.now(),
        }
      });

      // Update conversation message count
      await updateDoc(doc(this.conversationsRef, message.conversationId), {
        messageCount: arrayUnion(1),
        lastMessageTime: Timestamp.now()
      });
    } catch (error) {
      console.error('Error logging message:', error);
      // Don't throw - logging shouldn't break the chat
    }
  }

  async flagBias(messageId: string, biasType: string, severity: 'low' | 'medium' | 'high'): Promise<void> {
    if (!this.db) {
      console.warn('Firebase not initialized, skipping bias flagging');
      return;
    }
    try {
      await updateDoc(doc(this.messagesRef, messageId), {
        'analysis.biasIndicators': arrayUnion({
          type: biasType,
          severity,
          flaggedAt: Timestamp.now()
        })
      });
    } catch (error) {
      console.error('Error flagging bias:', error);
    }
  }

  async endConversation(conversationId: string, summary?: string): Promise<void> {
    if (!this.db) {
      console.warn('Firebase not initialized, skipping conversation end');
      return;
    }
    try {
      await updateDoc(doc(this.conversationsRef, conversationId), {
        endTime: Timestamp.now(),
        status: 'completed',
        summary
      });
    } catch (error) {
      console.error('Error ending conversation:', error);
    }
  }
}

// Singleton instance
export const conversationLogger = new ConversationLogger();