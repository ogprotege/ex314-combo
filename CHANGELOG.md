# Changelog

All notable changes to Ex314.ai will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2025-01-25

### Added
- Enhanced README documentation with comprehensive feature coverage and technical architecture details
- Advanced project structure documentation with detailed component organization
- Complete API endpoint documentation with examples and filtering options
- Comprehensive development workflow and quality assurance guidelines
- Future development roadmap with quarterly milestones and long-term vision

### Changed
- Updated README to reflect current production-ready status with all major features implemented
- Enhanced technical architecture documentation with advanced features and build optimization details
- Improved project structure visualization with comprehensive directory organization
- Updated installation and setup instructions with complete environment configuration
- Expanded contributing guidelines with specific areas for content and technical improvements

### Fixed
- Documentation accuracy to reflect current codebase state and feature completeness
- Technical specification alignment with actual implementation and build process
- API documentation completeness with all available endpoints and parameters

## [0.3.2] - 2025-01-24

### Added
- Complete saints database expansion through July (212 total saints)
  - Added 31 saints for June covering major feast days and celebrations
  - Added 31 saints for July including significant martyrs and confessors
  - Enhanced Saint interface with comprehensive biographical data fields
  - Added patronage information, spiritual themes, and key life events
- Enhanced build process with zero-error production builds
- Advanced TypeScript safety with comprehensive null-value handling
- Improved saints API with robust filtering and search capabilities

### Changed
- Updated Saint TypeScript interface to support expanded data structure
  - Added optional fields: birthYear, deathYear, canonizationYear, patronage, biography, keyEvents, spiritualThemes
  - Made core biographical fields (shortBio, life, legacy, patronOf) optional for data flexibility
- Enhanced build optimization with advanced Next.js 15 features
- Improved saints data structure consistency and type safety
- Updated saint-related API endpoints to handle expanded data schema
- Optimized build performance with proper null/undefined handling

### Changed
- Updated Saint TypeScript interface to support expanded data structure
  - Added optional fields: birthYear, deathYear, canonizationYear, patronage, biography, keyEvents, spiritualThemes
  - Made core biographical fields (shortBio, life, legacy, patronOf) optional for data flexibility
- Enhanced build optimization with advanced Next.js 15 features
- Improved saints data structure consistency and type safety

### Fixed
- Critical build errors preventing production deployment
  - Fixed TypeScript type safety issues across saints-related components
  - Resolved quote formatting syntax errors in saints biographical data (lib/saints-data.ts:6616, 7446)
  - Added comprehensive null checks for patronOf property in API routes and display components
- Saints data TypeScript compliance and build errors
- Null value handling in saint year fields and optional biographical properties
- API route type safety for saint filtering and patronage searches
- Saint detail page rendering with optional biographical fields
- Production build stability with zero compilation errors

### Technical
- Achieved zero-error production builds with comprehensive TypeScript safety
- Enhanced build process to ensure zero TypeScript errors and production readiness
- Improved saints data structure consistency and type safety throughout codebase
- Updated saint-related API endpoints to handle expanded data schema with proper validation
- Optimized build performance with advanced null/undefined handling and type checking

## [0.3.1] - 2025-01-08

### Added
- Comprehensive logging system for theological AI monitoring
  - Conversation and message logging to Firestore
  - Theological bias detection engine
  - Overfitting/underfitting detection for model quality
  - Admin dashboard at `/admin/logs` with metadata visibility
  - IP hashing for privacy protection
- Dynamic liturgical calendar calculator
  - Calculates Easter and moveable feasts for any year
  - Automatic liturgical season determination
  - Support for liturgical years A, B, and C
- Database initialization script (`/scripts/init-database.sql`)
  - Complete schema for analytics, chat, and user data
  - PostgreSQL/Vercel Postgres compatible
- Functional donation form component with payment provider recommendations
- Privacy policy page at `/privacy`
- Admin navigation sidebar and layout

### Changed
- Updated all Instagram links from @ex314ai to @ex314
- Fixed hardcoded dates in liturgical calendar components
  - Now uses actual current date instead of May 2025
  - Dynamic calculation of liturgical seasons
- Improved saint-of-day API to handle date parsing correctly
- Updated Firestore security rules with proper admin access control
- Enhanced chat completion API with comprehensive logging

### Fixed
- Saint-of-day API date parsing (feastDay vs feastDate)
- Liturgical calendar hardcoded 2025 dates
- Missing privacy page link in footer
- Admin navigation accessibility
- TypeScript type errors in logging system

### Security
- Implemented admin-only access to conversation logs
- Added IP address hashing for privacy
- Separated admin metadata from user-visible data
- Updated Firestore rules to restrict log access

## [0.3.0] - 2025-01-04

### Added
- Saint of the Day API endpoint
- Daily readings functionality
- Liturgical calendar integration
- Contact form with Firebase integration
- Chat analytics tracking

### Changed
- Migrated chat interface from separate repository
- Updated authentication flow with demo mode
- Improved responsive design across all pages

## [0.2.0] - 2024-12-15

### Added
- Firebase Authentication integration
- Firestore database setup
- Admin dashboard scaffolding
- Prayer page with multi-language support
- Rosary page with mysteries

### Changed
- Upgraded to Next.js 15
- Switched to App Router architecture
- Updated UI components to shadcn/ui

## [0.1.0] - 2024-11-01

### Added
- Initial project setup
- Basic home page
- Catholic theological AI assistant concept
- Next.js 14 framework
- Tailwind CSS styling