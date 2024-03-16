import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { languages } from "@/i18n/settings";
import { lngMiddleware } from "./middleware/lng";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req) {
  console.log("req", req);
  return lngMiddleware(req, NextResponse.next);

  // return NextResponse.next();
}
