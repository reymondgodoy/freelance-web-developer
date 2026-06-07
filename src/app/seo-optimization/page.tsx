import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { ToolsSection } from '@/components/seo-optimization/tools-section';
import HeroSection from '@/components/seo-optimization/hero-section';
import IntroductorySection from '@/components/seo-optimization/introductory-section';

export const metadata: Metadata = {
  title: 'SEO Optimization',
  description:
    'We help businesses improve search visibility through technical SEO audits, keyword research, backlink planning, and on-page optimization using tools like Ahrefs, SEMrush, Moz, Google Search Console, and Lighthouse.',
};

export default function SeoOptimizationPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroductorySection />
      <ToolsSection />
      <ProcessSection />
      <CTA />
      <SiteFooter />
    </main>
  );
}
