import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProcessSection } from '@/components/process-section';
import { CTA } from '@/components/cta';
import { ToolsSection } from '@/components/seo-optimization/tools-section';
import HeroSection from '@/components/seo-optimization/hero-section';
import IntroductorySection from '@/components/seo-optimization/introductory-section';

export const metadata: Metadata = {
  title: 'SEO Optimization Services for Better Search Visibility',
  description:
    'Improve how search engines read your site with technical audits, keyword research, on-page fixes, backlink planning, and performance reviews.',
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
