import type { Metadata } from 'next';
import { Code2, HelpCircle, Rocket, Search, Server, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CTA } from '@/components/cta';
import HeroSection from '@/components/faqs/hero-section';

export const metadata: Metadata = {
  title: 'FAQs | Freelance Web Developer',
  description: 'Find answers about website development, design, SEO, hosting guidance, testing automation, maintenance, pricing, and project timelines.',
};

const faqGroups = [
  {
    title: 'Website Projects',
    icon: HelpCircle,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    items: [
      {
        question: 'What services does this freelance web developer offer?',
        answer:
          'Services include website development, UI/UX web design, website hosting guidance, website testing and automation, SEO optimization, and website maintenance. Projects can cover business websites, landing pages, service pages, booking flows, client portals, admin consoles, e-commerce storefronts, and custom business systems.',
      },
      {
        question: 'Do you build websites for small businesses and startups?',
        answer:
          'Yes. The service is built for small businesses, startups, personal brands, and growing companies that need a clear online presence, responsive pages, reliable code, and a better path from visitor to client.',
      },
      {
        question: 'Can you work with clients outside the Philippines?',
        answer:
          'Yes. The business is Philippines-based, but website projects can be planned for local, regional, and international clients. Communication can be handled through email, phone call, Zoom, or Google Meet depending on the project.',
      },
      {
        question: 'Can one project combine web design, development, SEO, testing, and maintenance?',
        answer:
          'Yes. Services can be selected individually or combined into a larger website project. A typical build can include page planning, UI design, Next.js development, on-page SEO, deployment guidance, black-box website testing, and post-launch maintenance.',
      },
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    items: [
      {
        question: 'What kinds of website development services are available?',
        answer:
          'Website development can include professional business websites, landing pages, custom web applications, service pages, pricing pages, FAQ centers, booking flows, contact funnels, e-commerce pages, dashboards, and internal systems for operations.',
      },
      {
        question: 'What technologies do you use for website development?',
        answer:
          'The main stack includes Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Node.js, PostgreSQL, MongoDB, Docker, Git, Selenium, and Puppeteer. The goal is to build fast, scalable, maintainable websites and web applications.',
      },
      {
        question: 'Do you build custom business systems, not just marketing websites?',
        answer:
          'Yes. The service catalog includes custom systems for retail, logistics, medical clinics and health, enterprise business, financial and lending, BPO, food and beverages, real estate and property, education, and SPO workflows.',
      },
      {
        question: 'Can you build e-commerce, POS, inventory, booking, HR, payroll, or portal systems?',
        answer:
          'Yes, custom systems can include e-commerce suites, POS and inventory systems, booking schedulers, hotel booking systems, HRIS and payroll systems, student information systems, member management, loan origination, and client-facing portals.',
      },
    ],
  },
  {
    title: 'Design',
    icon: Sparkles,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    items: [
      {
        question: 'What is included in UI/UX web design services?',
        answer:
          'Web design work can include homepage layouts, about pages, service pages, landing pages, booking and contact flows, portfolio pages, dashboard interfaces, and development-ready layouts built around content, visitor intent, visual hierarchy, spacing, and conversion.',
      },
      {
        question: 'Do you use templates or create custom website layouts?',
        answer:
          'The design approach starts with the business goal, target visitors, page structure, and the action the user should take. The layout is planned around the content instead of starting with a generic theme and replacing the logo.',
      },
      {
        question: 'Are the designs mobile responsive?',
        answer:
          'Yes. Responsive website design is part of the workflow. Pages are planned for mobile, tablet, laptop, and desktop layouts so text, navigation, images, buttons, and forms remain usable across screen sizes.',
      },
      {
        question: 'Can you design landing pages that convert visitors into inquiries?',
        answer:
          'Yes. Landing pages can be built around one offer, one audience, and one call to action. The goal is to reduce distractions and make the next step clear for users who are ready to inquire, book, or buy.',
      },
    ],
  },
  {
    title: 'SEO',
    icon: Search,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    items: [
      {
        question: 'Do you offer SEO optimization services?',
        answer:
          'Yes. SEO optimization can include technical SEO audits, keyword research, on-page optimization, metadata improvement, internal linking, sitemap review, backlink planning, Core Web Vitals review, and content structure improvements.',
      },
      {
        question: 'Do you include keywords with real search intent?',
        answer:
          'Yes. Keyword research focuses on terms potential clients actually search for, then maps those keywords to the right pages. High-intent phrases can include freelance web developer, website development services, web design services, SEO optimization services, website maintenance services, and business website development.',
      },
      {
        question: 'What SEO tools do you use?',
        answer:
          'The SEO workflow can use Google Search Console, Google Lighthouse, Ahrefs, SEMrush, Moz, and keyword research planning. Not every tool is needed for every project, so the recommendation depends on the site size, budget, and goals.',
      },
      {
        question: 'Is SEO just adding keywords to a page?',
        answer:
          'No. SEO is not keyword stuffing. A useful SEO plan considers search intent, title tags, meta descriptions, headings, internal links, indexability, crawl paths, page speed, accessibility, backlinks, and whether the content actually helps users make a decision.',
      },
    ],
  },
  {
    title: 'Hosting',
    icon: Server,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    items: [
      {
        question: 'Do you provide website hosting?',
        answer:
          'This service is not a hosting provider. It offers website hosting guidance, helping you choose a platform, connect the project, configure environment variables, set up the domain, review DNS, confirm SSL, and check the site after launch.',
      },
      {
        question: 'Which hosting platforms do you guide clients through?',
        answer:
          'Hosting guidance can cover Vercel, Render, Heroku, and AWS. Vercel is usually a strong fit for Next.js and React sites, Render works well for full-stack apps, Heroku is simple for prototypes, and AWS is best when a project needs deeper infrastructure control.',
      },
      {
        question: 'Can you help connect a custom domain and SSL?',
        answer:
          'Yes. Hosting guidance can include domain connection, DNS review, SSL or HTTPS checks, deployment walkthroughs, route checks, and a post-launch review so the website is actually live and working.',
      },
      {
        question: 'What platform is best for a small business website?',
        answer:
          'For many small business websites built with Next.js or React, Vercel is often the easiest starting point. If the project needs a backend API, database, or workers, Render may be a better fit. The final recommendation depends on budget, traffic, and technical requirements.',
      },
    ],
  },
  {
    title: 'Testing',
    icon: ShieldCheck,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    items: [
      {
        question: 'What is website testing and automation?',
        answer:
          'Website testing checks whether pages, forms, navigation, buttons, responsive layouts, browser behavior, and user flows work before real users find problems. Automation scripts can repeat the same checks across releases to catch regressions.',
      },
      {
        question: 'Do you need access to the source code for website testing?',
        answer:
          'No. The testing service is black-box testing. The website is tested through the browser the way a visitor would use it, without touching source code, internal state, APIs, or the database.',
      },
      {
        question: 'What tools do you use for automated website testing?',
        answer:
          'Testing can use Puppeteer for fast headless Chrome checks and Selenium for cross-browser scenarios across Chrome, Firefox, and Edge. These tools help test forms, links, navigation, responsive layouts, modals, tabs, keyboard behavior, and user flows.',
      },
      {
        question: 'What kinds of issues can automated testing find?',
        answer:
          'Automated testing can flag broken links, failed routes, form validation problems, duplicate submissions, layout overflow, mobile responsiveness issues, keyboard accessibility gaps, modal focus problems, logout/session issues, visible error leaks, and browser-specific bugs.',
      },
    ],
  },
  {
    title: 'Maintenance',
    icon: Wrench,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    items: [
      {
        question: 'What is included in website maintenance services?',
        answer:
          'Maintenance can include dependency updates, security patches, bug fixes, route checks, component fixes, API response checks, form monitoring, failed build review, UI regression checks, performance reviews, and post-launch improvements.',
      },
      {
        question: 'What stacks do you support for maintenance?',
        answer:
          'Supported technologies include React, React Native, Next.js, Tailwind CSS, Bootstrap, Node.js, Express, PHP, Laravel, MongoDB, PostgreSQL, SQL, Nginx, Docker, and Git.',
      },
      {
        question: 'Do you maintain websites you did not build?',
        answer:
          'It depends on the stack and codebase. Support is focused on technologies that can be maintained well. If a project uses something outside the supported stack or is risky to take over, that will be communicated before work starts.',
      },
      {
        question: 'Can you fix bugs after launch?',
        answer:
          'Yes. Bug fixes can cover route behavior, component rendering, styling, API responses, content-driven pages, dependency issues, broken forms, and visitor-facing problems that affect stability or user experience.',
      },
    ],
  },
  {
    title: 'Process and Pricing',
    icon: Rocket,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    items: [
      {
        question: 'How does the project process work?',
        answer:
          'The process starts by understanding the business, audience, competitors, current website if available, and the result the client wants. Then the pages, content, calls to action, and conversion path are planned before design and development begin.',
      },
      {
        question: 'What should I prepare before contacting you?',
        answer:
          'Prepare your business name, target market, main service, current website if you have one, rough budget, expected timeline, preferred contact method, and examples of websites or features you like.',
      },
      {
        question: 'Is there a down payment before work starts?',
        answer:
          'Yes. Projects require a 50% down payment before work begins. This secures the project slot and allows work to start, with the remaining balance paid upon completion.',
      },
      {
        question: 'How fast do you reply to consultation requests?',
        answer:
          'The contact form states a response time within 24 business hours. A clearer first message helps speed up the recommendation, especially when it includes the service needed, business context, budget, and timeline.',
      },
    ],
  },
] as const;

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap(group =>
      group.items.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <SiteHeader />
      <HeroSection />

      <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border bg-card p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Categories</p>

                <nav className="space-y-1">
                  {faqGroups.map(group => (
                    <a
                      key={group.title}
                      href={`#${group.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-muted"
                    >
                      <span>{group.title}</span>

                      <span className="text-muted-foreground">{group.items.length}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-8">
              {faqGroups.map(group => {
                const Icon = group.icon;

                return (
                  <section
                    key={group.title}
                    id={group.title.toLowerCase().replace(/\s+/g, '-')}
                    className="scroll-mt-40 rounded-3xl border bg-card p-6 sm:p-8"
                  >
                    <div className="mb-8 flex items-center gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${group.bg} ${group.border}`}>
                        <Icon className={`h-4 w-4 ${group.color}`} />
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">{group.title}</h2>

                        <p className="text-sm text-muted-foreground">{group.items.length} questions</p>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3">
                      {group.items.map((item, i) => (
                        <AccordionItem key={item.question} value={`${group.title}-${i}`} className="px-5">
                          <AccordionTrigger className="py-5 text-left  text-sm font-medium hover:no-underline border-none sm:text-base">
                            {item.question}
                          </AccordionTrigger>

                          <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </main>
  );
}
