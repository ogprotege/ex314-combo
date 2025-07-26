# Ex314.ai - A.I., Sanctified

![Ex314.ai Logo](public/chi-ro.png)

## Theology without confusion. Philosophy without fog.

Ex314.ai is a Catholic theological AI assistant web application built with Next.js 15, TypeScript, and Firebase. The project aims to provide AI-powered assistance for theological questions while offering traditional Catholic resources including a comprehensive saints directory, daily readings, prayer resources, and liturgical calendar integration.

> Built not to replace the Magisterium, but to serve it. This AI assistant provides Catholic theological guidance with clarity, reverence, patience, and compassion—to find the lost seeking the Way, to steady the shaken searching for the Truth, and to shine the Light in the darkness for the questioning.

## 🚀 Current Status (January 2025)

**Production Ready**: The application is fully functional with all major features implemented and build-stable:

✅ **Complete Saints Database**: 213 saints covering January through May plus August start, with comprehensive biographical data and fully functional API  
✅ **Prayer Resources**: Extensive collection of traditional Catholic prayers organized by category  
✅ **Daily Readings**: Full integration with liturgical calendar and Mass readings  
✅ **Advanced Liturgical Calendar**: Dynamic season calculation with proper theming and color coordination  
✅ **AI Chat Interface**: OpenAI-powered theological assistant with comprehensive logging (transitioning to custom Llama model)  
✅ **Admin Dashboard**: Complete logging system with conversation monitoring, bias detection, and analytics  
✅ **Authentication System**: Firebase Auth with robust demo mode fallback for accessibility  
✅ **Build & Deployment**: Production-ready with full TypeScript safety, zero build errors, and linting compliance  
✅ **Comprehensive Logging**: Advanced conversation monitoring with theological bias detection and model quality assessment  

## 🛠️ Core Features

### Enhanced Saints Directory
- **213 Saints**: Complete coverage from January through May plus August start
- **Rich Biographical Data**: Detailed life stories, legacies, patronages, and spiritual themes
- **Advanced Data Structure**: Birth/death years, canonization dates, key life events, and historical context
- **Prayer Collections**: Saint-specific prayers, devotions, and intercessions
- **Liturgical Integration**: Proper feast day celebrations with liturgical colors and seasonal awareness
- **Saint of the Day**: Intelligent daily saint selection with liturgical feast integration
- **Advanced API**: Full REST API with filtering by ID, type, patronage, feast date, and pagination
- **UI Components**: Complete saints directory with individual saint pages featuring tabbed content
- **TypeScript Safety**: Fully typed data structures with comprehensive null-safety handling

### Prayer Resources
- **Comprehensive Collection**: Traditional Catholic prayers organized by category and purpose
- **Daily Prayer Cycles**: Morning, evening, and night prayers with seasonal variations
- **Specialized Devotions**: Including rosary mysteries, litanies, and novenas
- **Saint-Specific Prayers**: Curated prayer collections for each saint in the database
- **Liturgical Integration**: Prayers that adapt to current liturgical season

### Advanced Liturgical Calendar System
- **Dynamic Calculation**: Accurate liturgical seasons for any year with Easter calculation
- **Seasonal Theming**: Real-time UI color coordination matching liturgical seasons
- **Daily Readings Integration**: Complete Mass readings with proper citations
- **Feast Day Tracking**: Comprehensive saint celebrations and liturgical observances
- **Historical Accuracy**: Supports liturgical years A, B, and C with proper cycle calculations

### AI Chat Interface with Monitoring
- **Theological Assistance**: AI-powered responses to Catholic doctrinal questions
- **Comprehensive Logging**: Complete conversation storage with metadata analysis
- **Bias Detection Engine**: Advanced monitoring for theological, denominational, and doctrinal biases
- **Quality Assessment**: Overfitting/underfitting detection for model performance
- **Export Functionality**: Save and share conversations with formatting options
- **Admin Oversight**: Full conversation review and analysis tools for quality control

### Advanced Admin Dashboard
- **Conversation Monitoring**: View all AI interactions with complete metadata
- **Analytics Tracking**: Detailed user engagement and chat performance metrics
- **Content Management**: Administrative controls for saints data and site content
- **Security Monitoring**: Access controls, usage patterns, and system health
- **Bias Detection Reports**: Theological accuracy monitoring and quality assurance
- **System Performance**: Model performance metrics and optimization insights

## 🧠 Technical Architecture

### Frontend Stack
- **Next.js 15.3.3**: Modern App Router with React 18.2 and Server Components
- **TypeScript 5.8**: Full type safety with strict mode and comprehensive error handling
- **Tailwind CSS**: Responsive design with extensive shadcn/ui component library
- **Liturgical Theming**: Dynamic color schemes synchronized with Church calendar
- **Build Optimization**: Zero-error production builds with advanced optimization

### Backend Services
- **Firebase Suite**: Complete authentication, Firestore database, and Cloud Functions
- **Next.js API Routes**: RESTful endpoints for saints, prayers, readings, and analytics
- **OpenAI Integration**: Current AI model with transition path to custom Llama-3.3-70B deployment
- **Advanced Logging System**: Comprehensive conversation monitoring with Firestore storage
- **PostgreSQL Ready**: Future-ready analytics schema with migration path prepared

