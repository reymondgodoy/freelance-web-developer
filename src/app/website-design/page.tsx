import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTA } from '@/components/cta';
import IntroductorySection from '@/components/website-design/introductory-section';
import HeroSection from '@/components/website-design/hero-section';
import ProcessSection from '@/components/website-design/process-section';
import DesignsSection from '@/components/website-design/designs-section';

export const metadata: Metadata = {
  title: 'UI UX Web Design for Clear Business Website Growth',
  description:
    'Get content-first web design shaped around user experience, visual hierarchy, mobile layouts, and clear actions for business visitors.',
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
