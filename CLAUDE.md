# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ex314.ai is a Catholic theological AI assistant web application with comprehensive Catholic resources including a saints directory, prayer collections, liturgical calendar, and AI-powered theological guidance.

## Development Commands

### Essential Commands
```bash
# Development
npm run dev                    # Start development server with auth bypass (port 3000)

# Build & Production
npm run build                  # Production build with auth bypass
npm run start                  # Start production server

# Code Quality
npm run lint                   # Run ESLint (uses new flat config in eslint.config.js)
npm run type-check             # TypeScript type checking

# Database Setup (PostgreSQL + Redis)
npm run db:init                # Initialize database schemas
npm run db:migrate             # Migrate saints data to database
npm run db:setup               # Complete database setup (init + migrate)
```

### Environment Variables Required
```bash
# Database
DATABASE_URL=                  # PostgreSQL connection string
POSTGRES_URL=                  # Alternative PostgreSQL URL (Vercel)
REDIS_HOST=                    # Redis host (default: localhost)
REDIS_PORT=                    # Redis port (default: 6379)
REDIS_PASSWORD=                # Redis password (optional)

# Firebase
NEXT_PUBLIC_FIREBASE_*         # Firebase configuration

# AI Integration
OPENAI_API_KEY=                # OpenAI API key for chat
TOGETHER_API_KEY=              # Together AI API key (for Llama model)

# Authentication
NEXT_PUBLIC_SKIP_AUTH_CHECK=true  # Bypass auth in development
```

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Next.js 15.3.3 with App Router and React Server Components
- **Language**: TypeScript 5.8 with strict mode
- **Database**: PostgreSQL (primary) + Redis (caching) + Firebase (auth/chat)
- **UI**: Tailwind CSS + shadcn/ui components + Radix UI primitives
- **AI**: OpenAI GPT + Together AI (Llama 3.3-70B transition planned)

### Database Architecture

#### PostgreSQL Schema Structure
- **Analytics Tables**: sessions, page_views, chat_analytics, contact_submissions
- **Content Tables**: saints, prayers, readings, liturgical_calendar
- **Optimization**: Full-text search (pg_trgm), materialized views, proper indexing
- **Connection Pooling**: 20 max connections with automatic management

#### Redis Caching Strategy
- **Cache Layers**: API responses, database queries, rate limiting
- **TTL Strategy**: Saints (24h), Lists (1h), Popular content (2h)
- **Invalidation**: Pattern-based cache clearing on data updates

#### Firebase Collections
- **User Data**: /users/{userId} - profiles and preferences
- **Chat History**: /conversations/{conversationId} - chat threads
- **Admin Logs**: /admin/chatLogs - conversation monitoring

### API Architecture

#### Saints API (`/api/saints`)
- **Features**: Pagination, filtering, full-text search, Redis caching
- **Rate Limiting**: 100 requests/minute per IP
- **Response Format**: Paginated with metadata and performance metrics
- **Query Parameters**: id, slug, type, month, day, patronage, liturgicalColor, popular, today

#### Performance Optimizations
- **Virtual Scrolling**: react-window for large saint lists
- **Lazy Loading**: Dynamic imports, intersection observer for images
- **Caching**: Multi-layer with Redis + browser cache headers
- **Database**: Connection pooling, query optimization, materialized views

### Component Architecture

#### Key Components
- **SaintsGridOptimized**: Virtual scrolling grid with lazy loading
- **ChatInterface**: Streaming AI responses with conversation history
- **LiturgicalCalendar**: Dynamic liturgical season calculation
- **SaintOfDay**: Daily saint with feast integration

#### State Management
- **Client State**: React hooks, context for theme/auth
- **Server State**: React Server Components for initial data
- **Cache State**: SWR patterns for API data fetching

### Authentication Flow
1. Firebase Auth primary (Google, email/password)
2. Demo mode fallback when `NEXT_PUBLIC_SKIP_AUTH_CHECK=true`
3. Admin detection via Firebase custom claims
4. Protected routes use middleware checks

### AI Chat System

#### Current Implementation
- **Model**: OpenAI GPT via Vercel AI SDK
- **Streaming**: Real-time response streaming
- **Logging**: Complete conversation storage in Firebase
- **Bias Detection**: Theological accuracy monitoring

#### Bias Detection Engine
Monitors for:
- Theological biases (denominational, doctrinal)
- Model performance (overfitting, underfitting)
- Response quality metrics

### Saints Data Structure

The saints database includes 213+ saints with:
- Core biographical data (name, feast date, type, liturgical color)
- Extended information (birth/death years, canonization, patronage)
- Related content (prayers, quotes, readings)
- Full-text search capabilities

### Code Organization

```
/app                    # Next.js App Router pages
  /api                  # API routes with database integration
  /saints               # Saints directory and detail pages
  /chat                 # AI chat interface
  /admin                # Admin dashboard
/components             # React components (UI elements)
/lib                    # Core utilities and data
  /database            # Database connection and repositories
  /saints-data.ts      # Saints data (213+ records)
/scripts               # Database initialization and migration
/public                # Static assets
```

### Testing Approach
- Type safety via TypeScript strict mode
- ESLint for code quality (flat config)
- Manual testing for critical paths
- Performance monitoring via API headers

### Build & Deployment

#### Build Process
1. Pre-build verification (`vercel-build.js`)
2. TypeScript compilation with strict checking
3. Next.js optimization (code splitting, tree shaking)
4. Static generation where possible

#### Performance Targets
- API response time: <100ms (cached), <500ms (uncached)
- Frontend Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Database queries: <100ms for common operations
- Cache hit rate: >70% for popular content

### Recent Major Changes (January 2025)
- Implemented PostgreSQL + Redis for production-ready database
- Added comprehensive API performance optimizations
- Implemented virtual scrolling for saints grid
- Created optimized caching strategy with invalidation
- Migrated ESLint to v9 flat config format
- Added rate limiting and request validation

### Migration Notes
- Saints data can be migrated from TypeScript to PostgreSQL via `npm run db:migrate`
- Firebase still used for auth and chat history
- PostgreSQL schema ready for analytics migration from Firebase
- Redis required for caching and rate limiting

### Common Development Tasks

#### Adding a New Saint
1. Update `/lib/saints-data.ts` with saint object
2. Run `npm run db:migrate` to sync to database
3. Cache will auto-invalidate on next request

#### Modifying API Endpoints
1. Update route handler in `/app/api/[endpoint]/route.ts`
2. Update corresponding repository in `/lib/database/`
3. Consider cache invalidation strategy
4. Add rate limiting if public-facing

#### Working with Chat System
1. Chat logs stored in Firebase `/admin/chatLogs`
2. Bias detection in `/lib/bias-detection.ts`
3. OpenAI integration in `/app/api/chat/route.ts`
4. Admin monitoring in `/app/admin/chat-logs`