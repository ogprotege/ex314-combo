# Ex314.ai - A.I., Sanctified

![Ex314.ai Logo](public/chi-ro.png)

## Theology without confusion. Philosophy without fog.

Ex314.ai is a Catholic theological AI assistant web application built with Next.js 15, TypeScript, and Firebase. The project aims to provide AI-powered assistance for theological questions while offering traditional Catholic resources including a comprehensive saints directory, daily readings, prayer resources, and liturgical calendar integration.

> Built not to replace the Magisterium, but to serve it. This AI assistant provides Catholic theological guidance with clarity, reverence, patience, and compassion—to find the lost seeking the Way, to steady the shaken searching for the Truth, and to shine the Light in the darkness for the questioning.

## 🚀 Current Status (January 2025)

**Production Ready**: The application is fully functional with all major features implemented:

✅ **Complete Saints Database**: 212 saints covering January through July with full biographical data  
✅ **Prayer Resources**: Comprehensive collection of traditional Catholic prayers  
✅ **Daily Readings**: Integration with liturgical calendar and Mass readings  
✅ **Liturgical Calendar**: Dynamic season calculation with proper theming  
✅ **AI Chat Interface**: OpenAI-powered theological assistant (transitioning to custom Llama model)  
✅ **Admin Dashboard**: Full logging system with conversation monitoring and bias detection  
✅ **Authentication**: Firebase Auth with demo mode fallback  
✅ **Build & Deployment**: Production-ready with TypeScript safety and linting compliance  

## 🛠️ Core Features

### Saints Directory
- **212 Saints**: Complete coverage from January through July
- **Rich Biographical Data**: Life stories, legacies, patronages, and spiritual themes
- **Prayer Collections**: Saint-specific prayers and devotions
- **Liturgical Integration**: Proper feast day celebrations and colors
- **Search & Filter**: By name, feast date, type, and patronage

### Prayer Resources
- Traditional Catholic prayers organized by category
- Morning, evening, and specialized devotions
- Rosary mysteries and meditations
- Saint-specific prayer collections

### Liturgical Calendar
- **Dynamic Calculation**: Proper liturgical seasons for any year
- **Seasonal Theming**: UI colors that match liturgical seasons
- **Daily Readings**: Integration with Mass readings
- **Feast Day Tracking**: Saints and liturgical celebrations

### AI Chat Interface
- **Theological Assistance**: AI-powered responses to Catholic questions
- **Conversation Logging**: Comprehensive monitoring with bias detection
- **Export Functionality**: Save and share conversations
- **Admin Oversight**: Full conversation review and analysis tools

### Admin Dashboard
- **Conversation Logs**: View all AI interactions with metadata
- **Analytics Tracking**: User engagement and chat metrics
- **Content Management**: Administrative controls for site content
- **Security Monitoring**: Access controls and usage patterns

## 🧠 Technical Architecture

### Frontend Stack
- **Next.js 15.3.3**: App Router with React 18.2
- **TypeScript 5.8**: Full type safety throughout the application
- **Tailwind CSS**: Responsive design with shadcn/ui components
- **Liturgical Theming**: Dynamic color schemes based on Church calendar

### Backend Services
- **Firebase Suite**: Authentication, Firestore database, Cloud Functions
- **Next.js API Routes**: RESTful endpoints for saints, prayers, readings
- **OpenAI Integration**: Current AI model (transitioning to custom Llama deployment)
- **Comprehensive Logging**: Conversation monitoring with Firestore storage

### Database Schema
- **Firestore**: User data, chat history, conversation logs
- **Saints Data**: TypeScript-safe data structures with 200+ saint records
- **Analytics Schema**: PostgreSQL-ready analytics migration prepared
- **Admin Collections**: Separate admin-only data with proper security rules

## 📋 API Endpoints

### Saints API
```
GET /api/saints                    # Get all saints
GET /api/saints?type=Martyr        # Filter by saint type
GET /api/saints?patronOf=Students  # Filter by patronage
GET /api/saint-of-day              # Get today's featured saint
```

