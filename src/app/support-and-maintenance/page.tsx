import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { SupportedStackSection } from '@/components/support-and-maintenance/supported-stack-section';
import HeroSection from '@/components/support-and-maintenance/hero-section';
import IntroductorySection from '@/components/support-and-maintenance/introductory-section';

export const metadata: Metadata = {
  title: 'Website Support and Maintenance for Stable Business Sites',
  description:
    'Keep your website stable, secure, and up to date with stack-focused support, bug fixes, patches, dependency updates, and monitoring.',
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