### Database Schema & Data Management
- **Firestore Collections**: User data, chat history, conversation logs, and analytics
- **Saints Data**: TypeScript-safe data structures with 200+ comprehensive saint records
- **Analytics Schema**: PostgreSQL-ready analytics migration with complete table structure
- **Admin Collections**: Separate admin-only data with proper security rules and access controls
- **Demo Mode Support**: Public demo collections for accessibility without authentication

## 📋 API Endpoints

### Saints API
```
GET /api/saints                    # Get all saints with optional filtering
GET /api/saints?id=saint-id        # Get specific saint by ID
GET /api/saints?type=Martyr        # Filter by saint type (Martyr, Confessor, etc.)
GET /api/saints?patronOf=Students  # Filter by patronage category
GET /api/saints?feastDate=January%201  # Filter by specific feast date
GET /api/saints?today=true         # Get today's saint of the day
GET /api/saints?today=true&date=2025-07-25  # Get saint for specific date
GET /api/saints?limit=10           # Limit number of results returned
```

### Prayer Resources
```
GET /api/prayers                   # Get all prayers with optional category filtering
GET /api/prayers?category=morning  # Filter by prayer category
GET /api/prayers?type=traditional  # Filter by prayer type
```

### Liturgical Data
```
GET /api/readings                  # Get today's Mass readings with proper citations
GET /api/readings?date=2025-01-25  # Get readings for specific date
```

### Analytics & Admin
```
GET /api/analytics/chat           # Chat usage analytics (admin only)
POST /api/analytics/beacon        # User engagement tracking
GET /api/admin/logs               # Conversation logs (admin only)
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Firebase project (optional - comprehensive demo mode available)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/ex314-combo.git
cd ex314-combo

# Install dependencies
npm install

# Run development server (with demo auth bypass)
npm run dev

# Open http://localhost:3000
```

### Environment Configuration
Create `.env.local` with Firebase credentials (optional for demo mode):
```env
# Firebase Authentication (optional - demo mode available)
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# AI Integration
OPENAI_API_KEY=your_openai_key

# Custom LLM Integration (planned)
CUSTOM_LLM_API_URL=your_custom_endpoint
CUSTOM_LLM_API_KEY=your_custom_key

# Security & Analytics
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_key
TURNSTILE_SECRET_KEY=your_turnstile_secret

# Demo Mode (enables full functionality without Firebase)
NEXT_PUBLIC_SKIP_AUTH_CHECK=true
```

### Build Commands
```bash
npm run dev          # Development server with hot reload
npm run build        # Production build with full optimization
npm run start        # Production server
npm run lint         # ESLint code quality check
npm run type-check   # TypeScript validation and error checking

# Firebase Functions (in functions/ directory)
cd functions
npm run build        # Build cloud functions
npm run serve        # Serve functions locally
npm run deploy       # Deploy to Firebase
npm run logs         # View function logs

# Ex314 Functions (in ex314-codebase/ directory)
cd ex314-codebase
npm run build        # Build additional functions
npm run serve        # Serve functions locally
npm run deploy       # Deploy to Firebase
```

## 🏗️ Project Structure

```
ex314-combo/
├── app/                    # Next.js 15 App Router
│   ├── api/               # REST API endpoints
│   │   ├── saints/        # Saints data API
│   │   ├── prayers/       # Prayer resources API
│   │   ├── readings/      # Daily readings API
│   │   ├── analytics/     # Usage analytics
│   │   └── chat/          # AI chat completion
│   ├── saints/            # Saints directory pages
│   ├── chat/              # AI chat interface
│   ├── admin/             # Administrative dashboard
│   │   ├── logs/          # Conversation monitoring
│   │   └── analytics/     # Usage analytics
│   └── ...
├── components/            # React UI components
│   ├── admin/             # Admin-specific components
│   ├── chat/              # Chat interface components
│   ├── saints/            # Saints directory components
│   └── liturgical/        # Calendar and seasonal components
├── lib/                   # Core utilities and data
│   ├── saints-data.ts     # 213 comprehensive saint records with helper functions
│   ├── liturgical-*       # Advanced calendar calculations with seasonal theming
│   ├── logging/           # Conversation monitoring system
│   └── analytics/         # Usage tracking and metrics
├── context/               # React state management
│   ├── AuthContext.tsx    # Authentication state
│   ├── ChatContext.tsx    # Chat conversation state
│   └── ThemeContext.tsx   # Liturgical theming
├── functions/             # Firebase Cloud Functions (main)
├── ex314-codebase/        # Additional Firebase Functions
├── scripts/               # Database initialization and utilities
│   └── init-database.sql  # PostgreSQL schema for analytics
└── dataconnect/          # Firebase Data Connect (prepared)
```

## 📊 Data Coverage & Quality

