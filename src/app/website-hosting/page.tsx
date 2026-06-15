import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { PlatformGuideSection } from '@/components/website-hosting/platform-guide-section';
import HeroSection from '@/components/website-hosting/hero-section';
import IntroductorySection from '@/components/website-hosting/introductory-section';

export const metadata: Metadata = {
  title: 'Website Hosting Guidance',
  description:
    'We help you find the right hosting platform for your budget and project type. Guidance on Vercel, Render, Heroku, and AWS so you can deploy your website with confidence.',
};

export default function WebsiteHostingPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <PlatformGuideSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
