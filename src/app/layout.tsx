import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import './globals.css';
import { ThemeSync } from '@/components/theme-sync';
import { parseThemeCookie, resolvedThemeCookieName, resolveCookieTheme, themeCookieName } from '@/lib/theme-cookie';
import { siteBrand } from '@/lib/site-content';

export const metadata: Metadata = {
  metadataBase: new URL(siteBrand.url),
  title: {
    default: 'Freelance Web Developer | Business Websites for Client Growth',
    template: '%s | Freelance Web Developer',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  description:
    'Freelance website development for clients who need professional websites, landing pages, business systems, and content that helps their business grow.',
  keywords: [
    'freelance web developer',
    'freelance website developer Philippines',
    'website development Philippines',
    'business website development',
    'landing page developer',
    'custom website developer',
    'web development freelancer',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Freelance Web Developer | Business Websites for Client Growth',
    description: 'Professional websites, landing pages, business systems, and content for clients who want to grow their business online.',
    url: '/',
    siteName: siteBrand.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Web Developer | Business Websites for Client Growth',
    description: 'Freelance website development for clients who need a professional site that supports business growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(themeCookieName)?.value;
  const resolvedCookie = cookieStore.get(resolvedThemeCookieName)?.value;
  const settings = parseThemeCookie(themeCookie);
  const resolvedTheme = resolveCookieTheme(settings, resolvedCookie);
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteBrand.name,
    url: siteBrand.url,
    email: siteBrand.email,
    slogan: siteBrand.tagline,
    description: siteBrand.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Pedro',
      addressCountry: 'PH',
      postalCode: '4023',
    },
    areaServed: ['Philippines', 'Global'],
    serviceType: ['Website Development', 'Landing Page Development', 'Business Website Development', 'Website Content', 'Website Maintenance'],
  };

  return (
    <html
      lang="en"
      className={`h-full antialiased ${resolvedTheme === 'dark' ? 'dark' : ''}`}
      data-scroll-behavior="smooth"
      data-theme={resolvedTheme}
      data-skin={settings.skin}
      data-font={settings.font}
      data-primary={settings.primary}
    >
      <body className="min-h-full flex flex-col  text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
