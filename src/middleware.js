import acceptLanguage from "accept-language";
import { languages } from "@/i18n/settings";
import { lngMiddleware } from "./middleware/lng";
import { updateSession } from "./middleware/session";
import { NextResponse } from "next/server";

acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export async function middleware(req) {
  await updateSession(req);

  return lngMiddleware(req, NextResponse.next);
}
