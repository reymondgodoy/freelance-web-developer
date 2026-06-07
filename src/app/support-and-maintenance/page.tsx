import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { SupportedStackSection } from '@/components/support-and-maintenance/supported-stack-section';
import HeroSection from '@/components/support-and-maintenance/hero-section';
import IntroductorySection from '@/components/support-and-maintenance/introductory-section';

export const metadata: Metadata = {
  title: 'Support and Maintenance',
  description:
    'We help keep your website stable, secure, and up to date. Support covers MERN stack, Next.js, Node.js, Express, Laravel, PHP, React, React Native, and more.',
};

export default function SupportMaintenancePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <SupportedStackSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
