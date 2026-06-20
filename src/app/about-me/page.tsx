import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import HeroSection from '@/components/about-me/hero-section';
import CapabilitiesSection from '@/components/about-me/capabilities-section';
import WorkingStyleSection from '@/components/about-me/working-style-section';
import { CTA } from '@/components/cta';
import ToolsSection from '@/components/about-me/tools-section';

export const metadata: Metadata = {
  title: 'About Me | Freelance Web Developer',
  description: 'Meet a web developer who builds responsive websites, web apps, testing workflows, and maintainable solutions for real business goals.',
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
