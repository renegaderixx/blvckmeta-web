'use client';

import { useState, useRef, useId } from 'react';

const faqs = [
  {
    question: 'How old do I have to be to use BlvckMeta?',
    answer:
      'You must be of legal age as defined by the laws of your state, province, or country of residence to create and use a BlvckMeta account. By registering, you represent that you meet the minimum legal age requirement in your jurisdiction. If you\'re unsure what the legal age of majority is in your location, please consult local resources or contact support@blvckmeta.com.',
  },
  {
    question: 'How do I reset my password?',
    answer:
      'On the BlvckMeta login screen, tap "Forgot Password?" and enter the email address associated with your account. You\'ll receive a password reset link via email within a few minutes. Check your spam folder if you don\'t see it. If you still have trouble, contact support@blvckmeta.com with your registered email and we\'ll help you regain access.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'To delete your account, go to your Profile, then tap Settings → Account → Delete Account. Confirm your decision and your account will be scheduled for deletion. Your data will be fully removed within 90 days, except where retention is required by law. This action is permanent and cannot be undone. If you have trouble deleting your account, contact support@blvckmeta.com.',
  },
  {
    question: 'How do I report a user or content?',
    answer:
      'You can report any post, comment, profile, or message directly within the app. Tap the three-dot menu (⋯) on any content or profile and select "Report." Choose the reason for your report and submit. Our trust and safety team reviews all reports, typically within 24–48 hours. For urgent safety issues, email support@blvckmeta.com directly.',
  },
  {
    question: 'What is the refund policy for in-app purchases?',
    answer:
      'All in-app purchases — including premium subscriptions, virtual coins, and digital goods — are processed through Apple App Store or Google Play Store. These purchases are generally non-refundable as per our Terms of Service and the platforms\' own policies. However, if you believe a charge was unauthorized or made in error, please contact Apple or Google directly for refund consideration, as they process all payment transactions. For billing questions, contact support@blvckmeta.com.',
  },
  {
    question: 'How do I get verified?',
    answer:
      'Verification (the blue checkmark) is available for businesses, creators, organizations, and community leaders. To apply for verification, go to your Profile → Settings → Verification and complete the application. You\'ll need to provide documentation confirming your identity or the legitimacy of your business. Verification review typically takes 5–10 business days. Impersonation accounts are ineligible for verification.',
  },
  {
    question: 'What is TEAIRA?',
    answer:
      'TEAIRA is BlvckMeta\'s AI-powered neighborhood assistant. She helps you discover local resources, find service providers, navigate the platform, and stay informed about your community. TEAIRA\'s responses are for informational purposes only and do not constitute professional, legal, medical, or financial advice. Always verify important information with qualified professionals. You can access TEAIRA from the main navigation bar in the app.',
  },
  {
    question: 'How do I claim my spot on the Hallway Map?',
    answer:
      'Business owners and service providers can claim their listing on the Hallway Map through the app. Go to the Hallway Map, search for your business, and tap "Claim This Listing." You\'ll need to verify ownership through email, phone, or documentation. Once verified, you can update your business details, hours, and services. If your business isn\'t listed yet, you can create a new listing from the Hallway Map section.',
  },
  {
    question: 'My account was suspended — what do I do?',
    answer:
      'If your account has been suspended, you\'ll see a notification explaining the reason when you try to log in. If you believe the suspension was made in error, you can submit an appeal by emailing support@blvckmeta.com with the subject line "Account Appeal." Include your username and a brief explanation of why you believe the suspension should be reversed. We review appeals within 10 business days. Note: Accounts suspended for serious violations (including CSAM, threats of violence, or repeated policy violations) are not eligible for appeal.',
  },
];

