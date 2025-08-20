import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // If already logged in and manually visiting /login → go to dashboard
    if (pathname === "/login" && token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Always allow NextAuth API
        if (pathname.startsWith("/api/auth")) return true;

        // Allow /login without token
        if (pathname === "/login") return true;

        // Everything else requires token
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
     "/((?!_next|api/auth|.*\\..*).*)",
],
};
