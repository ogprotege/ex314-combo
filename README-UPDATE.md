# Ex314.ai - A.I., Sanctified

![Ex314.ai Logo](public/chi-ro.png)

## Theology without confusion. Philosophy without fog.

Ex314.ai is a groundbreaking Catholic theological AI assistant built on a custom fine-tuned Llama-3.3-70B-Instruct model. Trained on the entire Code of Canon Law, the Catechism of the Catholic Church, Vatican II documents, and other authoritative Catholic texts, it aims to explain, illuminate, and defend the faith with clarity, reverence, patience, and compassion.

> Not built to replace the Magisterium, but to serve it, this is the first LLM fine-tuned for clarity, approachability, and the New Evangelization. Trained on the full depth of Catholic teaching, it doesn't improvise or compromise. It explains, illuminates, and defends the faith with clarity, reverence, patience, and compassion—to find the lost seeking the Way, to steady the shaken searching for the Truth, and to shine the Light in the darkness for the questioning.

## 🚀 Vision and Mission

Ex314.ai was created to:

- Provide accurate, faithful Catholic theological explanations
- Make the richness of Catholic teaching accessible to modern seekers
- Support the New Evangelization through cutting-edge technology
- Serve as a digital companion for spiritual growth and understanding
- Bring clarity to complex theological concepts without compromise

## 📚 Training and Knowledge Base

Our LLM has been specifically fine-tuned on:

- The Catechism of the Catholic Church
- Code of Canon Law
- Vatican II Documents
- Church Fathers' writings
- Papal Encyclicals and Exhortations
- Summa Theologica and other scholastic works
- Modern Catholic theological texts
- Scripture with approved Catholic commentaries

This specialized training ensures the AI understands Catholic teaching in its proper context and can communicate it with both accuracy and pastoral sensitivity.

## 🛠️ Core Features

### Implemented Features
- **Theological Chat Interface**: AI-powered theological assistant (currently using OpenAI, transitioning to custom Llama model)
- **Dynamic Liturgical Calendar**: Automatically calculates liturgical seasons and feasts for any year
- **Saints Directory**: Explore saints' lives and legacies
- **Prayer Resources**: Traditional Catholic prayers in 11 languages
- **Daily Readings**: Connect with daily Mass readings
- **Authentication System**: Firebase auth with demo mode fallback
- **Comprehensive Logging**: Monitor conversations for bias and model quality
- **Admin Dashboard**: Analytics and content management
- **Responsive Design**: Works seamlessly on all devices

### New Features (January 2025)
- **Conversation Logging System**: Complete message history with metadata
- **Bias Detection Engine**: Monitors for theological, denominational, and cultural biases
- **Model Fit Analysis**: Detects overfitting/underfitting in AI responses
- **Dynamic Calendar Calculator**: No more hardcoded dates - works for any year
- **Privacy-First Design**: IP hashing and admin-only metadata access

### Upcoming Features
- **Custom Llama-3.3-70B Integration**: Replace OpenAI with our fine-tuned model
- **Citation System**: References to authoritative Catholic sources
- **Personalized Learning**: Tailored theological exploration paths
- **Parish Finder**: Connect users with local Catholic communities
- **Prayer Journals**: Track spiritual growth and intentions
- **Community Discussions**: Guided theological discourse
- **Multi-language Support**: Making Catholic teaching accessible globally

## 🧠 AI Philosophy

Ex314.ai is built with a distinct approach to AI:

1. **Faithful to the Magisterium**: The AI is designed to present Catholic teaching as taught by the Church, not to offer novel interpretations.

2. **Clear and Approachable**: Complex theology is explained in accessible language without reducing its depth.

3. **Pastorally Sensitive**: Responses balance doctrinal accuracy with compassion for those seeking understanding.

4. **Evangelically Oriented**: The AI aims to help those seeking truth to find it within Catholic teaching.

5. **Intellectually Rigorous**: Drawing on 2,000 years of Catholic intellectual tradition.

## 🖥️ Technical Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Icons**: Lucide React
- **Themes**: Liturgical color theming + dark/light mode

### Backend
- **Authentication**: Firebase Auth (with demo mode)
- **Database**: Firebase Firestore + Vercel Postgres (analytics)
- **API**: Next.js API routes
- **AI Integration**: OpenAI (transitional) → Custom Llama-3.3-70B

