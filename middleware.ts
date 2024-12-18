import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Extract token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("Token: ", token)
  const url = req.nextUrl;

  // Redirect authenticated users away from the auth pages
  if (token && url.pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect unauthenticated users away from protected dashboard pages
  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/auth/login"],
};
