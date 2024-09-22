import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";

//concept of middle ware
// export function middleware(request: NextRequest) {
//   console.log(request.url);
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export default middleware;

export const config = {
  matcher: ["/api/:path*"],
};
