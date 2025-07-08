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
```

## Architecture Overview

### Core Stack
- **Frontend**: Next.js 15 (App Router), React 18.2, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Firebase (Auth, Firestore, Functions), Next.js API routes
- **AI Integration**: OpenAI API (transitional), planning custom Llama-3.3-70B model
- **Deployment**: Vercel + Firebase App Hosting

### Directory Structure
- `/app/` - Next.js App Router pages and layouts
- `/components/` - React components (organized by feature)
- `/context/` - React Context providers (Auth, Chat, Theme, Liturgical)
- `/lib/` - Utilities and service layers
- `/functions/` - Firebase Cloud Functions
- `/dataconnect/` - Firebase Data Connect (PostgreSQL integration, not active)
- `/public/` - Static assets

### Key Features
1. **Chat System**: AI assistant with conversation history, search, and export
2. **Authentication**: Firebase Auth with demo mode fallback
3. **Catholic Resources**: Saints directory, prayers, daily readings
4. **Admin Dashboard**: Analytics and content management
5. **Liturgical Calendar**: Seasonal awareness and appropriate responses

### Authentication Flow
- Production: Firebase Authentication
- Development/Demo: Set `NEXT_PUBLIC_SKIP_AUTH_CHECK=true` or leave Firebase unconfigured
- Admin access: Checked via Firestore user document

### API Routes Pattern
All API routes follow Next.js 13+ App Router conventions:
- Located in `/app/api/*/route.ts`
- Export async functions named after HTTP methods (GET, POST, etc.)
- Key endpoints: `/api/chat/completion`, `/api/saints`, `/api/prayers`, `/api/readings`

### Chat Implementation
- **API**: `/app/api/chat/completion/route.ts` - Handles AI responses
- **Context**: `ChatContext` manages state and localStorage persistence
- **Components**: `ChatView` and related components in `/components/chat/`
- **Service**: `chatService.ts` provides chat operation methods

### Environment Variables
Required for production:
- `NEXT_PUBLIC_FIREBASE_*` - Firebase configuration
- `OPENAI_API_KEY` - For chat completions
- `NEXT_PUBLIC_TURNSTILE_*` - CAPTCHA configuration

Optional:
- `NEXT_PUBLIC_SKIP_AUTH_CHECK` - Enable demo mode
- `POSTGRES_*` - Future Google Cloud SQL integration

### Build Process
- Uses custom `vercel-build.js` for environment setup
- Build ignores ESLint and TypeScript errors (see `next.config.mjs`)
- No test suite currently implemented

### Firebase Services
- **Firestore**: Main database with security rules
- **Functions**: Two codebases (main + ex314-codebase)
- **Data Connect**: Configured but not actively used
- **App Hosting**: Configured as "ex314-web"

## Important Notes

1. **AI Model Transition**: Currently using OpenAI, transitioning to custom Llama model
2. **Demo Mode**: Always available when Firebase not configured
3. **Analytics**: Preparing for Google Cloud SQL migration
4. **Testing**: No test infrastructure currently exists
5. **Linting**: Different ESLint configs for main app vs functions

## Logging System

### Overview
Comprehensive conversation logging system for monitoring theological AI responses and bias detection.

### Components
- `/lib/logging/conversation-logger.ts` - Main logging service using Firestore
- `/lib/logging/bias-detector.ts` - Theological bias detection engine
- `/app/admin/logs/page.tsx` - Admin dashboard for viewing logs

### Features
1. **Complete Conversation Storage**: All messages, metadata, and AI reasoning
2. **Bias Detection**: Monitors for denominational, gender, and doctrinal biases
3. **Theological Analysis**: Tracks topics and citations
4. **Performance Metrics**: Latency, token usage, model versions

### Firestore Collections
- `conversation_logs` - Conversation metadata and summaries
- `message_logs` - Individual messages with analysis

### Future LLM Integration
To integrate custom Llama-3.3-70B model:
1. Update `/app/api/chat/completion/route.ts`
2. Set environment variables: `CUSTOM_LLM_API_URL` and `CUSTOM_LLM_API_KEY`
3. Modify the model configuration in logging metadata
4. The logging system will automatically capture reasoning and metrics