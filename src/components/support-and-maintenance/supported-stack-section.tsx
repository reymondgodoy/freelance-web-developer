'use client';
import { SectionLabel } from '../section-label';

const stackCategories = [
  {
    label: 'Frontend',
    color: 'text-sky-500',
    borderColor: 'border-sky-500/20',
    bgColor: 'bg-sky-500/5',
    dotColor: 'bg-sky-500',
    tools: [
      { name: 'React', note: 'Components, hooks, state management, and SPA routing.' },
      { name: 'React Native', note: 'Mobile app bug fixes and UI component issues.' },
      { name: 'Next.js', note: 'App router, pages router, SSR, SSG, and API routes.' },
      { name: 'Tailwind CSS', note: 'Utility class fixes, responsive layout, and dark mode.' },
      { name: 'Bootstrap', note: 'Grid system, component overrides, and responsive fixes.' },
    ],
  },
  {
    label: 'Backend',
    color: 'text-emerald-500',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
    dotColor: 'bg-emerald-500',
    tools: [
      { name: 'Node.js', note: 'Server logic, middleware, event loop issues, and modules.' },
      { name: 'Express', note: 'REST API routes, middleware chains, and error handlers.' },
      { name: 'PHP', note: 'Server-side scripts, forms, sessions, and request handling.' },
      { name: 'Laravel', note: 'Eloquent models, routes, controllers, and Blade templates.' },
      { name: 'MongoDB', note: 'Schema design, query fixes, and Mongoose model issues.' },
      { name: 'PostgreSQL', note: 'Query optimization, migrations, and relation fixes.' },
      { name: 'SQL', note: 'General SQL query issues, joins, indexes, and schema updates.' },
    ],
  },
  {
    label: 'Infrastructure',
    color: 'text-amber-500',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/5',
    dotColor: 'bg-amber-500',
    tools: [
      { name: 'Nginx', note: 'Server config, reverse proxy setup, and routing rules.' },
      { name: 'Docker', note: 'Container issues, Dockerfile fixes, and compose config.' },
      { name: 'Git', note: 'Branch management, merge conflicts, and repo cleanup.' },
    ],
  },
] as const;

export function SupportedStackSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Supported stack</SectionLabel>
        <div className="mt-3 gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl max-w-3xl">Support is only offered for these technologies.</h2>
          <p className="text-sm text-muted-foreground max-w-3xl">
            If your project uses something outside this list we will say so upfront rather than take on work we cannot support well.
          </p>
        </div>

        {/* Stack grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {stackCategories.map(category => (
            <div key={category.label} className={`rounded-2xl border ${category.borderColor} ${category.bgColor} p-6`}>
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`h-2 w-2 rounded-full ${category.dotColor} shrink-0`} />
                <h3 className={`text-xs font-bold uppercase tracking-widest ${category.color}`}>{category.label}</h3>
              </div>

              {/* Tool list */}
              <ul className="space-y-3">
                {category.tools.map(tool => (
                  <li key={tool.name} className="rounded-xl border border-border bg-card px-4 py-3">
                    <h4 className="text-sm font-semibold text-foreground">{tool.name}</h4>
                    <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{tool.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Not sure if your stack is covered?</span> Send us what you are working with and we will give
            you a straight answer before any work starts.
          </p>
          <a
            href="/contact"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-primary px-5 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Check your stack
          </a>
        </div>
      </div>
    </section>
  );
}
