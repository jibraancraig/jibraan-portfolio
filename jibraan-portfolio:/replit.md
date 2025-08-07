# Overview

This is a full-stack portfolio website application built with React and Express. The application features a modern, responsive design showcasing a professional portfolio with sections for about, experience, education, skills, and contact information. The frontend uses React with TypeScript, Tailwind CSS, and shadcn/ui components for a polished user interface, while the backend provides a REST API foundation with Express.js and PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation resolvers
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **API Structure**: RESTful API with /api prefix routing
- **Development**: Hot module replacement and error overlay support

## Data Layer
- **Schema Definition**: Centralized in shared/schema.ts using Drizzle ORM
- **Database Migrations**: Drizzle Kit for schema management
- **Type Generation**: Automatic TypeScript types from database schema
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Authentication & User Management
- **User Schema**: Basic user model with username/password fields
- **Storage Pattern**: Interface-based storage system allowing for easy switching between implementations
- **Session Handling**: Configured for PostgreSQL-backed sessions

## Deployment & Build
- **Development**: Node.js with tsx for TypeScript execution
- **Production Build**: Vite for frontend, esbuild for backend bundling
- **Static Assets**: Served through Express in production
- **Environment**: Supports both development and production configurations with proper error handling

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Environment Variables**: DATABASE_URL for connection string configuration

## UI Component Libraries
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Lucide React**: Modern icon library for consistent iconography
- **Embla Carousel**: Lightweight carousel component for image galleries

## Development Tools
- **Replit Integration**: Cartographer plugin for enhanced development experience
- **Runtime Error Overlay**: Development error handling and debugging
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Utility Libraries
- **Class Variance Authority**: Type-safe component variant management
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation for sessions and components

## Form & Validation
- **Zod**: Schema validation library
- **React Hook Form**: Performant form handling with minimal re-renders
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for schema validation