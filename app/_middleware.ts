// app/_middleware.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString("base64");
  const csp = `script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'`;

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Security-Policy", csp);
  response.headers.set("X-WebKit-CSP", csp);

  return response;
}
