import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import HeroSection from '@/components/services/hero-section';
import { CTA } from '@/components/cta';
import ServicesSection from '@/components/services/services-section';
import IntroductorySection from '@/components/services/introductory-section';

export const metadata: Metadata = {
  title: 'Freelance Web Developer Services | Website Development & Testing',
  description:
    'Freelance web development services including responsive websites, UI/UX design, website testing automation using Selenium and Puppeteer, SEO optimization, deployment guidance, and website maintenance.',
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
