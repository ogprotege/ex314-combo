# Ex314.ai - Project Documentation Index

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [API Documentation](#api-documentation)
4. [Database Architecture](#database-architecture)
5. [Component Hierarchy](#component-hierarchy)
6. [Core Features](#core-features)
7. [Development Guide](#development-guide)
8. [Deployment & Infrastructure](#deployment--infrastructure)

---

## 🎯 Project Overview

**Ex314.ai** is a comprehensive Catholic theological AI assistant web application providing:
- AI-powered theological guidance using OpenAI GPT
- Saints directory with 213+ Catholic saints
- Liturgical calendar with daily readings
- Prayer collections and rosary guides
- Administrative tools for content management

### Tech Stack
- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript 5.8 (strict mode)
- **Database**: PostgreSQL + Redis + Firebase
- **UI**: Tailwind CSS + shadcn/ui + Radix UI
- **AI Models**: OpenAI GPT-4 (transitioning to Llama 3.3-70B)
- **Authentication**: Firebase Auth

### Key Statistics
- **Saints Database**: 213+ saints with full biographical data
- **API Endpoints**: 18+ REST endpoints
- **Component Library**: 80+ React components
- **Performance**: <100ms cached API response, <500ms uncached

---

## 🏗️ Architecture

### Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                    │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   App Router │  │   React SSR  │  │  Tailwind UI │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
├─────────────────────────────────────────────────────────┤
│                    API Layer (REST)                      │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  PostgreSQL  │  │     Redis    │  │   Firebase   │  │
│  │   (Primary)  │  │   (Caching)  │  │ (Auth/Chat)  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Directory Structure

```
ex314-combo/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── analytics/        # Analytics endpoints
│   │   ├── auth/             # Authentication
│   │   ├── chat/             # AI chat integration
│   │   ├── saints/           # Saints data API
│   │   ├── prayers/          # Prayers API
│   │   └── readings/         # Daily readings
│   ├── admin/                # Admin dashboard
│   ├── saints/               # Saints directory pages
│   ├── chat/                 # Chat interface
│   └── [pages]/              # Other app pages
├── components/               # React components
│   ├── chat/                 # Chat-specific components
│   ├── auth/                 # Authentication components
│   ├── ui/                   # shadcn/ui components
│   └── admin/                # Admin components
├── lib/                      # Core utilities
│   ├── database/             # Database layer
│   ├── firebase/             # Firebase integration
│   └── utils/                # Utility functions
├── public/                   # Static assets
│   └── images/               # Image resources
├── scripts/                  # Database scripts
└── styles/                   # Global styles
```

---

## 🔌 API Documentation

### Core API Endpoints

#### Saints API
- **GET** `/api/saints` - List/search saints
  - Query params: `id`, `slug`, `type`, `month`, `day`, `patronage`, `liturgicalColor`, `popular`, `today`
  - Features: Pagination, filtering, full-text search, Redis caching
  - Rate limit: 100 req/min per IP

#### Chat API
- **POST** `/api/chat/completion` - AI chat completion
  - Streaming responses via Server-Sent Events
  - Firebase conversation logging
  - Bias detection and monitoring

#### Analytics API
- **POST** `/api/analytics/beacon` - Track page views
- **POST** `/api/analytics/chat` - Track chat interactions
- **GET** `/api/analytics/diagnostic` - System diagnostics
- **GET** `/api/analytics/visitor-info` - Visitor analytics

#### Content APIs
- **GET** `/api/prayers` - Prayer collection
- **GET** `/api/readings` - Daily liturgical readings
- **GET** `/api/health` - Health check endpoint
- **GET** `/api/metrics` - Performance metrics

#### Admin APIs
- **POST** `/api/setup/contact-tables` - Initialize contact forms
- **GET** `/api/auth/check-admin` - Verify admin status

### API Response Format

```typescript
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  metadata?: {
    total?: number;
    page?: number;
    pageSize?: number;
    cached?: boolean;
    responseTime?: number;
  };
}
```

---

## 🗄️ Database Architecture

### PostgreSQL Schema

#### Core Tables

**saints**
```sql
- id (SERIAL PRIMARY KEY)
- name (VARCHAR(255))
- slug (VARCHAR(255) UNIQUE)
- feast_date (DATE)
- type (VARCHAR(50))
- liturgical_color (VARCHAR(50))
- birth_year (INTEGER)
- death_year (INTEGER)
- canonization_year (INTEGER)
- patronage (TEXT[])
- biography (TEXT)
- quotes (TEXT[])
- prayers (TEXT[])
- popular (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

**Analytics Tables**
- `sessions` - User session tracking
- `page_views` - Page view analytics
- `chat_analytics` - Chat interaction metrics
- `contact_submissions` - Contact form submissions

### Redis Caching Strategy

```
Cache Layers:
├── API Response Cache
│   ├── Saints List (TTL: 1h)
│   ├── Saint Details (TTL: 24h)
│   └── Popular Saints (TTL: 2h)
├── Database Query Cache
│   ├── Complex Queries (TTL: 30m)
│   └── Aggregations (TTL: 1h)
└── Rate Limiting
    └── IP-based limits (Window: 1m)
```

### Firebase Collections

```
Firebase Structure:
├── /users/{userId}
│   ├── profile
│   ├── preferences
│   └── lastActivity
├── /conversations/{conversationId}
│   ├── messages[]
│   ├── metadata
│   └── participants
└── /admin/
    └── chatLogs/{logId}
```

---

## 🧩 Component Hierarchy

### Core Components

```
components/
├── Layout Components
│   ├── SiteHeader
│   ├── SiteFooter
│   └── Navigation
├── Feature Components
│   ├── SaintsGridOptimized (Virtual scrolling)
│   ├── ChatInterface (AI chat)
│   ├── LiturgicalCalendar
│   ├── DailyReadings
│   └── SaintOfDay
├── Auth Components
│   ├── AuthCheck
│   ├── ProtectedRoute
│   ├── LoginButton
│   └── UserProfile
├── Chat Components
│   ├── ChatView
│   ├── ChatMessage
│   ├── ChatInput
│   ├── StreamingChatMessage
│   └── ChatHistoryDrawer
└── UI Components (shadcn/ui)
    ├── Button
    ├── Card
    ├── Dialog
    ├── Form
    └── [40+ more components]
```

### Component Features

#### Performance Optimizations
- **Virtual Scrolling**: react-window for large lists
- **Lazy Loading**: Dynamic imports with suspense
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

#### State Management
- **Client State**: React hooks + Context API
- **Server State**: React Server Components
- **Cache State**: SWR patterns for data fetching
- **Auth State**: Firebase Auth context

---

## 🚀 Core Features

### 1. AI Chat System
- OpenAI GPT integration
- Streaming responses
- Conversation history
- Bias detection
- Admin monitoring

### 2. Saints Directory
- 213+ saints database
- Advanced search & filtering
- Virtual scrolling grid
- Saint of the day
- Feast day calendar

### 3. Liturgical Features
- Dynamic liturgical seasons
- Daily readings integration
- Liturgical color themes
- Catholic calendar events

### 4. Prayer Resources
- Comprehensive prayer collection
- Rosary guide with mysteries
- Saints' prayers and quotes
- Daily prayer recommendations

### 5. Admin Dashboard
- Chat log monitoring
- Contact form management
- User analytics
- Content administration

---

## 💻 Development Guide

### Essential Commands

```bash
# Development
npm run dev                    # Start dev server (port 3000)
npm run build                  # Production build
npm run start                  # Start production server

# Code Quality
npm run lint                   # ESLint checking
npm run type-check             # TypeScript validation

# Database
npm run db:init                # Initialize schemas
npm run db:migrate             # Migrate saints data
npm run db:setup               # Complete setup
```

### Environment Configuration

```env
# Database
DATABASE_URL=postgresql://...
REDIS_HOST=localhost
REDIS_PORT=6379

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...

# AI Integration
OPENAI_API_KEY=sk-...
TOGETHER_API_KEY=...

# Development
NEXT_PUBLIC_SKIP_AUTH_CHECK=true
```

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| API Response (cached) | <100ms | ✅ 80ms |
| API Response (uncached) | <500ms | ✅ 350ms |
| LCP (Largest Contentful Paint) | <2.5s | ✅ 2.1s |
| FID (First Input Delay) | <100ms | ✅ 75ms |
| CLS (Cumulative Layout Shift) | <0.1 | ✅ 0.08 |
| Cache Hit Rate | >70% | ✅ 78% |

---

## 🚢 Deployment & Infrastructure

### Build Process

1. **Pre-build Verification** (`vercel-build.js`)
2. **TypeScript Compilation** (strict mode)
3. **Next.js Optimization**
   - Code splitting
   - Tree shaking
   - Image optimization
4. **Static Generation** (where applicable)

### Infrastructure Requirements

- **Node.js**: 18.x or higher
- **PostgreSQL**: 13+ with pg_trgm extension
- **Redis**: 6.x or higher
- **Firebase**: Blaze plan for production

### Monitoring & Analytics

- API performance headers
- Real-time error tracking
- User behavior analytics
- Chat interaction metrics
- Database query monitoring

---

## 📝 Recent Updates (January 2025)

- ✅ Implemented PostgreSQL + Redis architecture
- ✅ Added comprehensive API optimizations
- ✅ Virtual scrolling for saints grid
- ✅ Optimized caching with invalidation
- ✅ Migrated to ESLint v9 flat config
- ✅ Added rate limiting and validation
- 🔄 Transitioning to Llama 3.3-70B model

---

## 🔗 Quick Links

- [Saints API Documentation](#saints-api)
- [Database Schema](#postgresql-schema)
- [Component Library](#component-hierarchy)
- [Development Setup](#development-guide)
- [Performance Metrics](#performance-targets)

---

*Last Updated: January 2025*
*Version: 2.0.0*