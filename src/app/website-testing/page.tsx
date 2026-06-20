import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { TestsSection } from '@/components/website-testing/tests-section';
import HeroSection from '@/components/website-testing/hero-section';
import { IntroductorySection } from '@/components/website-testing/introductory-section';

export const metadata: Metadata = {
  title: 'Website Testing Services Before Your Site Launches',
  description:
    'Find website issues before users do with black-box functional QA, browser automation, form checks, route testing, and regression reviews.',
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
