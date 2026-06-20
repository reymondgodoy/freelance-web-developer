import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import HeroSection from '@/components/services/hero-section';
import { CTA } from '@/components/cta';
import ServicesSection from '@/components/services/services-section';
import IntroductorySection from '@/components/services/introductory-section';

export const metadata: Metadata = {
  title: 'Affordable Web Services for Modern Business Websites',
  description:
    'Explore web development, design, testing, deployment guidance, SEO optimization, and long-term support for business websites.',
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <ServicesSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
