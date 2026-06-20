import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import './globals.css';
import { ThemeSync } from '@/components/theme-sync';
import { parseThemeCookie, resolvedThemeCookieName, resolveCookieTheme, themeCookieName } from '@/lib/theme-cookie';
import { siteBrand } from '@/lib/site-content';

export const metadata: Metadata = {
  metadataBase: new URL(siteBrand.url),

  title: 'Business Websites for Client Growth | Freelance Web Developer',
  // title: {
  //   default: 'Business Websites for Client Growth | Freelance Web Developer',
  //   template: '%s | Freelance Web Developer',
  // },

  description:
    'Freelance website development for clients who need professional websites, landing pages, business systems, and content that helps their business grow.',

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    siteName: siteBrand.name,
  },

  robots: {
    index: true,
    follow: true,
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
      addressLocality: siteBrand.locality,
      addressCountry: siteBrand.addressCountry,
      postalCode: siteBrand.postalCode,
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
      <body className="min-h-full flex flex-col text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
