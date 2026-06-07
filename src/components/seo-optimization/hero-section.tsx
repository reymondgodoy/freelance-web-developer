import React from 'react';
import BannerWrapper from '../banner-wrapper';
import { SectionLabel } from '../section-label';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>SEO Optimization</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            SEO optimization services that improve how your pages rank and get discovered on search engines
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Search visibility depends on structure, relevance, and technical clarity. Most websites fail to rank because their pages are not aligned with
            what users are actually searching for. We analyze your service pages, improve on-page SEO, and identify issues with metadata, internal linking,
            and content structure to help your site perform better in search results.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Request SEO review
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back to services
          </Link>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default HeroSection;