### Prayer Resources
```
GET /api/prayers                   # Get all prayers
GET /api/prayers?category=morning  # Filter by category
```

### Liturgical Data
```
GET /api/readings                  # Get today's Mass readings
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Firebase project (optional - demo mode available)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/ex314-combo.git
cd ex314-combo

# Install dependencies
npm install

# Run development server (with demo auth)
npm run dev

# Open http://localhost:3000
```

### Environment Configuration
Create `.env.local` with Firebase credentials (optional):
```env
# Firebase Authentication (optional - demo mode available)
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# AI Integration
OPENAI_API_KEY=your_openai_key

# Custom LLM (future)
CUSTOM_LLM_API_URL=your_custom_endpoint
CUSTOM_LLM_API_KEY=your_custom_key

# Security
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_key
TURNSTILE_SECRET_KEY=your_turnstile_secret
```

### Build Commands
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code quality check  
npm run type-check   # TypeScript validation
```

## 🏗️ Project Structure

```
ex314-combo/
├── app/                    # Next.js 15 App Router
│   ├── api/               # REST API endpoints
│   ├── saints/            # Saints directory pages
│   ├── chat/              # AI chat interface
│   ├── admin/             # Administrative dashboard
│   └── ...
├── components/            # React UI components
├── lib/                   # Core utilities and data
│   ├── saints-data.ts     # 212 saint records
│   ├── liturgical-*       # Calendar calculations
│   └── logging/           # Conversation monitoring
├── context/               # React state management
├── functions/             # Firebase Cloud Functions
└── scripts/               # Database initialization
```

## 📊 Data Coverage

### Saints Database Status
- **January**: 31 saints ✅
- **February**: 28 saints ✅  
- **March**: 31 saints ✅
- **April**: 30 saints ✅
- **May**: 31 saints ✅
- **June**: 30 saints ✅
- **July**: 31 saints ✅
- **August-December**: *Planned for expansion*

### Content Quality
- **Biographical Data**: Complete life stories and historical context
- **Spiritual Themes**: Categorized spiritual focus areas
- **Prayer Collections**: Saint-specific devotions and intercessions
- **Liturgical Integration**: Proper feast day celebrations and colors
- **TypeScript Safety**: Fully typed data structures with validation

## 🚦 Development Workflow

### Quality Assurance
- **TypeScript**: Full type safety with strict mode enabled
- **ESLint**: Code quality enforcement with zero warnings
- **Build Testing**: Production build validation required
- **Firebase Rules**: Security-first database access controls

### Testing Strategy
- **Navigation Testing**: All routes and user flows verified
- **Build Verification**: Production deployment readiness
- **Type Safety**: Complete TypeScript compliance
- **Authentication**: Both Firebase and demo modes tested

## 🎯 Future Development

### Near-term Goals
- **Custom LLM**: Deploy fine-tuned Llama-3.3-70B model
- **Saints Expansion**: Complete August through December
- **PostgreSQL Migration**: Analytics data transition
- **Multi-language**: Internationalization support

### Long-term Vision
- **Parish Integration**: Local community connections
- **Mobile Apps**: Native iOS and Android applications
- **Advanced Analytics**: Enhanced user insights and metrics
- **Community Features**: User-generated content and discussions

## 🤝 Contributing

Contributions welcome in these areas:
- **Catholic Content**: Theological accuracy and completeness
- **UI/UX**: Accessibility and user experience improvements
- **Performance**: Optimization and loading speed enhancements
- **Documentation**: Clear instructions and API documentation

Please ensure all contributions maintain TypeScript safety and pass linting checks.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 📧 Contact

For questions, support, or collaboration:
- **Email**: support@ex314.ai
- **Issues**: [GitHub Issues](https://github.com/yourusername/ex314-combo/issues)

---

> *"Faith and reason are like two wings on which the human spirit rises to the contemplation of truth."* - Pope St. John Paul II, Fides et Ratio

Ex314.ai leverages modern web technology in service of timeless Catholic truth, making the Church's rich teaching accessible to digital seekers worldwide.