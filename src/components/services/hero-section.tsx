import Link from 'next/link';
import React from 'react';
import BannerWrapper from '../banner-wrapper';
import { SectionLabel } from '../section-label';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Web Services</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Affordable web services for modern businesses.</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Professional web development services focused on responsive websites, automation testing, deployment guidance, SEO optimization, and long-term
            website support for startups, businesses, and personal brands.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/website-development"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore web development
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Discuss your project
          </Link>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default HeroSection;