### Saints Database Status
- **January**: 31 saints ✅ Complete with full biographical data
- **February**: 28 saints ✅ Complete with comprehensive details
- **March**: 31 saints ✅ Complete with historical context
- **April**: 30 saints ✅ Complete with spiritual themes
- **May**: 92 saints ✅ Complete with prayer collections
- **August**: 1 saint ✅ Saint Sharbel Makhluf (July 24 feast date)
- **June, July, September-December**: *Planned for future expansion*

**Total**: 213 saints with comprehensive data structure including prayers, quotes, readings, and liturgical integration

### Enhanced Content Quality
- **Comprehensive Biographical Data**: Complete life stories with historical context and spiritual significance
- **Advanced Data Structure**: Birth/death years, canonization dates, key life events, and theological themes
- **Prayer Collections**: Saint-specific devotions, intercessions, and traditional prayers
- **Liturgical Integration**: Proper feast day celebrations with accurate liturgical colors and seasons
- **TypeScript Safety**: Fully typed data structures with comprehensive null-safety and validation
- **Build Stability**: Zero compilation errors with production-ready code quality

## 🔧 Advanced Features

### Comprehensive Logging System
- **Complete Conversation Storage**: All AI interactions with full metadata
- **Theological Bias Detection**: Advanced monitoring for denominational and doctrinal accuracy
- **Model Quality Assessment**: Overfitting/underfitting detection and performance metrics
- **Admin Dashboard**: Full conversation review with analytical insights
- **Privacy Protection**: IP address hashing and secure data handling

### Liturgical Calendar Integration
- **Dynamic Calculations**: Accurate Easter dating and moveable feast calculations
- **Liturgical Years**: Support for cycles A, B, and C with proper readings
- **Seasonal Theming**: Real-time UI adaptation to liturgical colors and seasons
- **Historical Accuracy**: Comprehensive feast day tracking and celebration support

### Build & Deployment Excellence
- **Zero Build Errors**: Production-ready with comprehensive TypeScript safety
- **Advanced Optimization**: Code splitting, tree shaking, and performance optimization
- **Environment Flexibility**: Robust demo mode for accessibility without authentication
- **Security First**: Comprehensive Firestore rules with admin access controls

## 🚦 Development Workflow

### Quality Assurance Standards
- **TypeScript**: Full type safety with strict mode and comprehensive error handling
- **ESLint**: Zero-warning code quality enforcement with custom rules
- **Build Testing**: Production build validation required for all changes
- **Firebase Security**: Security-first database access controls with admin separation
- **Performance**: Optimized builds with advanced Next.js 15 features

### Testing & Validation Strategy
- **Navigation Testing**: All routes and user flows comprehensively verified
- **Build Verification**: Production deployment readiness with zero errors
- **Type Safety**: Complete TypeScript compliance with strict mode
- **Authentication**: Both Firebase and demo modes thoroughly tested
- **Cross-Platform**: Desktop and mobile responsiveness validated

## 🎯 Future Development Roadmap

### Near-term Goals (Q1 2025)
- **Custom LLM Deployment**: Fine-tuned Llama-3.3-70B model via Together AI
- **Saints Database Completion**: August through December saint additions
- **PostgreSQL Migration**: Advanced analytics data transition
- **Performance Optimization**: Further build and runtime improvements

### Medium-term Vision (Q2-Q3 2025)
- **Multi-language Support**: Internationalization with major Catholic languages
- **Advanced Analytics**: Enhanced user insights and engagement metrics
- **Mobile Optimization**: Progressive Web App features and mobile-first improvements
- **Community Features**: User-generated content and discussion capabilities

### Long-term Vision (2025-2026)
- **Parish Integration**: Local community connections and parish-specific features
- **Native Mobile Apps**: iOS and Android applications with offline capabilities
- **Advanced AI Features**: Multi-modal support and enhanced theological reasoning
- **Educational Integration**: Formal Catholic education and seminary support

## 🤝 Contributing

We welcome contributions in these key areas:

### Content & Accuracy
- **Catholic Content**: Theological accuracy review and completeness verification
- **Saints Database**: Additional biographical research and data enhancement
- **Prayer Resources**: Traditional prayer additions and translations
- **Liturgical Data**: Calendar accuracy and seasonal celebration support

### Technical Improvements
- **UI/UX Enhancement**: Accessibility improvements and user experience optimization
- **Performance**: Loading speed optimization and resource efficiency
- **Security**: Authentication and data protection enhancements
- **Documentation**: Clear instructions and comprehensive API documentation

### Development Guidelines
- Maintain TypeScript safety and pass all linting checks
- Follow existing code patterns and architectural decisions
- Ensure zero build errors and production readiness
- Test both Firebase and demo mode functionality

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 📧 Contact & Support

For questions, support, or collaboration opportunities:
- **Email**: support@ex314.ai
- **Issues**: [GitHub Issues](https://github.com/yourusername/ex314-combo/issues)
- **Documentation**: See `CLAUDE.md` for comprehensive development guidance

---

> *"Faith and reason are like two wings on which the human spirit rises to the contemplation of truth."* - Pope St. John Paul II, Fides et Ratio

Ex314.ai leverages cutting-edge web technology in service of timeless Catholic truth, making the Church's rich teaching accessible to digital seekers worldwide through modern, maintainable, and secure code architecture.