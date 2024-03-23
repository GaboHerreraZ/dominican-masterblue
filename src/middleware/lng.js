import acceptLanguage from "accept-language";
import { NextResponse } from "next/server";
import { fallbackLng, languages, cookieName } from "@/i18n/settings";

export function lngMiddleware(req, next) {
  if (req.nextUrl.pathname.includes("/admin")) {
    return next();
  }

  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    const path = req.nextUrl.pathname === "/" ? "" : req.nextUrl.pathname;

    return NextResponse.redirect(new URL(`/${lng}${path}`, req.url));
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return next();
}
