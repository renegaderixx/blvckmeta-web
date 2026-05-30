'use client';

import { useState, useRef } from 'react';

const REQUEST_TYPES = [
  { value: '', label: 'Select request type…' },
  { value: 'access', label: 'Data Access Request' },
  { value: 'deletion', label: 'Data Deletion Request' },
  { value: 'correction', label: 'Data Correction Request' },
  { value: 'portability', label: 'Data Portability Request' },
  { value: 'opt-out', label: 'Opt Out of Data Sharing' },
  { value: 'ccpa', label: 'CCPA Rights Request (California)' },
  { value: 'gdpr', label: 'GDPR Rights Request (EU/UK)' },
  { value: 'other', label: 'Other Privacy Question' },
];

interface FormErrors {
  fullName?: string;
  email?: string;
  requestType?: string;
  message?: string;
}

export default function PrivacyContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [requestType, setRequestType] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const successRef = useRef<HTMLDivElement>(null);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!fullName.trim()) e.fullName = 'Full name is required.';
    if (!email.trim()) {
      e.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!requestType) e.requestType = 'Please select a request type.';
    if (!message.trim()) {
      e.message = 'Please describe your request.';
    } else if (message.trim().length < 20) {
      e.message = 'Please provide at least 20 characters.';
    }
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`privacy-${firstKey}`)?.focus();
      return;
    }
    setStatus('loading');
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_PRIVACY;
      const endpoint = id
        ? `https://formspree.io/f/${id}`
        : 'https://formspree.io/f/placeholder';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          requestType: REQUEST_TYPES.find((r) => r.value === requestType)?.label || requestType,
          message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => successRef.current?.focus(), 100);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-xl border border-success/30 bg-success/10 p-6 outline-none"
        aria-live="polite"
        role="status"
      >
        <p className="font-semibold text-success">Request received.</p>
        <p className="mt-1 text-sm text-white/70">
          We&rsquo;ll respond to your privacy request within 30 days at the email address
          you provided. For urgent matters, email{' '}
          <a href="mailto:privacy@blvckmeta.com" className="text-accent hover:underline">
            privacy@blvckmeta.com
          </a>{' '}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
      {status === 'error' && (
        <div className="rounded-xl border border-error/30 bg-error/10 p-4" role="alert" aria-live="assertive">
          <p className="text-sm text-error">
            Something went wrong. Please try again or email{' '}
            <a href="mailto:privacy@blvckmeta.com" className="underline hover:text-white">
              privacy@blvckmeta.com
            </a>{' '}
            directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="privacy-fullName" className="mb-1 block text-sm font-medium text-white">
            Full Name <span className="text-accent" aria-label="required">*</span>
          </label>
          <input
            id="privacy-fullName"
            type="text"
            value={fullName}
            onChange={(e) => { setFullName(e.target.value); setErrors((p) => ({ ...p, fullName: undefined })); }}
            className={`form-field ${errors.fullName ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'privacy-fullName-err' : undefined}
            autoComplete="name"
          />
          {errors.fullName && (
            <span id="privacy-fullName-err" role="alert" className="mt-1 block text-xs text-error">
              {errors.fullName}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="privacy-email" className="mb-1 block text-sm font-medium text-white">
            Email Address <span className="text-accent" aria-label="required">*</span>
          </label>
          <input
            id="privacy-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
            className={`form-field ${errors.email ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'privacy-email-err' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span id="privacy-email-err" role="alert" className="mt-1 block text-xs text-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="privacy-requestType" className="mb-1 block text-sm font-medium text-white">
          Request Type <span className="text-accent" aria-label="required">*</span>
        </label>
        <select
          id="privacy-requestType"
          value={requestType}
          onChange={(e) => { setRequestType(e.target.value); setErrors((p) => ({ ...p, requestType: undefined })); }}
          className={`form-field ${errors.requestType ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={!!errors.requestType}
          aria-describedby={errors.requestType ? 'privacy-requestType-err' : undefined}
        >
          {REQUEST_TYPES.map((r) => (
            <option key={r.value} value={r.value} disabled={r.value === ''}>
              {r.label}
            </option>
          ))}
        </select>
        {errors.requestType && (
          <span id="privacy-requestType-err" role="alert" className="mt-1 block text-xs text-error">
            {errors.requestType}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="privacy-message" className="mb-1 block text-sm font-medium text-white">
          Details <span className="text-accent" aria-label="required">*</span>
        </label>
        <p id="privacy-message-hint" className="mb-1 text-xs text-muted">
          Describe your request in detail. Include your username or account email if applicable.
        </p>
        <textarea
          id="privacy-message"
          rows={5}
          value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
          className={`form-field resize-y ${errors.message ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={`privacy-message-hint${errors.message ? ' privacy-message-err' : ''}`}
        />
        {errors.message && (
          <span id="privacy-message-err" role="alert" className="mt-1 block text-xs text-error">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring w-full rounded-xl bg-accent px-8 py-4 font-bold text-black transition-colors hover:bg-highlight disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting…' : 'Submit Privacy Request'}
      </button>

      <p className="text-xs text-muted">
        We respond to all privacy requests within 30 days as required by applicable law.
      </p>
    </form>
  );
}
