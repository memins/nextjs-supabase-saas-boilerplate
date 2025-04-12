import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Handle Supabase Auth callback for OAuth redirects
 * This route is used when users are redirected back from a social login provider
 */
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  
  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    
    // Exchange code for session
    await supabase.auth.exchangeCodeForSession(code);
    
    // Redirect to the dashboard or the original redirect URL
    const redirectTo = requestUrl.searchParams.get('redirectTo') || '/dashboard';
    return NextResponse.redirect(new URL(redirectTo, requestUrl.origin));
  }
  
  // If no code, redirect to login
  return NextResponse.redirect(new URL('/auth/login', request.url));
} 