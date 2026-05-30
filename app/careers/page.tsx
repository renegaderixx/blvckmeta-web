'use client';

import { useState, useRef } from 'react';
import SignaturePad, { SignaturePadRef } from '@/components/SignaturePad';
import { generatePDF } from '@/components/ApplicationPDF';

// ─── Types ────────────────────────────────────────────────────────────────────

interface InternFormState {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  schoolName: string;
  gradeLevel: string;
  graduationYear: string;
  gpa: string;
  counselorName: string;
  positions: string[];
  hearAbout: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhone: string;
  consentChecked: boolean;
}

interface CareerFormState {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  linkedin: string;
  portfolio: string;
  position: string;
  employmentType: string;
  availability: string;
  compensation: string;
  workAuth: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  resumeFile: File | null;
}

type FormErrors = Partial<Record<string, string>>;

// ─── Constants ─────────────────────────────────────────────────────────────────

const INTERN_POSITIONS = [
  'Junior Content Creator',
  'Junior UI/UX Design',
  'Junior Community Ambassador',
  'Junior Marketing & Social',
];

const CAREER_POSITIONS = [
  'Senior Full-Stack Engineer',
  'iOS Engineer (Swift / SwiftUI)',
  'Android Engineer (Kotlin)',
  'Backend Engineer (Node.js / Firebase)',
  'Product Designer (UX/UI)',
  'Community Manager',
  'Head of Marketing & Growth',
  'Trust & Safety Specialist',
];

const HEAR_ABOUT_OPTIONS = [
  { value: '', label: 'Select one…' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'school', label: 'School / Counselor' },
  { value: 'friend', label: 'Friend or Family' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'other', label: 'Other' },
];

const GRADE_OPTIONS = [
  { value: '', label: 'Select grade…' },
  { value: '9', label: '9th Grade' },
  { value: '10', label: '10th Grade' },
  { value: '11', label: '11th Grade' },
  { value: '12', label: '12th Grade' },
];

const EMPLOYMENT_TYPE_OPTIONS = [
  { value: '', label: 'Select type…' },
  { value: 'full-time', label: 'Full-Time' },
  { value: 'part-time', label: 'Part-Time' },
  { value: 'contract', label: 'Contract' },
];

const AVAILABILITY_OPTIONS = [
  { value: '', label: 'Select availability…' },
  { value: 'immediately', label: 'Immediately' },
  { value: '2-weeks', label: '2 Weeks Notice' },
  { value: '1-month', label: '1 Month' },
  { value: '2-months', label: '2+ Months' },
];

const WORK_AUTH_OPTIONS = [
  { value: '', label: 'Select authorization…' },
  { value: 'citizen', label: 'US Citizen' },
  { value: 'permanent-resident', label: 'Permanent Resident (Green Card)' },
  { value: 'visa', label: 'Work Visa (H1-B, OPT, etc.)' },
  { value: 'not-authorized', label: 'Not Currently Authorized' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function calculateAge(dob: string): number {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function CharCounter({ value, min, max }: { value: string; min: number; max: number }) {
  const len = value.trim().length;
  const color = len < min ? 'text-muted' : len > max ? 'text-error' : 'text-success';
  return (
    <span className={`text-xs ${color}`} aria-live="polite">
      {len} / {max} characters{len < min ? ` (minimum ${min})` : ''}
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} role="alert" className="mt-1 block text-xs text-error">
      {message}
    </span>
  );
}

// ─── Not Hiring Holding Page ──────────────────────────────────────────────────

function NotHiringPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_CAREERS;
      const endpoint = id
        ? `https://formspree.io/f/${id}`
        : 'https://formspree.io/f/placeholder';
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, type: 'hiring-waitlist' }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // Show success anyway to not expose infra
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
        Opportunities
      </p>
      <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl">
        WE&rsquo;RE NOT CURRENTLY{' '}
        <span className="text-accent">HIRING</span>
      </h1>
      <p className="mb-10 max-w-xl text-lg text-white/60">
        We&rsquo;re always building. When we open applications, you&rsquo;ll want to be first. Drop
        your email below and we&rsquo;ll reach out when the block is expanding.
      </p>
      {submitted ? (
        <div
          className="rounded-xl border border-success/30 bg-success/10 px-8 py-4"
          aria-live="polite"
        >
          <p className="font-medium text-success">
            You&rsquo;re on the list! We&rsquo;ll reach out when hiring opens.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-md flex-col gap-3">
          <div>
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              className={`form-field ${emailError ? 'error' : ''}`}
              placeholder="your@email.com"
              aria-required="true"
              aria-invalid={!!emailError}
              aria-describedby={emailError ? 'waitlist-email-error' : undefined}
              autoComplete="email"
            />
            <FieldError id="waitlist-email-error" message={emailError} />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="focus-ring rounded-xl bg-accent px-8 py-4 font-bold text-black transition-colors hover:bg-highlight disabled:opacity-60"
          >
            {loading ? 'Submitting…' : 'Notify Me When Hiring Opens'}
          </button>
        </form>
      )}
    </div>
  );
}

// ─── Internship Form ──────────────────────────────────────────────────────────

