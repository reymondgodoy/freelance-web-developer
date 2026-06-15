import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CatalogSection } from '@/components/website-development/catalog-section';
import HeroSection from '@/components/website-development/hero-section';
import { IntroductorySection } from '@/components/website-development/introductory-section';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Website Development Services',
  description: 'Freelance website development services for business websites, portals, booking systems, landing pages, and custom client projects.',
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <CatalogSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
