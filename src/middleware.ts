import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    console.log('Cookies:', request.cookies.getAll())
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;
 console.log(token,"token",pathname)
  // Define routes
  const authPages = ['/login', '/register', '/onboarding'];
  const protectedPages = ['/dashboard', '/profile', '/settings']; // Add your private routes here

  // Redirect authenticated users away from auth pages
  if (token && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url)); // Redirect to a suitable page
  }

  // Redirect unauthenticated users trying to access protected pages
  if (!token && protectedPages.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/register',
    '/onboarding',
    '/dashboard',
    '/profile',
    '/settings',
    // Add other routes as needed
  ],
};