function InternshipForm() {
  const sigRef = useRef<SignaturePadRef>(null);
  const [form, setForm] = useState<InternFormState>({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    schoolName: '',
    gradeLevel: '',
    graduationYear: '',
    gpa: '',
    counselorName: '',
    positions: [],
    hearAbout: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    guardianName: '',
    guardianEmail: '',
    guardianPhone: '',
    consentChecked: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const successRef = useRef<HTMLDivElement>(null);

  const set = (field: keyof InternFormState, value: InternFormState[keyof InternFormState]) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const togglePosition = (pos: string) => {
    setForm((p) => ({
      ...p,
      positions: p.positions.includes(pos)
        ? p.positions.filter((x) => x !== pos)
        : [...p.positions, pos],
    }));
    setErrors((p) => ({ ...p, positions: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.lastName.trim()) e.lastName = 'Last name is required.';
    if (!form.dob) {
      e.dob = 'Date of birth is required.';
    } else {
      const age = calculateAge(form.dob);
      if (age < 14 || age > 17) {
        e.dob = `Applicant must be between 14 and 17 years old. Calculated age: ${age}.`;
      }
    }
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.city.trim()) e.city = 'City is required.';
    if (!form.state.trim()) e.state = 'State is required.';
    if (!form.schoolName.trim()) e.schoolName = 'School name is required.';
    if (!form.gradeLevel) e.gradeLevel = 'Grade level is required.';
    if (!form.graduationYear.trim()) e.graduationYear = 'Graduation year is required.';
    if (form.positions.length === 0) e.positions = 'Select at least one position.';
    if (!form.hearAbout) e.hearAbout = 'Please tell us how you heard about us.';
    if (form.q1.trim().length < 50) e.q1 = 'Please write at least 50 characters.';
    if (form.q2.trim().length < 50) e.q2 = 'Please write at least 50 characters.';
    if (form.q3.trim().length < 50) e.q3 = 'Please write at least 50 characters.';
    if (form.q4.trim().length < 50) e.q4 = 'Please write at least 50 characters.';
    if (!form.guardianName.trim()) e.guardianName = 'Guardian name is required.';
    if (!form.guardianEmail.trim()) e.guardianEmail = 'Guardian email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.guardianEmail)) e.guardianEmail = 'Enter a valid guardian email.';
    if (!form.guardianPhone.trim()) e.guardianPhone = 'Guardian phone is required.';
    if (!form.consentChecked) e.consentChecked = 'Guardian consent is required to submit.';
    const sig = sigRef.current?.getSignatureData();
    if (!sig?.dataUrl && !sig?.typedName.trim()) e.signature = 'Please provide a drawn or typed signature.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`intern-${firstKey}`)?.focus();
      return;
    }
    setStatus('loading');
    try {
      const sig = sigRef.current!.getSignatureData();
      const pdf = await generatePDF(
        {
          sections: [
            {
              title: 'Personal Information',
              fields: [
                { label: 'Full Name', value: `${form.firstName} ${form.lastName}` },
                { label: 'Date of Birth', value: form.dob },
                { label: 'Email', value: form.email },
                { label: 'Phone', value: form.phone || 'N/A' },
                { label: 'City', value: form.city },
                { label: 'State', value: form.state },
              ],
            },
            {
              title: 'School Information',
              fields: [
                { label: 'School', value: form.schoolName },
                { label: 'Grade', value: form.gradeLevel },
                { label: 'Graduation Year', value: form.graduationYear },
                { label: 'GPA', value: form.gpa || 'N/A' },
                { label: 'Counselor', value: form.counselorName || 'N/A' },
              ],
            },
            {
              title: 'Application',
              fields: [
                { label: 'Positions', value: form.positions.join(', ') },
                { label: 'How Heard', value: form.hearAbout },
              ],
            },
            {
              title: 'Essay Questions',
              fields: [
                { label: 'Q1: Why BlvckMeta?', value: form.q1 },
                { label: 'Q2: Skills & Strengths', value: form.q2 },
                { label: 'Q3: Community Impact', value: form.q3 },
                { label: 'Q4: Goals', value: form.q4 },
              ],
            },
            {
              title: 'Guardian Information',
              fields: [
                { label: 'Guardian Name', value: form.guardianName },
                { label: 'Guardian Email', value: form.guardianEmail },
                { label: 'Guardian Phone', value: form.guardianPhone },
                { label: 'Consent Given', value: 'Yes' },
              ],
            },
          ],
          signatureDataUrl: sig.dataUrl,
          typedSignature: sig.typedName,
        },
        'Internship Program (Ages 14–17)'
      );

      const formData = new FormData();
      formData.append('track', 'internship');
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('positions', form.positions.join(', '));
      formData.append('application.pdf', new File([pdf], 'blvckmeta-internship-application.pdf', { type: 'application/pdf' }));

      const id = process.env.NEXT_PUBLIC_FORMSPREE_CAREERS;
      const endpoint = id
        ? `https://formspree.io/f/${id}`
        : 'https://formspree.io/f/placeholder';
      await fetch(endpoint, { method: 'POST', body: formData });
      setStatus('success');
      setTimeout(() => successRef.current?.focus(), 100);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-xl border border-success/30 bg-success/10 p-8 text-center outline-none"
        aria-live="polite"
        role="status"
      >
        <p className="mb-2 text-2xl font-black text-success">Application Submitted!</p>
        <p className="text-white/70">
          Thank you for applying to the BlvckMeta Internship Program. We&rsquo;ll review your
          application and be in touch via email within 7–10 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {status === 'error' && (
        <div className="rounded-xl border border-error/30 bg-error/10 p-4" role="alert" aria-live="assertive">
          <p className="text-error">Something went wrong. Please try again or email us at <a href="mailto:support@blvckmeta.com" className="underline">support@blvckmeta.com</a>.</p>
        </div>
      )}

      {/* Personal Info */}
      <fieldset className="space-y-4 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Personal Information</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="intern-firstName" className="mb-1 block text-sm font-medium text-white">First Name <span className="text-accent">*</span></label>
            <input id="intern-firstName" type="text" value={form.firstName} onChange={(e) => set('firstName', e.target.value)} className={`form-field ${errors.firstName ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? 'intern-firstName-err' : undefined} autoComplete="given-name" />
            <FieldError id="intern-firstName-err" message={errors.firstName} />
          </div>
          <div>
            <label htmlFor="intern-lastName" className="mb-1 block text-sm font-medium text-white">Last Name <span className="text-accent">*</span></label>
            <input id="intern-lastName" type="text" value={form.lastName} onChange={(e) => set('lastName', e.target.value)} className={`form-field ${errors.lastName ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? 'intern-lastName-err' : undefined} autoComplete="family-name" />
            <FieldError id="intern-lastName-err" message={errors.lastName} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="intern-dob" className="mb-1 block text-sm font-medium text-white">Date of Birth <span className="text-accent">*</span></label>
            <p id="intern-dob-hint" className="mb-1 text-xs text-muted">Must be between ages 14–17 to apply.</p>
            <input id="intern-dob" type="date" value={form.dob} onChange={(e) => set('dob', e.target.value)} className={`form-field ${errors.dob ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.dob} aria-describedby={`intern-dob-hint${errors.dob ? ' intern-dob-err' : ''}`} />
            <FieldError id="intern-dob-err" message={errors.dob} />
          </div>
          <div>
            <label htmlFor="intern-email" className="mb-1 block text-sm font-medium text-white">Email Address <span className="text-accent">*</span></label>
            <input id="intern-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={`form-field ${errors.email ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'intern-email-err' : undefined} autoComplete="email" />
            <FieldError id="intern-email-err" message={errors.email} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="intern-phone" className="mb-1 block text-sm font-medium text-white">Phone <span className="text-muted text-xs">(optional)</span></label>
            <input id="intern-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="form-field" autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="intern-city" className="mb-1 block text-sm font-medium text-white">City <span className="text-accent">*</span></label>
            <input id="intern-city" type="text" value={form.city} onChange={(e) => set('city', e.target.value)} className={`form-field ${errors.city ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.city} aria-describedby={errors.city ? 'intern-city-err' : undefined} autoComplete="address-level2" />
            <FieldError id="intern-city-err" message={errors.city} />
          </div>
          <div>
            <label htmlFor="intern-state" className="mb-1 block text-sm font-medium text-white">State <span className="text-accent">*</span></label>
            <input id="intern-state" type="text" value={form.state} onChange={(e) => set('state', e.target.value)} className={`form-field ${errors.state ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.state} aria-describedby={errors.state ? 'intern-state-err' : undefined} autoComplete="address-level1" />
            <FieldError id="intern-state-err" message={errors.state} />
          </div>
        </div>
      </fieldset>

      {/* School Info */}
      <fieldset className="space-y-4 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">School Information</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="intern-schoolName" className="mb-1 block text-sm font-medium text-white">School Name <span className="text-accent">*</span></label>
            <input id="intern-schoolName" type="text" value={form.schoolName} onChange={(e) => set('schoolName', e.target.value)} className={`form-field ${errors.schoolName ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.schoolName} aria-describedby={errors.schoolName ? 'intern-schoolName-err' : undefined} />
            <FieldError id="intern-schoolName-err" message={errors.schoolName} />
          </div>
          <div>
            <label htmlFor="intern-gradeLevel" className="mb-1 block text-sm font-medium text-white">Grade Level <span className="text-accent">*</span></label>
            <select id="intern-gradeLevel" value={form.gradeLevel} onChange={(e) => set('gradeLevel', e.target.value)} className={`form-field ${errors.gradeLevel ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.gradeLevel} aria-describedby={errors.gradeLevel ? 'intern-gradeLevel-err' : undefined}>
              {GRADE_OPTIONS.map((o) => <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>)}
            </select>
            <FieldError id="intern-gradeLevel-err" message={errors.gradeLevel} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="intern-graduationYear" className="mb-1 block text-sm font-medium text-white">Graduation Year <span className="text-accent">*</span></label>
            <input id="intern-graduationYear" type="number" min="2025" max="2032" value={form.graduationYear} onChange={(e) => set('graduationYear', e.target.value)} className={`form-field ${errors.graduationYear ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.graduationYear} aria-describedby={errors.graduationYear ? 'intern-graduationYear-err' : undefined} />
            <FieldError id="intern-graduationYear-err" message={errors.graduationYear} />
          </div>
          <div>
            <label htmlFor="intern-gpa" className="mb-1 block text-sm font-medium text-white">GPA <span className="text-muted text-xs">(optional)</span></label>
            <input id="intern-gpa" type="text" value={form.gpa} onChange={(e) => set('gpa', e.target.value)} className="form-field" placeholder="e.g. 3.5" />
          </div>
          <div>
            <label htmlFor="intern-counselorName" className="mb-1 block text-sm font-medium text-white">Counselor Name <span className="text-muted text-xs">(optional)</span></label>
            <input id="intern-counselorName" type="text" value={form.counselorName} onChange={(e) => set('counselorName', e.target.value)} className="form-field" />
          </div>
        </div>
      </fieldset>

      {/* Positions & Interest */}
      <fieldset className="space-y-4 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Positions & Interest</legend>
        <div>
          <p className="mb-2 text-sm font-medium text-white">
            Positions of Interest <span className="text-accent">*</span>
          </p>
          <p id="intern-positions-hint" className="mb-3 text-xs text-muted">Select all that apply.</p>
          <div className="space-y-2" aria-describedby={`intern-positions-hint${errors.positions ? ' intern-positions-err' : ''}`}>
            {INTERN_POSITIONS.map((pos) => (
              <label key={pos} className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" checked={form.positions.includes(pos)} onChange={() => togglePosition(pos)} className="h-4 w-4 rounded border-divider bg-surface accent-accent focus-ring" />
                <span className="text-sm text-white/80">{pos}</span>
              </label>
            ))}
          </div>
          <FieldError id="intern-positions-err" message={errors.positions} />
        </div>
        <div>
          <label htmlFor="intern-hearAbout" className="mb-1 block text-sm font-medium text-white">How did you hear about us? <span className="text-accent">*</span></label>
          <select id="intern-hearAbout" value={form.hearAbout} onChange={(e) => set('hearAbout', e.target.value)} className={`form-field ${errors.hearAbout ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.hearAbout} aria-describedby={errors.hearAbout ? 'intern-hearAbout-err' : undefined}>
            {HEAR_ABOUT_OPTIONS.map((o) => <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>)}
          </select>
          <FieldError id="intern-hearAbout-err" message={errors.hearAbout} />
        </div>
      </fieldset>

      {/* Essay Questions */}
      <fieldset className="space-y-5 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Essay Questions</legend>
        {[
          { key: 'q1', label: 'Why are you interested in the BlvckMeta internship program, and what does community mean to you?' },
          { key: 'q2', label: 'What skills or strengths do you bring to your chosen position(s)? Give a specific example.' },
          { key: 'q3', label: 'Describe a time you contributed to your school or community. What was the impact?' },
          { key: 'q4', label: 'What are your goals for this internship and for your future career?' },
        ].map(({ key, label }) => (
          <div key={key}>
            <label htmlFor={`intern-${key}`} className="mb-1 block text-sm font-medium text-white">
              {label} <span className="text-accent">*</span>
            </label>
            <textarea
              id={`intern-${key}`}
              rows={5}
              value={form[key as keyof InternFormState] as string}
              onChange={(e) => set(key as keyof InternFormState, e.target.value)}
              className={`form-field resize-y ${errors[key] ? 'error' : ''}`}
              aria-required="true"
              aria-invalid={!!errors[key]}
              aria-describedby={`intern-${key}-counter${errors[key] ? ` intern-${key}-err` : ''}`}
            />
            <div className="mt-1 flex items-center justify-between">
              <span id={`intern-${key}-counter`}>
                <CharCounter value={form[key as keyof InternFormState] as string} min={50} max={500} />
              </span>
            </div>
            <FieldError id={`intern-${key}-err`} message={errors[key]} />
          </div>
        ))}
      </fieldset>

      {/* Guardian Consent */}
      <fieldset className="space-y-4 rounded-xl border border-accent/20 bg-accent/5 p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Guardian / Parent Consent</legend>
        <p className="text-sm text-white/70">
          Because this is an internship for applicants ages 14–17, a parent or legal
          guardian must provide consent. Please have your guardian complete this section.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="intern-guardianName" className="mb-1 block text-sm font-medium text-white">Guardian Full Name <span className="text-accent">*</span></label>
            <input id="intern-guardianName" type="text" value={form.guardianName} onChange={(e) => set('guardianName', e.target.value)} className={`form-field ${errors.guardianName ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.guardianName} aria-describedby={errors.guardianName ? 'intern-guardianName-err' : undefined} autoComplete="name" />
            <FieldError id="intern-guardianName-err" message={errors.guardianName} />
          </div>
          <div>
            <label htmlFor="intern-guardianEmail" className="mb-1 block text-sm font-medium text-white">Guardian Email <span className="text-accent">*</span></label>
            <input id="intern-guardianEmail" type="email" value={form.guardianEmail} onChange={(e) => set('guardianEmail', e.target.value)} className={`form-field ${errors.guardianEmail ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.guardianEmail} aria-describedby={errors.guardianEmail ? 'intern-guardianEmail-err' : undefined} autoComplete="email" />
            <FieldError id="intern-guardianEmail-err" message={errors.guardianEmail} />
          </div>
          <div>
            <label htmlFor="intern-guardianPhone" className="mb-1 block text-sm font-medium text-white">Guardian Phone <span className="text-accent">*</span></label>
            <input id="intern-guardianPhone" type="tel" value={form.guardianPhone} onChange={(e) => set('guardianPhone', e.target.value)} className={`form-field ${errors.guardianPhone ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.guardianPhone} aria-describedby={errors.guardianPhone ? 'intern-guardianPhone-err' : undefined} autoComplete="tel" />
            <FieldError id="intern-guardianPhone-err" message={errors.guardianPhone} />
          </div>
        </div>
        <div>
          <label className="flex cursor-pointer items-start gap-3" id="intern-consentChecked-label">
            <input
              id="intern-consentChecked"
              type="checkbox"
              checked={form.consentChecked}
              onChange={(e) => set('consentChecked', e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-divider bg-surface accent-accent focus-ring"
              aria-required="true"
              aria-invalid={!!errors.consentChecked}
              aria-describedby={errors.consentChecked ? 'intern-consentChecked-err' : undefined}
            />
            <span className="text-sm text-white/80">
              I, the parent or legal guardian named above, give my consent for my child
              to apply to and participate in the BlvckMeta Student Internship Program. I
              understand this is an educational initiative and not employment. <span className="text-accent">*</span>
            </span>
          </label>
          <FieldError id="intern-consentChecked-err" message={errors.consentChecked} />
        </div>
      </fieldset>

      {/* Signature */}
      <SignaturePad
        ref={sigRef}
        id="intern-signature"
        label="Applicant Signature"
        required={true}
        error={errors.signature}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring w-full rounded-xl bg-accent py-4 font-bold text-black transition-colors hover:bg-highlight disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting Application…' : 'Submit Internship Application'}
      </button>
    </form>
  );
}

// ─── Career Form ──────────────────────────────────────────────────────────────

function CareerForm() {
  const sigRef = useRef<SignaturePadRef>(null);
  const [form, setForm] = useState<CareerFormState>({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    linkedin: '',
    portfolio: '',
    position: '',
    employmentType: '',
    availability: '',
    compensation: '',
    workAuth: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    resumeFile: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const successRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof CareerFormState>(field: K, value: CareerFormState[K]) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.lastName.trim()) e.lastName = 'Last name is required.';
    if (!form.dob) {
      e.dob = 'Date of birth is required.';
    } else {
      const age = calculateAge(form.dob);
      if (age < 18) e.dob = `You must be at least 18 years old to apply. Calculated age: ${age}.`;
    }
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.city.trim()) e.city = 'City is required.';
    if (!form.state.trim()) e.state = 'State/Province is required.';
    if (!form.country.trim()) e.country = 'Country is required.';
    if (!form.position) e.position = 'Please select a position.';
    if (!form.employmentType) e.employmentType = 'Employment type is required.';
    if (!form.availability) e.availability = 'Availability is required.';
    if (!form.workAuth) e.workAuth = 'Work authorization is required.';
    if (form.q1.trim().length < 100) e.q1 = 'Please write at least 100 characters.';
    if (form.q2.trim().length < 100) e.q2 = 'Please write at least 100 characters.';
    if (form.q3.trim().length < 100) e.q3 = 'Please write at least 100 characters.';
    if (form.q4.trim().length < 100) e.q4 = 'Please write at least 100 characters.';
    if (!form.resumeFile) {
      e.resumeFile = 'Resume is required.';
    } else {
      const allowed = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowed.includes(form.resumeFile.type)) e.resumeFile = 'Only PDF or DOCX files are accepted.';
      if (form.resumeFile.size > 5 * 1024 * 1024) e.resumeFile = 'File must be under 5 MB.';
    }
    const sig = sigRef.current?.getSignatureData();
    if (!sig?.dataUrl && !sig?.typedName.trim()) e.signature = 'Please provide a drawn or typed signature.';
    return e;
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    set('resumeFile', file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document.getElementById(`career-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus('loading');
    try {
      const sig = sigRef.current!.getSignatureData();
      const pdf = await generatePDF(
        {
          sections: [
            {
              title: 'Personal Information',
              fields: [
                { label: 'Full Name', value: `${form.firstName} ${form.lastName}` },
                { label: 'DOB', value: form.dob },
                { label: 'Email', value: form.email },
                { label: 'Phone', value: form.phone },
                { label: 'Location', value: `${form.city}, ${form.state}, ${form.country}` },
                { label: 'LinkedIn', value: form.linkedin || 'N/A' },
                { label: 'Portfolio', value: form.portfolio || 'N/A' },
              ],
            },
            {
              title: 'Position Details',
              fields: [
                { label: 'Position', value: form.position },
                { label: 'Employment Type', value: form.employmentType },
                { label: 'Availability', value: form.availability },
                { label: 'Compensation', value: form.compensation || 'N/A' },
                { label: 'US Work Authorization', value: form.workAuth },
              ],
            },
            {
              title: 'Application Questions',
              fields: [
                { label: 'Q1: Why BlvckMeta?', value: form.q1 },
                { label: 'Q2: Relevant Experience', value: form.q2 },
                { label: 'Q3: Greatest Achievement', value: form.q3 },
                { label: 'Q4: Vision for Your Role', value: form.q4 },
              ],
            },
          ],
          signatureDataUrl: sig.dataUrl,
          typedSignature: sig.typedName,
        },
        `Career Application — ${form.position}`
      );

      const formData = new FormData();
      formData.append('track', 'career');
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('position', form.position);
      formData.append('application.pdf', new File([pdf], 'blvckmeta-career-application.pdf', { type: 'application/pdf' }));
      if (form.resumeFile) formData.append('resume', form.resumeFile);

      const id = process.env.NEXT_PUBLIC_FORMSPREE_CAREERS;
      const endpoint = id
        ? `https://formspree.io/f/${id}`
        : 'https://formspree.io/f/placeholder';
      await fetch(endpoint, { method: 'POST', body: formData });
      setStatus('success');
      setTimeout(() => successRef.current?.focus(), 100);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-xl border border-success/30 bg-success/10 p-8 text-center outline-none"
        aria-live="polite"
        role="status"
      >
        <p className="mb-2 text-2xl font-black text-success">Application Submitted!</p>
        <p className="text-white/70">
          Thank you for applying to BlvckMeta. We review all applications carefully and
          will reach out within 2–3 weeks if there&rsquo;s a strong match.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {status === 'error' && (
        <div className="rounded-xl border border-error/30 bg-error/10 p-4" role="alert" aria-live="assertive">
          <p className="text-error">Something went wrong. Please try again or email <a href="mailto:support@blvckmeta.com" className="underline">support@blvckmeta.com</a>.</p>
        </div>
      )}

      {/* Personal */}
      <fieldset className="space-y-4 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Personal Information</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="career-firstName" className="mb-1 block text-sm font-medium text-white">First Name <span className="text-accent">*</span></label>
            <input id="career-firstName" type="text" value={form.firstName} onChange={(e) => set('firstName', e.target.value)} className={`form-field ${errors.firstName ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? 'career-firstName-err' : undefined} autoComplete="given-name" />
            <FieldError id="career-firstName-err" message={errors.firstName} />
          </div>
          <div>
            <label htmlFor="career-lastName" className="mb-1 block text-sm font-medium text-white">Last Name <span className="text-accent">*</span></label>
            <input id="career-lastName" type="text" value={form.lastName} onChange={(e) => set('lastName', e.target.value)} className={`form-field ${errors.lastName ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? 'career-lastName-err' : undefined} autoComplete="family-name" />
            <FieldError id="career-lastName-err" message={errors.lastName} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="career-dob" className="mb-1 block text-sm font-medium text-white">Date of Birth <span className="text-accent">*</span></label>
            <p id="career-dob-hint" className="mb-1 text-xs text-muted">Must be 18 or older to apply.</p>
            <input id="career-dob" type="date" value={form.dob} onChange={(e) => set('dob', e.target.value)} className={`form-field ${errors.dob ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.dob} aria-describedby={`career-dob-hint${errors.dob ? ' career-dob-err' : ''}`} />
            <FieldError id="career-dob-err" message={errors.dob} />
          </div>
          <div>
            <label htmlFor="career-email" className="mb-1 block text-sm font-medium text-white">Email Address <span className="text-accent">*</span></label>
            <input id="career-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={`form-field ${errors.email ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'career-email-err' : undefined} autoComplete="email" />
            <FieldError id="career-email-err" message={errors.email} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="career-phone" className="mb-1 block text-sm font-medium text-white">Phone <span className="text-accent">*</span></label>
            <input id="career-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={`form-field ${errors.phone ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'career-phone-err' : undefined} autoComplete="tel" />
            <FieldError id="career-phone-err" message={errors.phone} />
          </div>
          <div>
            <label htmlFor="career-city" className="mb-1 block text-sm font-medium text-white">City <span className="text-accent">*</span></label>
            <input id="career-city" type="text" value={form.city} onChange={(e) => set('city', e.target.value)} className={`form-field ${errors.city ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.city} aria-describedby={errors.city ? 'career-city-err' : undefined} autoComplete="address-level2" />
            <FieldError id="career-city-err" message={errors.city} />
          </div>
          <div>
            <label htmlFor="career-state" className="mb-1 block text-sm font-medium text-white">State/Province <span className="text-accent">*</span></label>
            <input id="career-state" type="text" value={form.state} onChange={(e) => set('state', e.target.value)} className={`form-field ${errors.state ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.state} aria-describedby={errors.state ? 'career-state-err' : undefined} autoComplete="address-level1" />
            <FieldError id="career-state-err" message={errors.state} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="career-country" className="mb-1 block text-sm font-medium text-white">Country <span className="text-accent">*</span></label>
            <input id="career-country" type="text" value={form.country} onChange={(e) => set('country', e.target.value)} className={`form-field ${errors.country ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.country} aria-describedby={errors.country ? 'career-country-err' : undefined} autoComplete="country-name" />
            <FieldError id="career-country-err" message={errors.country} />
          </div>
          <div>
            <label htmlFor="career-linkedin" className="mb-1 block text-sm font-medium text-white">LinkedIn URL <span className="text-muted text-xs">(optional)</span></label>
            <input id="career-linkedin" type="url" value={form.linkedin} onChange={(e) => set('linkedin', e.target.value)} className="form-field" placeholder="https://linkedin.com/in/..." autoComplete="url" />
          </div>
          <div>
            <label htmlFor="career-portfolio" className="mb-1 block text-sm font-medium text-white">Portfolio URL <span className="text-muted text-xs">(optional)</span></label>
            <input id="career-portfolio" type="url" value={form.portfolio} onChange={(e) => set('portfolio', e.target.value)} className="form-field" placeholder="https://yourportfolio.com" autoComplete="url" />
          </div>
        </div>
      </fieldset>

      {/* Position */}
      <fieldset className="space-y-4 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Position Details</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="career-position" className="mb-1 block text-sm font-medium text-white">Position <span className="text-accent">*</span></label>
            <select id="career-position" value={form.position} onChange={(e) => set('position', e.target.value)} className={`form-field ${errors.position ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.position} aria-describedby={errors.position ? 'career-position-err' : undefined}>
              <option value="" disabled>Select a position…</option>
              {CAREER_POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <FieldError id="career-position-err" message={errors.position} />
          </div>
          <div>
            <label htmlFor="career-employmentType" className="mb-1 block text-sm font-medium text-white">Employment Type <span className="text-accent">*</span></label>
            <select id="career-employmentType" value={form.employmentType} onChange={(e) => set('employmentType', e.target.value)} className={`form-field ${errors.employmentType ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.employmentType} aria-describedby={errors.employmentType ? 'career-employmentType-err' : undefined}>
              {EMPLOYMENT_TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>)}
            </select>
            <FieldError id="career-employmentType-err" message={errors.employmentType} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="career-availability" className="mb-1 block text-sm font-medium text-white">Availability <span className="text-accent">*</span></label>
            <select id="career-availability" value={form.availability} onChange={(e) => set('availability', e.target.value)} className={`form-field ${errors.availability ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.availability} aria-describedby={errors.availability ? 'career-availability-err' : undefined}>
              {AVAILABILITY_OPTIONS.map((o) => <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>)}
            </select>
            <FieldError id="career-availability-err" message={errors.availability} />
          </div>
          <div>
            <label htmlFor="career-compensation" className="mb-1 block text-sm font-medium text-white">Compensation Expectations <span className="text-muted text-xs">(optional)</span></label>
            <input id="career-compensation" type="text" value={form.compensation} onChange={(e) => set('compensation', e.target.value)} className="form-field" placeholder="e.g. $80k–$100k / year" />
          </div>
          <div>
            <label htmlFor="career-workAuth" className="mb-1 block text-sm font-medium text-white">US Work Authorization <span className="text-accent">*</span></label>
            <select id="career-workAuth" value={form.workAuth} onChange={(e) => set('workAuth', e.target.value)} className={`form-field ${errors.workAuth ? 'error' : ''}`} aria-required="true" aria-invalid={!!errors.workAuth} aria-describedby={errors.workAuth ? 'career-workAuth-err' : undefined}>
              {WORK_AUTH_OPTIONS.map((o) => <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>)}
            </select>
            <FieldError id="career-workAuth-err" message={errors.workAuth} />
          </div>
        </div>
      </fieldset>

      {/* Questions */}
      <fieldset className="space-y-5 rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Application Questions</legend>
        {[
          { key: 'q1', label: 'Why do you want to join BlvckMeta? What excites you about this mission?' },
          { key: 'q2', label: 'Describe your most relevant experience for this role. Include specific projects or achievements.' },
          { key: 'q3', label: 'What is your greatest professional achievement, and what did you learn from it?' },
          { key: 'q4', label: 'What is your vision for your first 90 days in this role at BlvckMeta?' },
        ].map(({ key, label }) => (
          <div key={key}>
            <label htmlFor={`career-${key}`} className="mb-1 block text-sm font-medium text-white">
              {label} <span className="text-accent">*</span>
            </label>
            <textarea
              id={`career-${key}`}
              rows={5}
              value={form[key as keyof CareerFormState] as string}
              onChange={(e) => set(key as keyof CareerFormState, e.target.value)}
              className={`form-field resize-y ${errors[key] ? 'error' : ''}`}
              aria-required="true"
              aria-invalid={!!errors[key]}
              aria-describedby={`career-${key}-counter${errors[key] ? ` career-${key}-err` : ''}`}
            />
            <div className="mt-1 flex items-center justify-between">
              <span id={`career-${key}-counter`}>
                <CharCounter value={form[key as keyof CareerFormState] as string} min={100} max={800} />
              </span>
            </div>
            <FieldError id={`career-${key}-err`} message={errors[key]} />
          </div>
        ))}
      </fieldset>

      {/* Resume */}
      <fieldset className="rounded-xl border border-divider p-6">
        <legend className="px-2 text-sm font-bold uppercase tracking-widest text-accent">Resume</legend>
        <div className="mt-4">
          <label htmlFor="career-resumeFile" className="mb-1 block text-sm font-medium text-white">
            Upload Resume <span className="text-accent">*</span>
          </label>
          <p id="career-resumeFile-hint" className="mb-2 text-xs text-muted">PDF or DOCX only. Maximum 5 MB.</p>
          <input
            id="career-resumeFile"
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleResumeChange}
            className="block w-full cursor-pointer rounded-lg border border-divider bg-surface px-4 py-3 text-sm text-white/80 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-accent file:px-3 file:py-1 file:text-xs file:font-bold file:text-black hover:file:bg-highlight focus-ring"
            aria-required="true"
            aria-invalid={!!errors.resumeFile}
            aria-describedby={`career-resumeFile-hint${errors.resumeFile ? ' career-resumeFile-err' : ''}`}
          />
          {form.resumeFile && (
            <p className="mt-2 text-xs text-success" aria-live="polite">
              File selected: {form.resumeFile.name} ({(form.resumeFile.size / 1024).toFixed(1)} KB)
            </p>
          )}
          <FieldError id="career-resumeFile-err" message={errors.resumeFile} />
        </div>
      </fieldset>

      {/* Signature */}
      <SignaturePad
        ref={sigRef}
        id="career-signature"
        label="Applicant Signature"
        required={true}
        error={errors.signature}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring w-full rounded-xl bg-accent py-4 font-bold text-black transition-colors hover:bg-highlight disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting Application…' : 'Submit Career Application'}
      </button>
    </form>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

const HIRING_OPEN = process.env.NEXT_PUBLIC_HIRING_OPEN === 'true';

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<'internship' | 'career'>('internship');

  if (!HIRING_OPEN) {
    return <NotHiringPage />;
  }

  return (
    <>
      {/* Header */}
      <section className="border-b border-divider bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-black tracking-tight">
            JOIN THE <span className="text-accent">TEAM</span>
          </h1>
          <p className="text-lg text-white/60">
            Build the future of community social networking.
          </p>
        </div>
      </section>

      {/* Age notice box */}
      <div className="border-b border-divider bg-black px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5">
            <p className="text-sm text-white/80">
              <strong className="text-accent">Note:</strong> BlvckMeta app accounts
              require users to be of legal age per the laws of their state, province, or
              country. The internship program below is a separate, supervised student
              learning initiative open to ages 14–17. Internship applicants do not need
              a BlvckMeta account to apply.
            </p>
          </div>
        </div>
      </div>

      {/* Tab toggle */}
      <div className="bg-black px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div
            className="inline-flex rounded-xl border border-divider bg-surface p-1"
            role="tablist"
            aria-label="Application type"
          >
            <button
              role="tab"
              aria-selected={activeTab === 'internship'}
              aria-controls="panel-internship"
              id="tab-internship"
              onClick={() => setActiveTab('internship')}
              className={`focus-ring rounded-lg px-6 py-3 text-sm font-bold transition-colors ${
                activeTab === 'internship'
                  ? 'bg-accent text-black'
                  : 'text-muted hover:text-white'
              }`}
            >
              INTERNSHIPS — Ages 14–17
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'career'}
              aria-controls="panel-career"
              id="tab-career"
              onClick={() => setActiveTab('career')}
              className={`focus-ring rounded-lg px-6 py-3 text-sm font-bold transition-colors ${
                activeTab === 'career'
                  ? 'bg-accent text-black'
                  : 'text-muted hover:text-white'
              }`}
            >
              CAREERS — Ages 18+
            </button>
          </div>
        </div>
      </div>

      {/* Internship tab */}
      <div
        id="panel-internship"
        role="tabpanel"
        aria-labelledby="tab-internship"
        hidden={activeTab !== 'internship'}
        className="bg-black px-4 pb-20 pt-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-xl border border-divider bg-surface p-6">
            <p className="text-white/80">
              A supervised educational internship for high school students passionate
              about tech, social media, design, and community building. This is a student
              learning opportunity — not employment. Parental or guardian consent is
              required to apply.
            </p>
          </div>

          {/* Position cards */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: 'Junior Content Creator', desc: 'Create engaging social content, short-form videos, and community posts that reflect the BlvckMeta brand voice.' },
              { title: 'Junior UI/UX Design', desc: 'Assist in designing user interface components, conducting usability research, and building a design portfolio.' },
              { title: 'Junior Community Ambassador', desc: 'Help grow and manage community engagement, assist with user support, and represent BlvckMeta online.' },
              { title: 'Junior Marketing & Social', desc: 'Support marketing campaigns, social media strategy, and content scheduling across platforms.' },
            ].map((pos) => (
              <div key={pos.title} className="rounded-xl border border-divider bg-surface-2 p-5">
                <h3 className="mb-2 font-bold text-accent">{pos.title}</h3>
                <p className="text-sm text-white/60">{pos.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-black text-white">
            Apply for an <span className="text-accent">Internship</span>
          </h2>
          <InternshipForm />
        </div>
      </div>

      {/* Career tab */}
      <div
        id="panel-career"
        role="tabpanel"
        aria-labelledby="tab-career"
        hidden={activeTab !== 'career'}
        className="bg-black px-4 pb-20 pt-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-xl border border-divider bg-surface p-6">
            <p className="text-white/80">
              Full-time, part-time, and contract roles at BlvckMeta. We&rsquo;re a
              remote-first culture building the next generation of community technology.
              All positions require applicants to be 18 years of age or older.
            </p>
          </div>

          {/* Open positions */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: 'Senior Full-Stack Engineer', type: 'Full-Time · Remote', desc: 'Lead development of core platform features using Next.js, Node.js, and Firebase. 5+ years experience required.' },
              { title: 'iOS Engineer (Swift/SwiftUI)', type: 'Full-Time · Remote', desc: 'Build and maintain the BlvckMeta iOS app. Deep knowledge of SwiftUI, UIKit, and Firebase iOS SDK required.' },
              { title: 'Android Engineer (Kotlin)', type: 'Full-Time · Remote', desc: 'Build and maintain the Android app. Kotlin, Jetpack Compose, and Firebase Android SDK experience required.' },
              { title: 'Backend Engineer (Node.js)', type: 'Full-Time · Remote', desc: 'Design and build scalable backend services, Firebase Cloud Functions, and data pipelines.' },
              { title: 'Product Designer (UX/UI)', type: 'Full-Time · Remote', desc: 'Lead product design from concept to launch. Strong portfolio demonstrating mobile-first, accessible design.' },
              { title: 'Community Manager', type: 'Full-Time · Remote', desc: 'Grow and nurture the BlvckMeta community. Develop engagement programs and represent the platform voice.' },
              { title: 'Head of Marketing & Growth', type: 'Full-Time · Remote', desc: 'Own user acquisition, brand partnerships, and growth strategy. Marketing leadership experience required.' },
              { title: 'Trust & Safety Specialist', type: 'Full-Time · Remote', desc: 'Review content, handle escalations, develop policies, and protect the community from harm.' },
            ].map((pos) => (
              <div key={pos.title} className="rounded-xl border border-divider bg-surface-2 p-5">
                <h3 className="mb-1 font-bold text-accent">{pos.title}</h3>
                <p className="mb-2 text-xs font-medium text-muted">{pos.type}</p>
                <p className="text-sm text-white/60">{pos.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-black text-white">
            Apply for a <span className="text-accent">Career</span>
          </h2>
          <CareerForm />
        </div>
      </div>
    </>
  );
}
