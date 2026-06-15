import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { TestsSection } from '@/components/website-testing/tests-section';
import HeroSection from '@/components/website-testing/hero-section';
import { IntroductorySection } from '@/components/website-testing/introductory-section';

export const metadata: Metadata = {
  title: 'Website Testing and Automation',
  description:
    'Website testing and automation services for business websites, including form validation, route verification, responsive testing, browser automation, and quality assurance before launch.',
};

export default function WebsiteTestingPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <TestsSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
