import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Uncomment to use pathname routing instead of prefix routing
  // pathnames: {
  //   '/': '/',
  //   '/dashboard': {
  //     en: '/dashboard',
  //     de: '/ubersicht',
  //   },
  // },
});

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g., static files)
  // - API routes
  // - _next/static files
  // - _next/image files
  // - favicon.ico, robots.txt, sitemap.xml files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)']
}; 