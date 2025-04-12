import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js SaaS Boilerplate",
  description: "A modern, feature-rich SaaS boilerplate built with Next.js, Tailwind CSS, TypeScript, and Supabase.",
  authors: [{ name: "Your Name" }],
  keywords: ["Next.js", "SaaS", "Boilerplate", "Tailwind CSS", "TypeScript", "Supabase"],
};

// Generate static params for each locale
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

// RTL languages
const rtlLocales = ['ar', 'he', 'fa', 'ur'];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Get messages for the locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to English if the locale's messages are not found
    messages = (await import(`../../../messages/en.json`)).default;
  }

  // Check if the current locale is RTL
  const isRtl = rtlLocales.includes(locale);

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 