import BannerWrapper from '../banner-wrapper';
import Link from 'next/link';
import { SectionLabel } from '../section-label';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Knowledge Base</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Frequently Asked Questions About Website Development Services
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Answers about website development, web design, SEO optimization, website hosting, testing automation, maintenance, custom systems, project
            timelines, deployment, and pricing.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Ask a Question
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            View Services
          </Link>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default HeroSection;
