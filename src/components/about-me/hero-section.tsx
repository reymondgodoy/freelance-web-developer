import Image from 'next/image';
import Link from 'next/link';
import { SectionLabel } from '../section-label';
import BannerWrapper from '../banner-wrapper';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden bg-background rounded-[2.75rem] border border-border p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 items-stretch lg:grid-cols-[1.10fr_0.90fr] lg:gap-12">
            <div className="flex flex-col justify-between py-2">
              <div>
                <SectionLabel>About the developer</SectionLabel>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-5xl xl:text-6xl worsened-line-height">
                  Web development & testing
                </h1>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground max-w-3xl">
                  <p>
                    I started learning web development in 2012 out of curiosity and a desire to understand how websites are built. Most of my early
                    knowledge came from self-study, spending countless hours exploring documentation, watching tutorials, and experimenting with real
                    projects.
                  </p>
                  <p>
                    Over the years, I have worked with individuals, startups, and businesses on a variety of web projects. My experience ranges from
                    building responsive websites and web applications to improving performance, implementing automation testing, and helping clients launch
                    their projects with confidence.
                  </p>
                  <p>
                    My approach is straightforward: understand the goal, build solutions that are practical and maintainable, and focus on creating a
                    reliable experience for both the client and their users. Whether it&apos;s a business website, a custom web application, or a testing
                    workflow, I aim to deliver work that solves real problems and supports long-term growth.
                  </p>
                </div>
              </div>

              <div>
                <div className="mt-8 grid gap-3 grid-cols-3 max-w-3xl">
                  {['Next.js App Router', 'React + TypeScript', 'Tailwind + shadcn/ui'].map(item => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-center text-xs font-medium text-foreground shadow-sm sm:text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    View services
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Start a project
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/40 p-4 shadow-lg sm:p-5 ">
                <div className="overflow-hidden rounded-4xl border border-border bg-muted">
                  <Image
                    src="/me.png"
                    alt="Freelance web developer profile"
                    width={1200}
                    height={1308}
                    className="aspect-4/5 w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default HeroSection;
