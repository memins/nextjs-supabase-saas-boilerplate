# Next.js & Supabase SaaS Boilerplate

A modern, feature-rich SaaS boilerplate built with Next.js, Tailwind CSS, TypeScript, and Supabase.

## Features

- 🔐 **Authentication** - Email/password and social logins via Supabase Auth
- 👮‍♂️ **Role-based Access Control** - Admin, User, and Guest roles with middleware protection
- 📊 **Admin Dashboard** - Manage users, content, and payments
- 🏠 **Landing Page** - Modern, responsive marketing page
- 📝 **Blog System** - Create and manage blog content
- 💳 **Stripe Integration** - Subscriptions and one-time payments
- 🔄 **Type Safety** - End-to-end TypeScript with Zod validation
- 🎯 **Optimistic UI** - Instant feedback with background syncing
- 📋 **Forms System** - React Hook Form with Zod validation
- 🚨 **Error Handling** - Global error boundaries and form-level validation
- 👤 **User Profiles** - Complete profile management system
- 🔍 **SEO Ready** - Dynamic meta tags and OpenGraph support
- 📱 **Responsive Design** - Mobile-first with dark/light mode
- 📄 **Pagination** - Client and server-side pagination
- 🏗️ **Code Scaffolding** - Generate new components and pages quickly
- 🌐 **Server-side Rendering** - SEO-friendly with App Router
- 🕒 **Timezone Awareness** - Localized date/time handling
- 🌍 **Internationalization** - Multi-language support / Internationalized Routing

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **Backend**: Supabase (Auth, Database, Storage)
- **Payments**: Stripe
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account (for payment features)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-saas-boilerplate.git
   cd nextjs-saas-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local` with your Supabase and Stripe credentials.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages and layouts
│   │   ├── ui/          # shadcn/ui components
│   │   ├── layout/      # Layout components
│   │   └── forms/       # Form components
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── middleware.ts    # Next.js middleware for auth protection
│   ├── types/           # TypeScript type definitions
│   ├── server/          # Server-only code (API routes, database)
│   └── styles/          # Global styles
└── ...config files
```

## Development Workflow

- **Feature Development**: Create a new feature branch from `main`
- **Component Creation**: Use the generator with `npm run generate component`
- **Page Creation**: Use the generator with `npm run generate page`
- **API Creation**: Follow the server actions pattern in the App Router

## Environment Variables

Required environment variables:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## Deployment

This template is optimized for deployment on Vercel:

```bash
npm run build
# Then deploy with Vercel CLI or GitHub integration
```

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.io/)
- [Stripe](https://stripe.com/)
