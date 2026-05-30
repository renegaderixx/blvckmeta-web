'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Black (Background)', hex: '#000000', textClass: 'text-white', bgStyle: { background: '#000000' } },
  { name: 'Surface', hex: '#0D0D0D', textClass: 'text-white', bgStyle: { background: '#0D0D0D' } },
  { name: 'Surface 2', hex: '#111111', textClass: 'text-white', bgStyle: { background: '#111111' } },
  { name: 'Accent Orange', hex: '#FF8C00', textClass: 'text-black', bgStyle: { background: '#FF8C00' } },
  { name: 'Highlight Orange', hex: '#FFA733', textClass: 'text-black', bgStyle: { background: '#FFA733' } },
  { name: 'White (Text)', hex: '#FFFFFF', textClass: 'text-black', bgStyle: { background: '#FFFFFF' } },
  { name: 'Muted Gray', hex: '#888888', textClass: 'text-black', bgStyle: { background: '#888888' } },
  { name: 'Divider', hex: '#1A1A1A', textClass: 'text-white', bgStyle: { background: '#1A1A1A' } },
  { name: 'Error Red', hex: '#FF4444', textClass: 'text-white', bgStyle: { background: '#FF4444' } },
  { name: 'Success Green', hex: '#00C853', textClass: 'text-black', bgStyle: { background: '#00C853' } },
];

const keyStats = [
  { label: 'Platform', value: 'iOS & Android' },
  { label: 'Focus', value: 'Neighborhood-Scale Community' },
  { label: 'Culture', value: 'Rooted in Black Culture' },
  { label: 'AI Assistant', value: 'TEAIRA (Proprietary)' },
  { label: 'Launch Year', value: '2026' },
  { label: 'Founded By', value: "Ellington 'RIXX' Bass Sr." },
];

const features = [
  { name: 'Vibes', desc: 'Real-time neighborhood posts and moments' },
  { name: 'Hallway Map', desc: 'Interactive local business and service provider map' },
  { name: 'TEAIRA AI', desc: 'AI-powered neighborhood assistant' },
  { name: 'Direct Messaging', desc: 'Private and group community conversations' },
  { name: 'Service Providers', desc: 'Discover and hire local, community-vetted professionals' },
  { name: 'Verified Profiles', desc: 'Trusted verification for businesses and creators' },
  { name: 'Advertiser Platform', desc: 'Community-first advertising for local businesses' },
  { name: 'Neighborhood Feed', desc: 'Hyper-local content curated by proximity and community' },
];

const pressBoilerplates = [
  {
    id: 'short',
    label: 'Short Boilerplate (1 sentence)',
    text: 'BlvckMeta is a neighborhood social network rooted in Black culture, providing communities with tools for real-time connection, local commerce, and AI-powered neighborhood discovery through the iOS and Android app.',
  },
  {
    id: 'long',
    label: 'Long Boilerplate (paragraph)',
    text: "BlvckMeta is the neighborhood social network built for and rooted in Black culture. Developed by Ellington 'RIXX' Bass Sr. and Rixx City Studios, BlvckMeta gives communities a dedicated digital home — featuring Vibes (real-time neighborhood posts), the Hallway Map (local business and service provider discovery), TEAIRA AI (an intelligent neighborhood assistant), direct messaging, verified profiles, and an advertiser platform designed around community values. BlvckMeta is available on iOS and Android and is designed for adults meeting the legal age requirement in their jurisdiction. Learn more at blvckmeta.com.",
  },
];

const screenshotSlots = [
  'Home / Vibes Feed',
  'Hallway Map View',
  'TEAIRA AI Chat',
  'User Profile',
  'Service Provider Listing',
  'Messaging Interface',
];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="focus-ring flex items-center gap-2 rounded-lg border border-divider px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
      aria-label={`Copy ${label} to clipboard`}
    >
      {copied ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-success">Copied!</span>
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy Text
        </>
      )}
    </button>
  );
}

