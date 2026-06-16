import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr", "ar"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect if there is no locale
  // Detect preferred language from headers
  const acceptLanguage = request.headers.get("accept-language");
  let detectedLocale = defaultLocale;
  
  if (acceptLanguage) {
    // Parse header to find the first match in locales
    const preferred = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
    if (locales.includes(preferred)) {
      detectedLocale = preferred;
    }
  }

  // Redirect to localized path
  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api) and static assets
    "/((?!api|_next/static|_next/image|favicon.ico|file.svg|globe.svg|logo.png|next.svg|vercel.svg|window.svg).*)",
  ],
};
