import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Path patterns that require authentication
 */
const PROTECTED_ROUTES = [
  '/dashboard/:path*',
  '/settings/:path*',
  '/admin/:path*',
];

/**
 * Path patterns that are for admin users only
 */
const ADMIN_ROUTES = [
  '/admin/:path*',
];

/**
 * Publicly accessible routes (even when authenticated)
 */
const PUBLIC_ROUTES = [
  '/',
  '/auth/:path*',
  '/blog/:path*',
  '/api/:path*',
];

/**
 * Middleware for authentication and route protection
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  // Check if request URL is in the protected routes
  const isProtectedRoute = PROTECTED_ROUTES.some(pattern => {
    return new RegExp(`^${pattern.replace(/:\w+\*/g, '.*')}$`).test(req.nextUrl.pathname);
  });

  const isAdminRoute = ADMIN_ROUTES.some(pattern => {
    return new RegExp(`^${pattern.replace(/:\w+\*/g, '.*')}$`).test(req.nextUrl.pathname);
  });

  // Skip middleware for public routes
  if (!isProtectedRoute) {
    return res;
  }

  // Get the user from Supabase
  const { data: { session } } = await supabase.auth.getSession();

  // If no session and accessing a protected route, redirect to login
  if (!session && isProtectedRoute) {
    const redirectUrl = new URL('/auth/login', req.url);
    // Add ?redirectTo= parameter so the user can be redirected back after login
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If accessing admin routes, check for admin role
  if (isAdminRoute) {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Get user's role from the user metadata 
    // Note: You need to set this in your Supabase Auth configuration
    const userRole = user?.user_metadata?.role;
    
    if (userRole !== 'admin') {
      // Redirect non-admins to dashboard if they try to access admin routes
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }

  return res;
}

/**
 * Configure the middleware to run for specific paths
 */
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api/webhooks routes (webhooks need to bypass auth)
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. /fonts (static fonts)
     * 5. /images (static images)
     * 6. all root-level files including favicon.ico, etc.
     */
    '/((?!api/webhooks|_next|static|fonts|images|[\\w-]+\\.\\w+).*)',
  ],
}; 