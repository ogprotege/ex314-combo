# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ex314.ai is a Catholic theological AI assistant web application built with Next.js 15, TypeScript, and Firebase. The project aims to provide AI-powered assistance for theological questions while offering traditional Catholic resources.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (with auth bypass)
npm run dev

# Build for production (with auth bypass)
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Check TypeScript types
npm run type-check

# Firebase Functions (in functions/ directory)
cd functions
npm run build       # Build functions
npm run serve       # Serve functions locally
npm run deploy      # Deploy to Firebase
npm run logs        # View function logs

# Ex314 Functions (in ex314-codebase/ directory)
cd ex314-codebase
npm run build       # Build functions
npm run serve       # Serve functions locally
npm run deploy      # Deploy to Firebase
```

## Architecture Overview

### Core Stack
- **Frontend**: Next.js 15.3.3 (App Router), React 18.2, TypeScript 5.8
- **Styling**: Tailwind CSS, shadcn/ui components (extensive Radix UI primitives)
- **Backend**: Firebase (Auth, Firestore, Functions), Next.js API routes
- **AI Integration**: OpenAI API (transitional), planning custom Llama-3.3-70B model via Together AI
- **Deployment**: Vercel + Firebase App Hosting

### Directory Structure
- `/app/` - Next.js App Router pages and layouts
- `/components/` - React components (organized by feature)
- `/context/` - React Context providers (Auth, Chat, Theme, Liturgical)
- `/lib/` - Utilities and service layers
- `/functions/` - Firebase Cloud Functions (main)
- `/ex314-codebase/` - Additional Firebase Functions
- `/dataconnect/` - Firebase Data Connect (PostgreSQL integration, not active)
- `/public/` - Static assets
- `/scripts/` - Database initialization and utilities

### Key Features
1. **Chat System**: AI assistant with conversation history, search, and export
2. **Authentication**: Firebase Auth with demo mode fallback
3. **Catholic Resources**: Saints directory, prayers, daily readings, liturgical calendar
4. **Admin Dashboard**: Analytics, logs viewer, and content management
5. **Liturgical Calendar**: Seasonal awareness with dynamic theming

### Authentication Flow
- Production: Firebase Authentication required
- Development/Demo: Automatically enabled via `NEXT_PUBLIC_SKIP_AUTH_CHECK=true`
- Admin access: Role-based checking via Firestore user document
- Demo collections: Public access at `demo/*` collections

### API Routes Pattern
All API routes follow Next.js 13+ App Router conventions:
- Located in `/app/api/*/route.ts`
- Export async functions named after HTTP methods (GET, POST, etc.)
- Key endpoints:
  - `/api/chat/completion` - AI chat completions
  - `/api/saints`, `/api/saint-of-day` - Saints data
  - `/api/prayers` - Prayer resources
  - `/api/readings` - Daily scripture readings
  - `/api/contact` - Contact form submission
  - `/api/download-chat` - Chat export functionality

### Chat Implementation
- **API**: `/app/api/chat/completion/route.ts` - Handles AI responses with OpenAI
- **Context**: `ChatContext` manages state and localStorage persistence
- **Components**: `ChatView` and related components in `/components/chat/`
- **Service**: `chatService.ts` provides chat operation methods
- **Logging**: Comprehensive conversation logging with bias detection

### Environment Variables
Required for production:
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

# AI Integration
OPENAI_API_KEY              # Current provider
CUSTOM_LLM_API_URL          # Future Llama endpoint
CUSTOM_LLM_API_KEY          # Future Llama auth

# Security
NEXT_PUBLIC_TURNSTILE_SITE_KEY
NEXT_PUBLIC_TURNSTILE_SECRET_KEY
```

Optional:
```bash
NEXT_PUBLIC_SKIP_AUTH_CHECK=true  # Enable demo mode
POSTGRES_*                        # Future database migration
```

### Build Process
- Custom `vercel-build.js` pre-build script sets environment defaults
- Build configured to ignore ESLint and TypeScript errors (see `next.config.mjs`)
- No test suite currently implemented
- Images served unoptimized from external sources (Unsplash)

### Firebase Services
- **Firestore**: Primary database with comprehensive security rules
- **Functions**: Two separate codebases (main + ex314-codebase)
- **Data Connect**: Configured but not actively used
- **App Hosting**: Configured as "ex314-web"
- **Security Rules**: Temporary development rule expires 2025-01-31

### Database Schema
Currently using Firestore with these collections:
- `users`, `sessions` - User management
- `chats`, `conversation_logs`, `message_logs` - Chat system
- `saints`, `prayers` - Catholic content
- `analytics`, `contacts` - User analytics
- `demo/*` - Demo mode data (publicly accessible)

PostgreSQL schema prepared in `/scripts/init-database.sql` for future migration.

## Logging System

### Overview
Comprehensive conversation logging system for monitoring theological AI responses and bias detection.

### Components
- `/lib/logging/conversation-logger.ts` - Main logging service using Firestore
- `/lib/logging/bias-detector.ts` - Theological bias detection engine
- `/lib/logging/types.ts` - TypeScript interfaces for logging
- `/app/admin/logs/page.tsx` - Admin dashboard for viewing logs

### Features
1. **Complete Conversation Storage**: All messages, metadata, and AI reasoning
2. **Bias Detection**: Monitors for denominational, gender, and doctrinal biases
3. **Theological Analysis**: Tracks topics, citations, and theological accuracy
4. **Performance Metrics**: Latency, token usage, model versions
5. **Overfitting/Underfitting Detection**: Model quality monitoring

### Firestore Collections
- `conversation_logs` - Conversation metadata and summaries
- `message_logs` - Individual messages with analysis

## Liturgical Calendar System

The app includes a sophisticated liturgical calendar that:
- Calculates Catholic feast days and seasons
- Dynamically themes the UI based on liturgical colors
- Provides saint-of-the-day information
- Supports seasons: Advent, Christmas, Lent, Easter, Ordinary Time
- Colors: Green, Purple, White, Red, Rose, Black

## Important Notes

1. **AI Model Transition**: Currently using OpenAI, preparing for custom Llama-3.3-70B
2. **Demo Mode**: Always available when Firebase not configured
3. **Analytics Migration**: PostgreSQL schema ready for future analytics
4. **Testing Gap**: No test infrastructure currently exists
5. **Build Workarounds**: ESLint and TypeScript errors suppressed during build
6. **Content Status**: 213 saints in database (January through May fully covered, partial August started)
7. **Security Timeline**: Firestore development rules expire January 31, 2025

## Future LLM Integration

To integrate custom Llama-3.3-70B model:
1. Update `/app/api/chat/completion/route.ts` to use Together AI SDK
2. Set environment variables: `CUSTOM_LLM_API_URL` and `CUSTOM_LLM_API_KEY`
3. Modify model configuration in logging metadata
4. The logging system will automatically capture reasoning and metrics
5. Consider updating system prompts in `/lib/prompts/` for theological accuracy