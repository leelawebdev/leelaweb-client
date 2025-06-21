# Leelaweb Development Context

## Project Overview

**Project Name:** Leelaweb Client  
**Technology Stack:** Angular with TypeScript  
**Date Created:** June 21, 2025

## Content Hierarchy

The Leelaweb platform follows a 4-level content hierarchy:

```
Categories (Top Level)
    ↓
Topics (belong to Categories)
    ↓
Series (belong to Topics)
    ↓
Chapters (belong to Series)
```

### Content Structure Details:

- **Categories**: Top-level content organization (main subject areas)
- **Topics**: Specific subjects within a category
- **Series**: Structured learning paths or course sequences within a topic
- **Chapters**: Individual lessons or content units within a series

### Content Flow:

1. Users browse **Categories** to find areas of interest
2. Within a category, they explore **Topics**
3. Topics contain multiple **Series** (learning paths)
4. Each series consists of sequential **Chapters** (lessons)

## Project Structure

This is an Angular web application with the following key components:

### Frontend Framework

- **Angular 20.0.0** (with Server-Side Rendering support)
- **Angular SSR** (@angular/ssr ^20.0.0) for server-side rendering
- **TypeScript 5.8.3** for type safety
- **SCSS** for styling
- **Tailwind CSS 4.1.8** for utility-first CSS
- **Express.js** for SSR server

### Project Architecture

```
leelaweb-client/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── carousel/        # Carousel component
│   │   │   └── header/          # Header component
│   │   └── pages/              # Application pages
│   │       ├── admin/          # Admin panel pages
│   │       │   ├── categories/ # Category management
│   │       │   ├── topics/     # Topic management
│   │       │   ├── series/     # Series management
│   │       │   ├── chapters/   # Chapter management
│   │       │   └── users/      # User management
│   │       ├── landing/        # Landing page
│   │       ├── categories/     # Categories browsing
│   │       ├── topics/         # Topics listing
│   │       ├── series/         # Series pages
│   │       ├── chapters/       # Chapter viewing
│   │       ├── signin/         # Authentication
│   │       └── signup/         # User registration
│   └── styles.scss             # Global styles
└── server.ts                   # SSR server configuration
```

### Key Features

Based on the file structure, this appears to be a content management and learning platform with:

1. **Content Management System**

   - **Categories** organization (top-level content areas)
   - **Topics** creation and management (within categories)
   - **Series** creation and management (within topics)
   - **Chapters** creation and management (within series)
   - Content hierarchy: Categories → Topics → Series → Chapters

2. **User Management**

   - User authentication (signin/signup)
   - Admin panel for content management
   - User roles and permissions

3. **Content Presentation**
   - Landing page for public access
   - Categories browsing (top-level navigation)
   - Topics exploration within categories
   - Series browsing and viewing within topics
   - Chapter reading interface within series
   - Carousel component for featured content

### Technical Configuration

- **Angular.json:** Angular workspace configuration
- **Package.json:** Dependencies and scripts (Angular 20.0.0)
- **Tailwind.config.js:** Tailwind CSS 4.1.8 configuration
- **TypeScript configs:** Multiple tsconfig files for different build targets
- **Server-side rendering:** Angular SSR with Express.js server
  - Main server file: `server.ts`
  - SSR config: `app.config.server.ts`
  - Server main: `main.server.ts`

### Available Tasks

- `npm start` - Development server (ng serve)
- `npm test` - Test runner (background task)
- `npm run build` - Production build
- `npm run serve:ssr:leelaweb-client` - Start SSR server (serves from dist/)

## Development Notes

- The application uses Angular's standalone components architecture
- Server-side rendering is implemented for better SEO and performance
- The project follows a modular structure with clear separation between components and pages
- Admin functionality is separated into its own module for better organization

## Future Considerations

- This appears to be an educational or content platform
- The structure suggests a hierarchical content system
- Admin capabilities for full content lifecycle management
- User authentication and role-based access control

---

_Context saved on: June 21, 2025_
_Workspace: /Users/leela/code/leelawebdev/leelaweb-client_

### Angular Routing Structure

The application uses Angular's lazy loading with `loadComponent` for optimal performance:

#### Public Routes:

```typescript
/ - Landing page
/topics - Topics listing page
/topics/:topic - Series within a specific topic
/series - All series overview
/series/:series - Chapters within a specific series
/chapters/:chapter - Individual chapter content
/signin - User authentication
/signup - User registration
```

#### Admin Routes (Protected by superadmin role):

```typescript
/admin - Admin dashboard
/admin/users - User management listing
/admin/users/create - Create new user
/admin/users/:id - View user details
/admin/users/:id/edit - Edit user

/admin/topics - Topics management listing
/admin/topics/create - Create new topic
/admin/topics/:slug/edit - Edit topic

/admin/series - Series management listing
/admin/series/create - Create new series
/admin/series/:slug/edit - Edit series

/admin/chapters - Chapters management listing
/admin/chapters/create - Create new chapter
/admin/chapters/:slug/edit - Edit chapter
```

#### Route Protection:

- Admin routes use `canActivate` guard checking for 'superadmin' role in localStorage
- SSR-safe authentication checks (guards against `window` being undefined)

#### Missing Routes (Based on Content Hierarchy):

- **Categories routes**: No category-specific routes currently implemented
- Should add: `/categories`, `/categories/:category`, `/admin/categories/*`
