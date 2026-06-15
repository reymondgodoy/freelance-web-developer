import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import HeroSection from '@/components/about-me/hero-section';
import CapabilitiesSection from '@/components/about-me/capabilities-section';
import WorkingStyleSection from '@/components/about-me/working-style-section';
import { CTA } from '@/components/cta';
import ToolsSection from '@/components/about-me/tools-section';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet a Philippines-based freelance web developer building business websites, landing pages, content, and support systems for growth-minded clients.',
};

export default function AboutMePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <CapabilitiesSection />
      <WorkingStyleSection />
      <ToolsSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