const subjects = [
  { value: '', label: 'Select a subject...' },
  { value: 'account', label: 'Account Issue' },
  { value: 'billing', label: 'Billing' },
  { value: 'bug', label: 'Report a Bug' },
  { value: 'privacy', label: 'Privacy Request' },
  { value: 'other', label: 'Other' },
];

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const panelId = useId();

  return (
    <div className="border border-divider rounded-xl overflow-hidden">
      <button
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="focus-ring flex w-full items-center justify-between gap-4 bg-surface p-5 text-left transition-colors hover:bg-surface-2"
      >
        <span className="font-medium text-white">{question}</span>
        <span
          className={`shrink-0 text-accent transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-divider bg-black px-5 py-4">
          <p className="text-sm leading-relaxed text-white/70">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const successRef = useRef<HTMLParagraphElement>(null);
  const errorRegionRef = useRef<HTMLDivElement>(null);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject) errs.subject = 'Please select a subject.';
    if (!form.message.trim()) {
      errs.message = 'Message is required.';
    } else if (form.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error
      const firstErrorKey = Object.keys(errs)[0];
      const el = document.getElementById(`support-${firstErrorKey}`);
      el?.focus();
      return;
    }

    setSubmitState('loading');

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_SUPPORT;
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : 'https://formspree.io/f/placeholder';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          subject: subjects.find((s) => s.value === form.subject)?.label || form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitState('success');
        setForm({ fullName: '', email: '', subject: '', message: '' });
        setTimeout(() => successRef.current?.focus(), 100);
      } else {
        setSubmitState('error');
        setTimeout(() => errorRegionRef.current?.focus(), 100);
      }
    } catch {
      setSubmitState('error');
      setTimeout(() => errorRegionRef.current?.focus(), 100);
    }
  };

  const isPrivacyRequest = form.subject === 'privacy';

  return (
    <>
      {/* Header */}
      <section className="border-b border-divider bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-black tracking-tight">
            SUPPORT <span className="text-accent">CENTER</span>
          </h1>
          <p className="text-lg text-white/60">
            We&rsquo;re here to help. Check the FAQ below or send us a message.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="mb-8 text-2xl font-black tracking-tight">
            FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
          </h2>
          <div className="space-y-3" role="list">
            {faqs.map((faq) => (
              <div key={faq.question} role="listitem">
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="border-t border-divider bg-surface py-16"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2
            id="contact-heading"
            className="mb-2 text-2xl font-black tracking-tight"
          >
            CONTACT <span className="text-accent">US</span>
          </h2>
          <p className="mb-8 text-white/60">
            Can&rsquo;t find your answer above? Send us a message and we&rsquo;ll get back to you.
          </p>

          {/* Success message */}
          <div aria-live="polite" aria-atomic="true">
            {submitState === 'success' && (
              <div className="mb-6 rounded-xl border border-success/30 bg-success/10 p-4">
                <p
                  ref={successRef}
                  tabIndex={-1}
                  className="font-medium text-success outline-none"
                  role="status"
                >
                  Message sent! We&rsquo;ll get back to you within 1–3 business days.
                </p>
              </div>
            )}
          </div>

          {/* Error region */}
          <div
            ref={errorRegionRef}
            aria-live="assertive"
            aria-atomic="true"
            tabIndex={-1}
            className="outline-none"
          >
            {submitState === 'error' && (
              <div className="mb-6 rounded-xl border border-error/30 bg-error/10 p-4">
                <p className="font-medium text-error" role="alert">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a
                    href="mailto:support@blvckmeta.com"
                    className="underline hover:text-white"
                  >
                    support@blvckmeta.com
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="support-fullName"
                className="mb-1 block text-sm font-medium text-white"
              >
                Full Name <span className="text-accent" aria-label="required">*</span>
              </label>
              <input
                id="support-fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                className={`form-field ${errors.fullName ? 'error' : ''}`}
                placeholder="Your full name"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'support-fullName-error' : undefined}
                autoComplete="name"
              />
              {errors.fullName && (
                <span
                  id="support-fullName-error"
                  role="alert"
                  className="mt-1 block text-xs text-error"
                >
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="support-email"
                className="mb-1 block text-sm font-medium text-white"
              >
                Email Address <span className="text-accent" aria-label="required">*</span>
              </label>
              <input
                id="support-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`form-field ${errors.email ? 'error' : ''}`}
                placeholder="you@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'support-email-error' : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <span
                  id="support-email-error"
                  role="alert"
                  className="mt-1 block text-xs text-error"
                >
                  {errors.email}
                </span>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="support-subject"
                className="mb-1 block text-sm font-medium text-white"
              >
                Subject <span className="text-accent" aria-label="required">*</span>
              </label>
              <select
                id="support-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`form-field ${errors.subject ? 'error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'support-subject-error' : undefined}
              >
                {subjects.map((s) => (
                  <option key={s.value} value={s.value} disabled={s.value === ''}>
                    {s.label}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <span
                  id="support-subject-error"
                  role="alert"
                  className="mt-1 block text-xs text-error"
                >
                  {errors.subject}
                </span>
              )}
              {/* Privacy request note */}
              {isPrivacyRequest && (
                <p
                  className="mt-2 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-xs text-white/80"
                  aria-live="polite"
                >
                  Privacy requests will be routed to{' '}
                  <strong className="text-accent">privacy@blvckmeta.com</strong> and
                  handled by our Privacy team in accordance with applicable law.
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="support-message"
                className="mb-1 block text-sm font-medium text-white"
              >
                Message <span className="text-accent" aria-label="required">*</span>
              </label>
              <textarea
                id="support-message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={`form-field resize-y ${errors.message ? 'error' : ''}`}
                placeholder="Describe your issue in detail..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'support-message-error' : 'support-message-hint'}
              />
              <p id="support-message-hint" className="mt-1 text-xs text-muted">
                Minimum 20 characters. Please include as much detail as possible.
              </p>
              {errors.message && (
                <span
                  id="support-message-error"
                  role="alert"
                  className="mt-1 block text-xs text-error"
                >
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitState === 'loading'}
              className="focus-ring w-full rounded-xl bg-accent px-8 py-4 font-bold text-black transition-colors hover:bg-highlight disabled:cursor-not-allowed disabled:opacity-60"
              aria-disabled={submitState === 'loading'}
            >
              {submitState === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
