'use client';

import { useState } from 'react';
import { Check, X, Minus } from 'lucide-react';
import { SectionLabel } from '../section-label';

type Fit = 'yes' | 'no' | 'maybe';

interface Platform {
  name: string;
  badge: string;
  tagline: string;
  bestFor: string;
  pricing: string;
  pricingNote: string;
  verdictForYou: string;
  fits: {
    label: string;
    fit: Fit;
    note: string;
  }[];
}

const platforms: Platform[] = [
  {
    name: 'Vercel',
    badge: 'Best for Frontend',
    tagline: 'Built around Next.js and React. Instant deploys from GitHub with zero config.',
    bestFor: 'Frontend developers, Next.js apps, static sites, and marketing pages.',
    pricing: 'Free tier available',
    pricingNote: 'Pro plan starts at $20/month. Free tier is generous for small projects and portfolios.',
    verdictForYou:
      'If your site is built with Next.js or React and you do not need a heavy backend, Vercel is the easiest and fastest way to get live. The free tier covers most small business websites comfortably.',
    fits: [
      { label: 'Small business website', fit: 'yes', note: 'Free tier handles it well with no config needed.' },
      { label: 'Next.js or React project', fit: 'yes', note: 'Vercel created Next.js. Native support, instant previews.' },
      { label: 'Portfolio or landing page', fit: 'yes', note: 'Easiest platform to go live in under 5 minutes.' },
      { label: 'Full-stack app with heavy backend', fit: 'maybe', note: 'Serverless functions work for light APIs but not long-running processes.' },
      { label: 'E-commerce with high traffic', fit: 'maybe', note: 'Works but costs scale quickly at high request volumes.' },
      { label: 'Budget under $10/month', fit: 'yes', note: 'Free tier is real and usable for most small sites.' },
    ],
  },
  {
    name: 'Render',
    badge: 'Best for Full-Stack',
    tagline: 'A Heroku alternative with private networking, managed databases, and sensible pricing.',
    bestFor: 'Full-stack apps, backend APIs, background workers, and projects that need a database.',
    pricing: 'From $7/month',
    pricingNote: 'Static sites are free. Web services start at $7/month. Compute costs add on top of the base plan.',
    verdictForYou:
      'If your project has a real backend, needs a database, or runs workers, Render is easier than AWS and cheaper than Heroku at small to medium scale. A solid middle ground for projects that outgrow free tiers.',
    fits: [
      { label: 'Small business website', fit: 'yes', note: 'Static sites deploy for free. Backend services from $7/month.' },
      { label: 'Next.js or React project', fit: 'yes', note: 'Supports Next.js as a web service or static export.' },
      { label: 'Full-stack app with backend API', fit: 'yes', note: 'Private networking, managed Postgres, background workers all supported.' },
      { label: 'Budget under $10/month', fit: 'maybe', note: 'Free static hosting yes, but web services start at $7 before compute.' },
      { label: 'Scaling without DevOps overhead', fit: 'yes', note: 'Autoscale based on CPU and memory without server management.' },
      { label: 'Multiple services in one project', fit: 'yes', note: 'Render Blueprints let you define everything in one config file.' },
    ],
  },
  {
    name: 'Heroku',
    badge: 'Easiest to Start',
    tagline: 'The original push-to-deploy platform. Mature, simple, and language-agnostic.',
    bestFor: 'Prototypes, small apps, and teams that want simplicity over cost savings.',
    pricing: 'From $5/month',
    pricingNote: 'Free tier was removed in 2022. Basic dynos start at $5/month but production setups scale quickly to $50 to $250+ per dyno.',
    verdictForYou:
      'Heroku is the easiest platform to understand and get started with. But it gets expensive fast. It makes sense for simple apps and teams that value developer experience over budget. Not ideal if cost is a primary concern.',
    fits: [
      { label: 'First-time deployer', fit: 'yes', note: 'Git push deploys with almost zero configuration required.' },
      { label: 'Budget under $10/month', fit: 'maybe', note: 'Possible at the basic tier but limited resources for the price.' },
      { label: 'Small prototype or demo app', fit: 'yes', note: 'Fast to spin up, easy to share with stakeholders.' },
      { label: 'Production app with real traffic', fit: 'maybe', note: 'Works but Standard dynos jump to $50/month quickly.' },
      { label: 'Multiple languages and frameworks', fit: 'yes', note: 'Supports Node.js, Python, Ruby, Java, PHP, Go, and more.' },
      { label: 'Long-term cost efficiency', fit: 'no', note: 'Costs escalate quickly compared to Render or Vercel at scale.' },
    ],
  },
  {
    name: 'AWS',
    badge: 'Most Powerful',
    tagline: 'The largest cloud platform in the world. Infinite control, infinite complexity.',
    bestFor: 'Teams with DevOps experience, enterprise projects, and apps that need full infrastructure control.',
    pricing: 'Pay per use',
    pricingNote: 'No fixed plans. You pay for exactly what you use. Can be very cheap or very expensive depending on architecture choices.',
    verdictForYou:
      'AWS is not for everyone. The power is real but so is the learning curve. If you are a solo developer or small business, AWS is usually overkill. We guide you through whether AWS is actually what your project needs or whether a simpler platform saves you time and money.',
    fits: [
      { label: 'First-time deployer', fit: 'no', note: 'The interface and concepts are overwhelming without prior cloud experience.' },
      { label: 'Full control over infrastructure', fit: 'yes', note: 'Every configuration is possible. EC2, S3, RDS, Lambda, and more.' },
      { label: 'Enterprise or compliance requirements', fit: 'yes', note: 'SOC 2, HIPAA, and most compliance frameworks are supported.' },
      { label: 'Budget predictability', fit: 'maybe', note: 'Pay-per-use is efficient at scale but unpredictable without monitoring.' },
      { label: 'Small business website', fit: 'maybe', note: 'Possible with S3 and CloudFront but simpler platforms are faster to set up.' },
      { label: 'Team with DevOps experience', fit: 'yes', note: 'AWS rewards teams who know what they are doing.' },
    ],
  },
];

