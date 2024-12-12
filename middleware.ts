import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     const token = req.nextauth.token;
//     const isAdmin = token?.role === "ADMIN";
//     const isAuthPage = req.nextUrl.pathname.startsWith("/auth/login");

//     if (isAuthPage && token) {
//       return NextResponse.redirect(new URL("/dashboard", req.url));
//     }

//     if (!isAdmin && req.nextUrl.pathname.startsWith("/dashboard")) {
//       return NextResponse.redirect(new URL("/auth/login", req.url));
//     }

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   },
  
// );

import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req});
  console.log("Token: ", token)
  const url = req.nextUrl;
  if (
    token && url.pathname.startsWith("/auth")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && url.pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/login"],
};