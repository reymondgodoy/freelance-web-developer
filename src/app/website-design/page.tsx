import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTA } from '@/components/cta';
import IntroductorySection from '@/components/website-design/introductory-section';
import HeroSection from '@/components/website-design/hero-section';
import ProcessSection from '@/components/website-design/process-section';
import DesignsSection from '@/components/website-design/designs-section';

export const metadata: Metadata = {
  title: 'UI/UX Web Design',
  description: 'We help businesses get a website design that fits their brand, guides their visitors, and is built to hand off directly into development.',
};

export default function WebDesignPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <DesignsSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