const fitIcon = {
  yes: <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />,
  no: <X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />,
  maybe: <Minus className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />,
};

const fitColor: Record<Fit, string> = {
  yes: 'text-emerald-500',
  no: 'text-red-400',
  maybe: 'text-amber-400',
};

export function PlatformGuideSection() {
  const [selected, setSelected] = useState(0);
  const platform = platforms[selected];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Platform Guide</SectionLabel>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Which platform fits your project and budget?</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground max-w-3xl">
          We work with four platforms that cover most project types and budgets. Select one below to see an honest breakdown of what it is good for, what
          it costs, and whether it is the right call for your situation.
        </p>

        {/* Platform Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {platforms.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSelected(i)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                selected === i ? 'border-border bg-card shadow-sm' : 'border-transparent bg-muted/40 hover:bg-muted/70'
              }`}
            >
              <p className={`text-base font-semibold ${selected === i ? 'text-foreground' : 'text-muted-foreground'}`}>{p.name}</p>
              <p className="mt-1 text-[11px] font-medium text-muted-foreground">{p.badge}</p>
            </button>
          ))}
        </div>

        {/* Platform Detail Card */}
        <div className="mt-4 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="px-6 py-5 sm:px-8 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
                <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {platform.badge}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{platform.tagline}</p>
            </div>
            <div className="shrink-0 rounded-xl border border-border bg-muted/40 px-4 py-2.5 text-center">
              <p className="text-xs text-muted-foreground">Starting price</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">{platform.pricing}</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left: Fit Checklist */}
            <div className="px-6 py-6 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Who it fits</p>
              <ul className="space-y-3">
                {platform.fits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {fitIcon[item.fit]}
                    <div>
                      <p className={`text-sm font-medium ${fitColor[item.fit]}`}>{item.label}</p>
                      <p className="text-xs text-muted-foreground leading-5 mt-0.5">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Pricing note + Verdict */}
            <div className="px-6 py-6 sm:px-8 border-t border-border md:border-t-0 md:border-l space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Pricing breakdown</p>
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-sm leading-6 text-muted-foreground">{platform.pricingNote}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Best suited for</p>
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-sm leading-6 text-muted-foreground">{platform.bestFor}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Our honest take</p>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm leading-6 text-foreground">{platform.verdictForYou}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 sm:px-8 border-t border-border bg-muted/20 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground">
              Not sure which one applies to your project? We help you figure that out before any money is spent.
            </p>
            <a
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 shrink-0"
            >
              Ask us directly
            </a>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 px-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-emerald-500" />
            Good fit
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Minus className="h-3.5 w-3.5 text-amber-400" />
            Depends on your setup
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <X className="h-3.5 w-3.5 text-red-400" />
            Not recommended
          </div>
        </div>
      </div>
    </section>
  );
}