### Infrastructure
- **Deployment**: Vercel + Firebase App Hosting
- **Functions**: Firebase Cloud Functions
- **Analytics**: Custom implementation (preparing for Google Cloud SQL)
- **Monitoring**: Comprehensive logging with bias detection

## 📋 Requirements

- Node.js 18.x or higher
- npm or yarn
- Firebase project (optional - demo mode available)
- PostgreSQL database (for analytics)
- API keys (OpenAI for now, custom LLM later)

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ex314-combo.git
cd ex314-combo

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your environment variables
# - Firebase credentials (optional)
# - OpenAI API key (required for chat)
# - Database connection (optional)

# Run development server
npm run dev
```

## 🔧 Configuration

### Environment Variables

```env
# Firebase (optional - demo mode if not set)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# AI Integration
OPENAI_API_KEY=your_openai_key # Current
CUSTOM_LLM_API_URL=your_llm_url # Future
CUSTOM_LLM_API_KEY=your_llm_key # Future

# Database (optional)
POSTGRES_URL=your_postgres_url

# Security
IP_SALT=random_salt_for_hashing
```

### Database Setup

```bash
# Initialize database tables
psql -U your_user -d your_database -f scripts/init-database.sql
```

## 💳 Payment Integration Recommendations

For the donation feature, we recommend:

1. **Stripe** (Best overall)
   - 2.9% + $0.30 per transaction
   - Excellent API and documentation
   - Supports recurring donations

2. **PayPal Giving Fund**
   - 0% fees for registered non-profits
   - Wide user adoption
   - Easy integration

3. **Donorbox** (Best for religious orgs)
   - Designed for churches/non-profits
   - Donor management included
   - Recurring giving campaigns

4. **Give Lively**
   - Free platform for US non-profits
   - Text-to-give feature
   - Modern donor experience

## 🚀 Development

```bash
# Run linter
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

### Development Commands for Firebase Functions

```bash
cd functions
npm run build   # Build functions
npm run serve   # Test locally
npm run deploy  # Deploy to Firebase
```

## 📊 Monitoring and Analytics

The application includes comprehensive logging:

- **Conversation Logs**: All chat interactions stored securely
- **Bias Detection**: Automatic flagging of potential biases
- **Performance Metrics**: Response times, token usage
- **User Analytics**: Anonymous usage patterns
- **Error Tracking**: Comprehensive error logging

Access the admin dashboard at `/admin/logs` (admin role required).

## 🔒 Security

- **Authentication**: Firebase Auth with role-based access
- **Data Privacy**: IP addresses hashed, PII protection
- **Admin Access**: Restricted dashboard and logs
- **Firestore Rules**: Granular access control
- **HTTPS Only**: Enforced in production

## 🤝 Contributing

We welcome contributions that align with our mission! Please read our contributing guidelines before submitting PRs.

### Areas for Contribution
- Expanding saints database
- Adding more liturgical feast days
- Improving bias detection algorithms
- Adding language translations
- Writing tests
- Documentation improvements

## 📈 Future Roadmap

### Q1 2025
- ✅ Dynamic liturgical calendar
- ✅ Comprehensive logging system
- ⬜ Custom Llama model integration
- ⬜ Complete saints database

### Q2 2025
- ⬜ Citation system implementation
- ⬜ Prayer journal feature
- ⬜ Parish finder integration
- ⬜ Mobile app development

### Q3 2025
- ⬜ Community features
- ⬜ Advanced personalization
- ⬜ Offline support
- ⬜ API for third-party integration

## 🙏 Acknowledgments

This project is made possible by:
- The Catholic Church's rich theological tradition
- Open source contributors
- The broader Catholic tech community
- All who seek truth through technology

## 📞 Contact

- Website: [ex314.ai](https://ex314.ai)
- Email: support@ex314.ai
- Instagram: [@ex314](https://instagram.com/ex314)
- GitHub: [ex314ai](https://github.com/ex314ai)

## ⚖️ License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*"And the Word became flesh and dwelt among us" - John 1:14*

*Ex314.ai - Bringing the eternal wisdom of the Church to the digital age.*