import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { AboutSection } from '@/components/home/about-section';
import { CTA } from '@/components/cta';
import { HeroSection } from '@/components/home/hero-section';
import { MarqueeStrip } from '@/components/home/marquee-strip';
import { ProcessSection } from '@/components/process-section';
import { ServicesSection } from '@/components/home/services-section';

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
