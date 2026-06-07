import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactFormSection } from '@/components/contact/contact-form-section';

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
