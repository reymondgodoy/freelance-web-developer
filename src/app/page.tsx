import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { AboutSection } from '@/components/home/about-section';
import { CTA } from '@/components/cta';
import { HeroSection } from '@/components/home/hero-section';
import { MarqueeStrip } from '@/components/home/marquee-strip';
import { ProcessSection } from '@/components/process-section';
import { ServicesSection } from '@/components/home/services-section';

export const metadata: Metadata = {
  title: 'Business Websites Built to Help Clients Grow Online',
  description:
    'Professional websites for business owners who need stronger trust, clearer online presence, and a better path from visitor to client.',
};

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
