import Image from 'next/image';

import { SectionLabel } from '@/components/section-label';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 items-stretch rounded-[2.5rem] border border-border bg-background p-6 shadow-sm md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:p-10">
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex-1 rounded-3xl border border-border bg-muted/20 p-6 sm:p-8 flex flex-col justify-center">
              <SectionLabel>About the developer</SectionLabel>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Web development & testing</h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  I am a full-stack developer dedicated to building fast, scalable, and highly reliable web applications. From client-facing websites to
                  complex internal business operations, I focus on delivering clean code and exceptional user experiences.
                </p>
                <p>
                  My expertise spans modern frontend frameworks, secure backend systems, and automated testing pipelines. I help businesses streamline
                  their processes, whether that means implementing secure payment flows, HR tools, custom enrollment systems, or optimizing infrastructure
                  for peak performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-3xl border border-border bg-muted/10 p-6 text-center sm:p-8">
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Full-Stack Focus</p>
              </div>
              <div className="border-x border-border">
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Secure</p>
                <p className="text-xs text-muted-foreground mt-1">Secure Payment Flows</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">QA</p>
                <p className="text-xs text-muted-foreground mt-1">Automated & Manual Testing</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden rounded-4xl border border-border bg-[linear-gradient(180deg,color-mix(in_oklch,var(--muted)_45%,transparent),var(--background))] p-4 sm:p-6 lg:p-8">
            <Image
              src="/me.png"
              alt="Freelance website developer profile"
              width={654}
              height={654}
              className="aspect-4/5 w-full rounded-2xl border border-border object-cover shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
