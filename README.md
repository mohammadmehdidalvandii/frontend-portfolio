# Frontend Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Personal portfolio of **Mohammadmehdi Dalvandi**, Full Stack Engineer. A React + TypeScript single‑page app with a terminal/console‑inspired design, split into a public‑facing site (home, projects, certificates, about, contact) and a JWT‑protected admin dashboard for managing all of that content.

This repository contains the **frontend only**. It expects a separate REST API to talk to (see [Configuration](#configuration) and [Backend API Reference](#backend-api-reference) below).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Path Aliases](#path-aliases)
- [Routes](#routes)
- [Backend API Reference](#backend-api-reference)
- [Styling & Design](#styling--design)
- [Author](#author)

## Features

### Public site

- **Home** — hero section and highlighted work
- **Projects** — full project list plus a dynamic project detail page (`/Projects/:id`)
- **Certificates** — showcase of certifications and credentials
- **About** — bio, tech stack, and career timeline
- **Contact** — validated contact form that sends a message to the backend
- SEO‑friendly per‑page `<head>` tags via `react-helmet-async`
- Route‑level code splitting (`React.lazy` + `Suspense`) for every page

### Admin dashboard (`/Admin`)

- Tabbed interface to manage **Projects**, **Certificates**, **Timeline**, and **Messages**
- Full CRUD for projects, certificates, and timeline entries (with image upload support for projects/certificates)
- Read/respond workflow for incoming contact messages
- Protected by a client‑side auth guard and excluded from search indexing (`noindex, nofollow`)

## Tech Stack

| Category | Libraries |
|---|---|
| Core | React 18, TypeScript, Vite 8 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| UI primitives | Radix UI (Dialog, Tabs, Slot), `class-variance-authority`, `clsx`, `tailwind-merge` — a shadcn/ui‑style setup |
| Icons | lucide-react |
| Server state / data fetching | TanStack Query v5, Axios |
| Forms & validation | Formik, Yup |
| Notifications | Sonner (toasts), SweetAlert2 (confirm dialogs) |
| SEO | react-helmet-async |
| Tooling | ESLint, TypeScript, `react-doctor` |

## Project Structure

```
src/
├── App.tsx              # Route definitions and lazy-loaded pages
├── main.tsx              # App entry point
├── index.css              # Tailwind entry / base styles
├── pages/                # Route-level page components
│   ├── Index/             # Home page
│   ├── Projects/          # Projects list + Projects/:id detail
│   ├── Certificates/       # Certificates page
│   ├── About/             # Bio, stack, timeline
│   ├── Contact/            # Contact form page
│   ├── Admin/              # Admin dashboard (tabbed managers)
│   ├── Login/               # Admin login
│   └── NotFound/             # 404 page
├── components/
│   ├── UI/                 # Reusable primitives (Button, Dialog, Sheet, Tabs)
│   ├── modules/              # Navigation, Footer, ProjectCard, CertificateCard
│   └── templates/              # Page-specific sections (Hero, About/Stack, admin managers, etc.)
├── layouts/
│   ├── MainLayout.tsx         # Public site shell (Navigation + Footer)
│   └── AdminLayout.tsx         # Admin shell with a client-side auth guard
├── models/                  # Formik + Yup modal forms (Add/Edit Project, Certificate, Timeline)
├── services/                 # TanStack Query hooks wrapping Axios calls, one file per resource
├── providers/                 # QueryProvider, ToasterProvider
├── config/api.ts               # Axios instances (public/private) and auth header injection
├── validations/                 # Yup validation schemas
├── types/                       # Shared TypeScript DTOs
└── utils/                        # cn(), toast helpers, confirm dialogs, API error parsing
```

## Prerequisites

- **Node.js 20.19+ or 22.12+** (required by Vite 8)
- **npm** (the project ships a `package-lock.json`)
- A running instance of the backend API this frontend expects — see [Backend API Reference](#backend-api-reference)

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mohammadmehdidalvandii/frontend-portfolio.git
cd frontend-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at **http://localhost:5173** by default. Pages that fetch data (Projects, Certificates, About's timeline, the Admin panel) will show errors or empty states until a compatible backend is reachable at the URL configured in `src/config/api.ts`.

To build and preview a production bundle:

```bash
npm run build    # type-checks, then builds to dist/
npm run preview  # serves the production build locally
```

## Configuration

There is no `.env` file in this project — the API base URL is currently hardcoded in `src/config/api.ts`:

```ts
export const publicApi = axios.create({ baseURL: "http://localhost:3000/api" });
export const privateApi = axios.create({ baseURL: "http://localhost:3000/api" });
```

To point the app at a different backend (a deployed API, a different port, etc.), edit the `baseURL` in this file. `privateApi` automatically attaches an `Authorization: Bearer <token>` header on every request, reading the token from `localStorage` under the key `token`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc`) then build for production into `dist/` |
| `npm run lint` | Run ESLint across the codebase |
| `npm run preview` | Serve the production build locally |
| `npm run doctor` | Run `react-doctor` diagnostics against the project |

## Path Aliases

Configured in `vite.config.ts`:

| Alias | Resolves to |
|---|---|
| `@pages` | `src/pages/` |
| `@components` | `src/components/` |
| `@components/modules` | `src/components/modules/` |
| `@components/templates` | `src/components/templates/` |
| `@components/UI` | `src/components/UI/` |
| `@layouts` | `src/layouts/` |
| `@models` | `src/models/` |
| `@providers` | `src/providers/` |
| `@services` | `src/services/` |
| `@validation` | `src/validations/` |
| `@utils` | `src/utils/` |
| `@store` | `src/store/` *(reserved for future use — folder doesn't exist yet)* |

## Routes

### Public (`MainLayout`)

| Path | Page | Description |
|---|---|---|
| `/` | Index | Landing page / hero |
| `/Projects` | Projects | All projects |
| `/Projects/:id` | ProjectSingle | Single project detail |
| `/Certificates` | Certificates | Certifications list |
| `/About` | About | Bio, stack, timeline |
| `/Contact` | Contact | Contact form |

### Admin & misc

| Path | Page | Description |
|---|---|---|
| `/Login` | Login | Admin sign‑in |
| `/Admin` | Admin | JWT‑protected dashboard (Projects / Certificates / Timeline / Messages) |
| `*` | NotFound | Catch‑all 404 |

## Backend API Reference

These are the endpoints this frontend calls, derived from `src/services/`. All requests go to the `baseURL` configured in `src/config/api.ts`. Routes marked **private** require a Bearer token.

| Method | Path | Auth | Used for |
|---|---|---|---|
| `POST` | `/user/login` | public | Admin sign‑in, returns a JWT |
| `GET` | `/projects` | public | List all projects |
| `GET` | `/projects/:id` | public | Single project detail |
| `POST` | `/projects` | private | Create a project (`multipart/form-data`) |
| `PATCH` | `/projects/:id` | private | Update a project (`multipart/form-data`) |
| `DELETE` | `/projects/:id` | private | Delete a project |
| `GET` | `/certificate` | public | List all certificates |
| `POST` | `/certificate` | private | Create a certificate (`multipart/form-data`) |
| `PATCH` | `/certificate/:id` | private | Update a certificate (`multipart/form-data`) |
| `DELETE` | `/certificate/:id` | private | Delete a certificate |
| `GET` | `/timeline` | public | List all timeline entries |
| `POST` | `/timeline` | private | Create a timeline entry |
| `PATCH` | `/timeline/:id` | private | Update a timeline entry |
| `DELETE` | `/timeline/:id` | private | Delete a timeline entry |
| `POST` | `/message` | public | Send a message via the contact form |
| `GET` | `/message` | private | List incoming messages |
| `PATCH` | `/message/:id` | private | Update a message (e.g. mark as read) |
| `DELETE` | `/message/:id` | private | Delete a message |

### Data models

```ts
interface LoginDTO {
  email: string;
  password: string;
}

type ProjectDTO = {
  _id?: string;
  name: string;
  title: string;
  stacks: string[];
  image: string;
  demoLink: string;
  githubLink: string;
  year: number;
  role: string;
  features: string[];
  shortDescription: string;
  longDescription: string;
};

type CertificateDTO = {
  _id?: string;
  title: string;
  issuer: string;
  year: number;
  credentialId: string;
  image: string;
  verificationLink: string;
};

type TimelineDTO = {
  _id?: string;
  year: string;
  role: string;
  company: string;
  detail: string;
  achievement: string[];
  isCurrent: boolean;
};

interface MessageDTO {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
}
```

### Admin access flow

1. The admin signs in from `/Login`, which calls `POST /user/login`.
2. The returned token is stored in `localStorage` under `token`.
3. `AdminLayout` checks for that token before rendering `/Admin`; if it's missing, it shows an error toast and redirects to `/`.
4. `privateApi` automatically attaches the token as a Bearer header on every subsequent private request.

This route guard runs entirely in the browser, so the backend must also enforce authorization on its private endpoints — it should not be relied on as the only line of defense.

## Styling & Design

The site uses Tailwind CSS v4 via the official `@tailwindcss/vite` plugin (no separate Tailwind config file required). UI primitives (`Dialog`, `Tabs`, `Sheet`) are built on Radix UI and composed with `class-variance-authority`, `clsx`, and `tailwind-merge` through a shared `cn()` helper (`src/utils/cn.ts`) — the same pattern used by shadcn/ui. The mobile navigation menu uses the `Sheet` component as a slide‑out drawer.

Two fonts are self‑hosted under `public/fonts`: **Inter** (headings) and **Space Mono** (the uppercase, tracked‑out monospace labels used throughout the terminal‑inspired UI).

## Author

**Mohammadmehdi Dalvandi** — Full Stack Engineer, Borujerd, Lorestan, Iran
GitHub: [@mohammadmehdidalvandii](https://github.com/mohammadmehdidalvandii)
