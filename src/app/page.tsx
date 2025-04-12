import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  const features = [
    { 
      title: 'Authentication', 
      description: 'Secure email/password and social login with Supabase Auth.'
    },
    { 
      title: 'Role-Based Access', 
      description: 'Control user permissions with predefined roles and middleware protection.'
    },
    { 
      title: 'Dashboard', 
      description: 'Beautiful admin interface to manage users, content, and payments.'
    },
    { 
      title: 'Blog System', 
      description: 'Built-in blog with markdown support and SEO optimization.'
    },
    { 
      title: 'Payments', 
      description: 'Stripe integration for subscriptions and one-time payments.'
    },
    { 
      title: 'Type-Safe', 
      description: 'End-to-end TypeScript with Zod validation for robust code.'
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for side projects and small applications.',
      features: [
        'Up to 1,000 active users',
        '5 GB storage',
        'Basic analytics',
        'Community support',
      ],
      action: 'Start Free',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For growing businesses and professional developers.',
      features: [
        'Up to 10,000 active users',
        '50 GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Team collaboration',
      ],
      action: 'Get Started',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with specific requirements.',
      features: [
        'Unlimited active users',
        'Unlimited storage',
        'Custom analytics',
        'Dedicated support',
        'SSO Authentication',
        'Custom integrations',
        'SLA guarantee',
      ],
      action: 'Contact Us',
      highlight: false,
    },
  ];

  return (
    <div className="bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">Next.js SaaS Boilerplate</div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Link
              href="/auth/login"
              className="rounded-md px-3 py-1.5 text-sm text-foreground hover:bg-muted"
            >
              Log in
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
            Build your SaaS product faster with our{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              fully loaded
            </span>{' '}
            boilerplate
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Stop wasting time on boilerplate code. Get started with a
            production-ready Next.js SaaS template that includes everything you
            need to build your product.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/auth/register"
              className="flex w-full items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/yourusername/nextjs-saas-boilerplate"
              className="flex w-full items-center justify-center rounded-md bg-card px-8 py-3 text-base font-medium text-foreground shadow-sm ring-1 ring-inset ring-border hover:bg-muted sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything you need to build a SaaS product
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our boilerplate includes all the features you need to get your SaaS
              product off the ground quickly.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get started for free and upgrade as your business grows.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border ${
                  plan.highlight
                    ? 'border-primary shadow-md'
                    : 'border-border'
                } bg-card p-8`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/auth/register"
                    className={`block w-full rounded-md py-2 text-center text-sm font-medium ${
                      plan.highlight
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-card text-foreground ring-1 ring-inset ring-border hover:bg-muted'
                    }`}
                  >
                    {plan.action}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to start building your SaaS?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Get started with our boilerplate today and launch your product in
            record time.
          </p>
          <div className="mt-10">
            <Link
              href="/auth/register"
              className="inline-flex items-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-xl font-bold">Next.js SaaS Boilerplate</div>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                A production-ready starter kit for building your next SaaS
                product.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="font-medium">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Tutorials
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Next.js SaaS Boilerplate. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