export default function MediaKitPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-divider bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Press & Media
              </p>
              <h1 className="text-4xl font-black tracking-tight">
                BLVCKMETA <span className="text-accent">MEDIA KIT</span>
              </h1>
              <p className="mt-3 text-white/60">
                Resources, brand assets, and press copy for journalists, partners, and
                media professionals.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="focus-ring shrink-0 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-black transition-colors hover:bg-highlight"
              aria-label="Download or print media kit"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Kit
            </button>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-black py-16" aria-labelledby="mk-about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-about-heading" className="mb-6 text-2xl font-black">
            ABOUT <span className="text-accent">BLVCKMETA</span>
          </h2>
          <div className="rounded-xl border border-divider bg-surface p-8">
            <p className="mb-4 leading-relaxed text-white/80">
              BlvckMeta is a neighborhood social network rooted in Black culture,
              providing communities with a dedicated digital home for real-time connection,
              local commerce, and AI-powered neighborhood discovery.
            </p>
            <p className="mb-4 leading-relaxed text-white/80">
              The platform features Vibes (hyper-local real-time posts), the Hallway Map
              (an interactive local business and service provider directory), TEAIRA AI
              (an intelligent community assistant), direct messaging, verified profiles,
              and a community-first advertising platform.
            </p>
            <p className="leading-relaxed text-white/80">
              BlvckMeta was founded by Ellington &ldquo;RIXX&rdquo; Bass Sr. and developed by Rixx
              City Studios. The platform is available on iOS and Android and is designed
              for adults meeting the legal age requirement in their jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-t border-divider bg-surface py-16" aria-labelledby="mk-stats-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-stats-heading" className="mb-8 text-2xl font-black">
            KEY <span className="text-accent">STATS</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {keyStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-divider bg-black p-5 text-center"
              >
                <p className="mb-1 text-sm font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-black py-16" aria-labelledby="mk-features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-features-heading" className="mb-8 text-2xl font-black">
            PLATFORM <span className="text-accent">FEATURES</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.name}
                className="rounded-xl border border-divider bg-surface p-5"
              >
                <h3 className="mb-2 font-bold text-accent">{f.name}</h3>
                <p className="text-sm text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="border-t border-divider bg-surface py-16" aria-labelledby="mk-brand-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-brand-heading" className="mb-10 text-2xl font-black">
            BRAND <span className="text-accent">ASSETS</span>
          </h2>

          {/* Color Palette */}
          <div className="mb-12">
            <h3 className="mb-5 text-base font-bold uppercase tracking-widest text-muted">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {brandColors.map((color) => (
                <div key={color.hex} className="overflow-hidden rounded-xl border border-divider">
                  <div
                    className="h-20 w-full"
                    style={color.bgStyle}
                    role="img"
                    aria-label={`${color.name} color swatch`}
                  />
                  <div className="bg-surface p-3">
                    <p className="text-xs font-bold text-white">{color.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-widest text-muted">
              Typography
            </h3>
            <div className="rounded-xl border border-divider bg-black p-8">
              <div className="mb-6">
                <p className="mb-1 text-xs text-muted">Primary / Display Font</p>
                <p className="text-6xl font-black tracking-tight text-white">
                  System UI
                </p>
                <p className="mt-2 text-sm text-muted">
                  Font family: system-ui, -apple-system, BlinkMacSystemFont, &ldquo;Segoe UI&rdquo;, sans-serif
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-xs text-muted">Display / Black</p>
                  <p className="text-3xl font-black text-white">Aa Bb Cc</p>
                  <p className="text-xs text-muted">font-weight: 900</p>
                </div>
                <div>
                  <p className="mb-2 text-xs text-muted">Heading / Bold</p>
                  <p className="text-2xl font-bold text-white">Aa Bb Cc</p>
                  <p className="text-xs text-muted">font-weight: 700</p>
                </div>
                <div>
                  <p className="mb-2 text-xs text-muted">Body / Regular</p>
                  <p className="text-xl font-normal text-white">Aa Bb Cc</p>
                  <p className="text-xs text-muted">font-weight: 400</p>
                </div>
              </div>
              <div className="mt-6 border-t border-divider pt-6">
                <p className="mb-2 text-xs text-muted">Wordmark Style</p>
                <p className="text-4xl font-black tracking-widest text-accent">BLVCKMETA</p>
                <p className="mt-2 text-xs text-muted">
                  All caps · Letter-spacing: widest · Color: #FF8C00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approved Press Copy */}
      <section className="bg-black py-16" aria-labelledby="mk-press-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-press-heading" className="mb-4 text-2xl font-black">
            APPROVED <span className="text-accent">PRESS COPY</span>
          </h2>
          <p className="mb-8 text-sm text-muted">
            Use these approved boilerplate descriptions in press releases, articles, and
            media coverage. Please do not substantially alter approved copy.
          </p>
          <div className="space-y-6">
            {pressBoilerplates.map((bp) => (
              <div key={bp.id} className="rounded-xl border border-divider bg-surface p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="font-bold text-white">{bp.label}</h3>
                  <CopyButton text={bp.text} label={bp.label} />
                </div>
                <blockquote className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-white/80">
                  {bp.text}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section
        className="border-t border-divider bg-surface py-16"
        aria-labelledby="mk-screenshots-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-screenshots-heading" className="mb-4 text-2xl font-black">
            APP <span className="text-accent">SCREENSHOTS</span>
          </h2>
          <p className="mb-8 text-sm text-muted">
            Contact our press team to receive high-resolution screenshots and app store
            assets.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {screenshotSlots.map((slot) => (
              <div
                key={slot}
                className="flex aspect-[9/16] flex-col items-center justify-center rounded-xl border border-dashed border-divider bg-black p-4 text-center"
                role="img"
                aria-label={`Screenshot placeholder: ${slot}`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-2 text-muted"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-xs text-muted">{slot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-black py-16" aria-labelledby="mk-contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mk-contact-heading" className="mb-8 text-2xl font-black">
            PRESS <span className="text-accent">CONTACT</span>
          </h2>
          <div className="max-w-xl rounded-xl border border-accent/20 bg-surface p-8">
            <p className="mb-6 text-white/70">
              For press inquiries, interview requests, and media partnerships, reach out
              to our communications team. We typically respond within 1–2 business days.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Media Inquiries</span>
                <a
                  href="mailto:press@blvckmeta.com"
                  className="focus-ring rounded text-sm text-accent hover:underline"
                >
                  press@blvckmeta.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Legal / Usage</span>
                <a
                  href="mailto:legal@blvckmeta.com"
                  className="focus-ring rounded text-sm text-accent hover:underline"
                >
                  legal@blvckmeta.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Founded By</span>
                <span className="text-sm text-white/80">Ellington &ldquo;RIXX&rdquo; Bass Sr.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Company</span>
                <span className="text-sm text-white/80">Rixx City Studios</span>
              </div>
            </div>

            <div className="mt-6 border-t border-divider pt-6">
              <p className="text-xs text-muted">
                <strong className="text-white">Usage guidelines:</strong> BlvckMeta name
                and logo may be used in editorial coverage with attribution. Commercial
                or promotional use requires written permission from BlvckMeta. Contact{' '}
                <a href="mailto:legal@blvckmeta.com" className="text-accent hover:underline">
                  legal@blvckmeta.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="border-t border-divider bg-surface py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-black text-white">
            READY TO DOWNLOAD THE <span className="text-accent">FULL KIT?</span>
          </h2>
          <p className="mb-6 text-white/60">
            Print this page or contact our press team for a complete digital press kit
            including high-res logos, assets, and brand guidelines.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={handlePrint}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold text-black transition-colors hover:bg-highlight"
              aria-label="Print or save this media kit as PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Print / Save as PDF
            </button>
            <a
              href="mailto:press@blvckmeta.com"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition-colors hover:border-accent hover:bg-accent/10"
            >
              Contact Press Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
