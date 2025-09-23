# GEMINI.md

## Project Overview

This is a web application built with **React**, **TypeScript**, and **Vite**. The project, named "Acalme-Brasil," appears to be a wellness or informational platform, with pages like "Home," "About," "Articles," and "Membership."

The key technologies used are:
- **Frontend Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Data Fetching:** TanStack Query
- **Linting:** ESLint

The application structure is organized into `pages` and `components`, with a main `Layout.tsx` providing the basic page structure.

## Building and Running

### Prerequisites

- Node.js and npm (or a compatible package manager)

### Key Commands

The following commands are available in `package.json`:

- **`npm run dev`**: Starts the development server on `http://localhost:8080`.
- **`npm run build`**: Bundles the application for production.
- **`npm run lint`**: Lints the source code using ESLint.
- **`npm run preview`**: Serves the production build locally for preview.

## Development Conventions

- **Component-Based Architecture:** The project follows a standard React component model. Reusable UI elements are located in `src/components/ui`, and page-level components are in `src/pages`.
- **Styling:** Styling is handled by Tailwind CSS. The configuration is in `tailwind.config.ts`, and global styles are in `src/index.css`. The project uses `shadcn/ui` for its base components, which are then customized via Tailwind.
- **Routing:** Client-side routing is managed by `react-router-dom`. All routes are defined in `src/App.tsx`.
- **Path Aliases:** The project uses the `@` alias for the `src` directory, configured in `vite.config.ts` and `tsconfig.json`.
- **Code Quality:** ESLint is configured to enforce code style and catch potential errors. The configuration can be found in `eslint.config.js`.
