import React from 'react';

const BannerWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute inset-x-0 top-0 h-136 bg-linear-to-b from-primary/40 via-primary/20 to-transparent dark:from-primary/10 dark:via-primary/5" />
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default BannerWrapper;
