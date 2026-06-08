import type { NextConfig } from 'next';

// Fail fast at build/deploy time when required public env vars are missing.
// Without this, the contact form would silently POST to `undefined/api/contact`
// and the user would see a fake success state with the lead going nowhere.
const requiredPublicEnv: Record<string, string | undefined> = {
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
};

for (const [name, value] of Object.entries(requiredPublicEnv)) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}. ` + 'Set it in your .env file or deployment platform before building.');
  }
}

const SECURITY_HEADERS = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    // F-008: conservative CSP. Allows Turnstile and same-origin assets only.
    // Loosen `connect-src` to https://challenges.cloudflare.com if a future feature needs the API.
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self'",
      'frame-src https://challenges.cloudflare.com',
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  // F-008: emit the security headers above on every response.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
