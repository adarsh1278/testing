import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/signin' 
  const isProtectedPath = path.startsWith('/program');

  const token = request?.cookies?.get('refreshToken')?.value ||"";
  console.dir( token)

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/program/dashboard', request.nextUrl));
  }

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }

  return NextResponse.next(); // Proceed with the request if no conditions match
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',                          // root path
    '/signin',                  // sign-up page
                     // about page
    '/program/:path*',          // all paths starting with /program
    // Add more paths as needed
    // '/profile'                 // example commented out
  ],
};