import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '../../../i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type Props = {
  params: { locale: string }
};

export default function LandingPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Get translations
  const t = useTranslations();
  const commonT = useTranslations('common');
  const homeT = useTranslations('home');

  const features = [
    { 
      title: homeT('features.feature1.title'), 
      description: homeT('features.feature1.description')
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
      title: homeT('features.feature2.title'), 
      description: homeT('features.feature2.description')
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
      action: commonT('buttons.getStarted'),
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
      action: commonT('buttons.getStarted'),
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
              {commonT('navigation.features')}
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              {commonT('navigation.pricing')}
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              {commonT('navigation.blog')}
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
              {commonT('navigation.login')}
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
            >
              {commonT('navigation.signup')}
            </Link>
            <div className="border-l border-border pl-2 ml-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
            {homeT('hero.title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {homeT('hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/auth/register"
              className="flex w-full items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              {commonT('buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/yourusername/nextjs-saas-boilerplate"
              className="flex w-full items-center justify-center rounded-md bg-card px-8 py-3 text-base font-medium text-foreground shadow-sm ring-1 ring-inset ring-border hover:bg-muted sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {commonT('buttons.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {homeT('features.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {homeT('features.subtitle')}
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
            Get started with our boilerplate today and start building your dream product.
          </p>
          <div className="mt-8">
            <Link
              href="/auth/register"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              {homeT('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase text-foreground">
                {commonT('footer.company')}
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-foreground">
                {commonT('footer.legal')}
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-foreground">
                {commonT('footer.support')}
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    API Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase text-foreground">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            {commonT('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
} 