import { Activity, Bug, ShieldCheck, Wrench } from 'lucide-react';
import { SectionLabel } from '../section-label';

const maintenanceAreas = [
  {
    title: 'Security patches',
    body: 'We help keep your dependencies current and flag known vulnerabilities before they become a problem on your live site.',
    icon: ShieldCheck,
  },
  {
    title: 'Dependency updates',
    body: 'We review package updates, test the build, and make sure new versions do not break your app, routes, or shared components.',
    icon: Wrench,
  },
  {
    title: 'Monitoring',
    body: 'We check for failed builds, broken routes, UI regressions, and form issues that affect real visitors on your live site.',
    icon: Activity,
  },
  {
    title: 'Bug fixes',
    body: 'We fix issues in your codebase covering route behavior, component rendering, styling, API responses, and content-driven pages.',
    icon: Bug,
  },
] as const;

const IntroductorySection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
          <div className="lg:pr-12">
            <SectionLabel>What this service is</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">We help maintain websites built on the stacks we know.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              This is not a catch-all support service. We cover specific technologies and do that well. If your project uses a stack outside the list below
              we will tell you honestly instead of taking on work we cannot support properly.
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Support includes patches, updates, bug fixes, monitoring, and post-launch improvements within the covered stack.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Bug Fixes', 'Dependency Updates', 'Security Patches', 'Post-Launch Monitoring', 'Performance Checks'].map(tag => (
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
            <SectionLabel>Four areas we cover</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">What ongoing maintenance actually includes.</h2>
            <div className="mt-6 space-y-3">
              {maintenanceAreas.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
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
