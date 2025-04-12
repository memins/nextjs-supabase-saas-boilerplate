import { redirect } from 'next/navigation';
import { defaultLocale } from '../i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Not Found | Next.js SaaS Boilerplate',
  description: 'The page you are looking for could not be found.',
};

/**
 * 404 Not Found Page
 */
export default function RootNotFound() {
  // Redirect to the default locale
  redirect(`/${defaultLocale}`);
} 