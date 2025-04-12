import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '../../../i18n';

export const metadata: Metadata = {
  title: '404 Not Found',
  description: 'The page you are looking for could not be found.',
};

type Props = {
  params: { locale: string }
};

/**
 * 404 Not Found Page
 */
export default function NotFound({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  // Get translations
  const commonT = useTranslations('common');
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          The page you are looking for could not be found.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            {commonT('buttons.getStarted')}
          </Link>
        </div>
      </div>
    </div>
  );
} 