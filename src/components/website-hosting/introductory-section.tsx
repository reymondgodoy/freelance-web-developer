import React from 'react';
import { Activity, Cloud, Server, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '../section-label';

const hostingAreas = [
  {
    title: 'Platform recommendation',
    body: 'We review your project type, budget, and traffic needs then point you to the platform that actually fits instead of the most expensive one.',
    icon: Server,
  },
  {
    title: 'Deployment walkthrough',
    body: 'We guide you step by step through connecting your project, setting environment variables, and getting the first successful deploy live.',
    icon: Cloud,
  },
  {
    title: 'Domain and SSL setup',
    body: 'We walk you through connecting your domain, reviewing DNS settings, and making sure HTTPS is active before you go live.',
    icon: ShieldCheck,
  },
  {
    title: 'Post-launch review',
    body: 'After the site is live we check routes, page loads, and basic uptime so you know the deployment is actually working correctly.',
    icon: Activity,
  },
] as const;

const IntroductorySection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
          <div className="lg:pr-12">
            <SectionLabel>What this service is</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Not a host. A guide who helps you pick the right one.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Most people get overwhelmed choosing between Vercel, Render, Heroku, AWS, and dozens of other platforms. Each one has different pricing,
              limits, and trade-offs that are rarely explained clearly.
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              We sit with you, understand your project and budget, and recommend what actually makes sense. Then we guide you through deploying it so you
              are not left figuring it out alone.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Platform Guidance', 'Budget-Fit Advice', 'Deployment Support', 'No Upselling'].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block bg-border" />

          <div className="lg:pl-12">
            <SectionLabel>How we help</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Four areas we guide you through.</h2>
            <div className="mt-6 space-y-3">
              {hostingAreas.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductorySection;
