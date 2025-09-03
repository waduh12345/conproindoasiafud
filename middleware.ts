import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const ALLOWED_EMAIL = "soni@gmail.com";

function redirectToLogin(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/auth/login";
  url.searchParams.set(
    "callbackUrl",
    req.nextUrl.pathname + req.nextUrl.search
  );
  return NextResponse.redirect(url);
}

export async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Kalau token kosong → expired / tidak ada
    if (!token) {
      return redirectToLogin(req);
    }

    // Kalau hanya mau izinkan email tertentu
    if (token.email?.toLowerCase() !== ALLOWED_EMAIL) {
      return redirectToLogin(req);
    }

    // Kalau lolos → lanjut
    return NextResponse.next();
  } catch (err) {
    console.error("Middleware auth error:", err);
    return redirectToLogin(req);
  }
}

export const config = {
  matcher: ["/admin/:path*"], // hanya proteksi route /admin
};