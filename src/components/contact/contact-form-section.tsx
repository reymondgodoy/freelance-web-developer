'use client';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { useState } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { contactSchema, type ContactFormData } from '@/lib/validators/contact';
import { serviceCards } from '@/lib/site-content';

const fieldClassName =
  'mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20';

const fieldErrorClassName =
  'mt-2 w-full rounded-2xl border border-destructive bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-destructive focus:ring-2 focus:ring-destructive/20';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-destructive">{message}</p>;
}

function StepHeading({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{step}</span>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{title}</p>
    </div>
  );
}

export function ContactFormSection() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState('');

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
    },
  });

  const selectedServices = useWatch({ control, name: 'services' }) ?? [];

  const toggleService = (service: string) => {
    const current = selectedServices;
    const updated = current.includes(service) ? current.filter(s => s !== service) : [...current, service];
    setValue('services', updated, { shouldValidate: true });
  };

  const [turnstileRef, setTurnstileRef] = useState<TurnstileInstance | null | undefined>(null);

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      turnstileRef?.reset();
      return setTurnstileError('Please complete the security verification.');
    }

    setTurnstileError('');
    setSubmitStatus('loading');

    try {
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      // const json = await res.json();

      // if (!res.ok) {
      //   setTurnstileError('Please complete the verification again.');
      //   setTurnstileToken('');

      //   turnstileRef?.reset();

      //   setSubmitStatus('error');
      //   return;
      // }
      setTimeout(() => {
        setSubmitStatus('success');
        reset();
        setTurnstileToken('');
      }, 500);
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact-form" className="border-y border-border/70 bg-card/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-border bg-background p-6 shadow-sm sm:p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">✅</div>
            <h2 className="text-2xl font-semibold tracking-tight">Request Submitted!</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Thank you! We&apos;ve received your consultation request and will get back to you within <strong>24 business hours</strong>. Check your inbox
              for a confirmation email.
            </p>
            <Button className="mt-8 h-12 rounded-full px-6" onClick={() => setSubmitStatus('idle')}>
              Submit another inquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="border-y border-border/70 bg-card/55 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.5rem] border border-border bg-background p-6 shadow-sm sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-8" noValidate>
            <div className="grid gap-5">
              <StepHeading step={1} title="Contact Information" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">
                    Full Name <span className="text-primary">*</span>
                  </span>
                  <input {...register('name')} className={errors.name ? fieldErrorClassName : fieldClassName} type="text" placeholder="Juan Dela Cruz" />
                  <FieldError message={errors.name?.message} />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </span>
                  <input
                    {...register('email')}
                    className={errors.email ? fieldErrorClassName : fieldClassName}
                    type="email"
                    placeholder="juan@company.com"
                  />
                  <FieldError message={errors.email?.message} />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">
                    Phone Number <span className="text-primary">*</span>
                  </span>
                  <input {...register('phone')} className={errors.phone ? fieldErrorClassName : fieldClassName} type="tel" placeholder="0917-123-4567" />
                  <FieldError message={errors.phone?.message} />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Company Name</span>
                  <input {...register('company')} className={fieldClassName} type="text" placeholder="ABC Corporation" />
                </label>
              </div>
            </div>

            <div className="grid gap-5">
              <StepHeading step={2} title="Business Profile" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">
                    Industry/Sector <span className="text-primary">*</span>
                  </span>
                  <select {...register('industry')} className={errors.industry ? fieldErrorClassName : fieldClassName} defaultValue="">
                    <option value="" disabled>
                      Select your industry...
                    </option>
                    <option>Retail & E-commerce</option>
                    <option>Food & Beverage</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                    <option>Professional Services</option>
                    <option>Education</option>
                    <option>Real Estate</option>
                    <option>Other</option>
                  </select>
                  <FieldError message={errors.industry?.message} />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Company Size</span>
                  <select {...register('company_size')} className={fieldClassName} defaultValue="">
                    <option value="" disabled>
                      Select size...
                    </option>
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–200 employees</option>
                    <option>201–500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="grid gap-5">
              <StepHeading step={3} title="Service Requirements" />
              <fieldset>
                <legend className="text-sm font-medium text-foreground mb-3">
                  Services Interested In <span className="text-primary">*</span>
                  <span className="ml-1 text-xs text-muted-foreground">(Check all that apply)</span>
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceCards.map(service => (
                    <label
                      key={service.title}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-muted/50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.title)}
                        onChange={() => toggleService(service.title)}
                        className="h-4 w-4 rounded border-border accent-primary"
                      />
                      {service.title}
                    </label>
                  ))}
                </div>
                <FieldError message={errors.services?.message} />
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Budget Range</span>
                  <select {...register('budget')} className={fieldClassName} defaultValue="">
                    <option value="" disabled>
                      Select budget range...
                    </option>
                    <option>Under ₱15,000</option>
                    <option>₱15,000 – ₱30,000</option>
                    <option>₱30,000 – ₱60,000</option>
                    <option>₱60,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Expected Timeline</span>
                  <select {...register('timeline')} className={fieldClassName} defaultValue="">
                    <option value="" disabled>
                      Select timeline...
                    </option>
                    <option>ASAP (within 1 month)</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6-12 months</option>
                    <option>Flexible</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="grid gap-5">
              <StepHeading step={4} title="Project Details" />
              <label className="block">
                <span className="text-sm font-medium text-foreground">
                  Describe Your Requirements <span className="text-primary">*</span>
                  <span className="ml-1 text-xs text-muted-foreground">(Minimum 25 words)</span>
                </span>
                <textarea
                  {...register('message')}
                  className={`${errors.message ? fieldErrorClassName : fieldClassName} min-h-40 resize-y`}
                  placeholder="Please describe your project, current challenges, and desired outcomes. Include any specific features, integrations, or compliance requirements (e.g. BIR CAS, FDA, etc.)."
                />
                <FieldError message={errors.message?.message} />
              </label>
            </div>

            <div className="grid gap-5">
              <StepHeading step={5} title="Contact Preferences" />
              <div className="grid gap-5 sm:grid-cols-2">
                <fieldset>
                  <legend className="text-sm font-medium text-foreground mb-3">
                    Preferred Contact Method <span className="text-primary">*</span>
                  </legend>
                  <div className="grid gap-2">
                    {[
                      { value: 'Email', label: '✉ Email' },
                      { value: 'Phone Call', label: '📞 Phone Call' },
                      { value: 'Video Conference (Zoom/Google Meet)', label: '🎥 Video Conference (Zoom/Google Meet)' },
                    ].map(({ value, label }) => (
                      <label key={value} className="flex cursor-pointer items-center gap-3 text-sm text-foreground">
                        <input {...register('contact_method')} type="radio" value={value} className="accent-primary" />
                        {label}
                      </label>
                    ))}
                  </div>
                  <FieldError message={errors.contact_method?.message} />
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-medium text-foreground mb-3">Preferred Contact Time</legend>
                  <div className="grid gap-2">
                    {[
                      { value: 'Morning (9:00 AM – 12:00 PM)', label: 'Morning (9:00 AM – 12:00 PM)' },
                      { value: 'Afternoon (1:00 PM – 5:00 PM)', label: 'Afternoon (1:00 PM – 5:00 PM)' },
                      { value: 'Any Business Hours', label: 'Any Business Hours' },
                    ].map(({ value, label }) => (
                      <label key={value} className="flex cursor-pointer items-center gap-3 text-sm text-foreground">
                        <input {...register('contact_time')} type="radio" value={value} className="accent-primary" />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-foreground">How did you hear about us?</span>
                <select {...register('referral')} className={fieldClassName} defaultValue="">
                  <option value="" disabled>
                    Select...
                  </option>
                  <option>Google Search</option>
                  <option>Facebook</option>
                  <option>Social Media</option>
                  <option>Referral / Word of Mouth</option>
                  <option>Event / Webinar</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            {/* Consent */}
            <div>
              <label className="flex cursor-pointer items-center gap-3 text-xs text-muted-foreground">
                <Controller
                  name="consent"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      checked={field.value === true}
                      onChange={e => field.onChange(e.target.checked ? true : false)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                    />
                  )}
                />
                <span>
                  I agree to the Privacy Policy and consent to processing my personal data for consultation purposes. I understand my information will be
                  handled per RA 10173 (Data Privacy Act of 2012).
                </span>
              </label>
              <FieldError message={errors.consent?.message} />
            </div>

            <div className="">
              <Turnstile
                ref={setTurnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token: string) => {
                  setTurnstileToken(token);
                  setTurnstileError('');
                }}
                onExpire={() => setTurnstileToken('')}
                onError={() => {
                  setTurnstileToken('');
                  setTurnstileError('Security verification failed. Please try again.');
                }}
                className="mb-0"
              />

              {turnstileError && <p className="text-xs text-destructive">{turnstileError}</p>}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" className="h-12 rounded-full px-6" disabled={submitStatus === 'loading'}>
                {submitStatus === 'loading' ? 'Sending...' : '🚀 Submit Consultation Request'}
              </Button>
            </div>

            {/* <p className="text-center text-xs text-muted-foreground">
              🔒 Your information is secured with 256-bit encryption. Response time: within 24 hours.
            </p> */}
          </form>
        </div>
      </div>
    </section>
  );
}
