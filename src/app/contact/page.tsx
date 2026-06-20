import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactFormSection } from '@/components/contact/contact-form-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Freelance Web Developer',
  description: 'Tell us about your project, services needed, budget, and timeline to receive a tailored website proposal within 24 business hours.',
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <ContactHero />
      <ContactFormSection />
      <SiteFooter />
    </main>
  );
}
