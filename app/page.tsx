import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BlvckMeta — Your Block. Your People.',
  description:
    'BlvckMeta is the neighborhood social network rooted in Black culture. Connect with your block, discover local vibes, and build community.',
};

const features = [
  {
    icon: '🔥',
    title: 'Vibes',
    description:
      'Share what\'s happening in real-time on your block. Post moments, reactions, and energy that only your neighbors understand.',
  },
  {
    icon: '🗺️',
    title: 'Hallway Map',
    description:
      'Discover local businesses, service providers, and community spots pinned on an interactive map of your neighborhood.',
  },
  {
    icon: '🤖',
    title: 'TEAIRA AI',
    description:
      'Your neighborhood AI assistant. Get answers about local resources, community events, and everything happening on the block.',
  },
  {
    icon: '💬',
    title: 'Messaging',
    description:
      'Direct messages and group chats built for community conversations. Stay connected with your people, privately and securely.',
  },
  {
    icon: '🛠️',
    title: 'Service Providers',
    description:
      'Find and hire trusted service providers from your own community. Barbers, mechanics, caterers, and more — all vetted locally.',
  },
  {
    icon: '✅',
    title: 'Verified Profiles',
    description:
      'Blue-check verification for businesses, creators, and community leaders. Know exactly who you\'re connecting with.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40"
        aria-label="Hero section"
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent sm:text-sm">
            Now Available
          </p>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
            YOUR BLOCK.{' '}
            <span className="text-accent">YOUR PEOPLE.</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 sm:text-xl">
            BlvckMeta is the neighborhood social network rooted in Black culture. Connect
            with your block, discover local vibes, and build real community.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="focus-ring inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-black transition-colors hover:bg-highlight"
              aria-label="Download BlvckMeta on the App Store"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>

            <a
              href="#"
              className="focus-ring inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:bg-accent/10"
              aria-label="Get BlvckMeta on Google Play"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.18 23.76c.35.2.74.24 1.12.1l12.44-7.18-2.68-2.68-10.88 9.76zM.59 1.53C.22 1.91 0 2.5 0 3.28v17.44c0 .78.22 1.37.59 1.75l.09.09 9.77-9.77v-.23L.68 1.44l-.09.09zM20.27 10.5l-2.68-1.55-3.01 3.01 3.01 3.01 2.7-1.56c.77-.44.77-1.47-.02-1.91zM4.3.14L16.74 7.32l-2.68 2.68L3.18.24C3.56.1 3.95.14 4.3.14z" />
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section
        className="bg-surface py-20 sm:py-24"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2
              id="features-heading"
              className="mb-4 text-3xl font-black tracking-tight sm:text-4xl"
            >
              EVERYTHING YOUR{' '}
              <span className="text-accent">BLOCK NEEDS</span>
            </h2>
            <p className="mx-auto max-w-xl text-white/60">
              Built from the ground up for real community — not algorithms.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {features.map((feature) => (
              <li
                key={feature.title}
                className="card-hover rounded-2xl border border-divider bg-black p-6"
              >
                <span className="mb-4 block text-4xl" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="relative overflow-hidden bg-black py-24"
        aria-labelledby="cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="cta-heading"
            className="mb-6 text-4xl font-black tracking-tight sm:text-5xl"
          >
            JOIN THE BLOCK <span className="text-accent">TODAY</span>
          </h2>
          <p className="mb-10 text-lg text-white/60">
            Download BlvckMeta and find your people. The block is waiting.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="focus-ring inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-black transition-colors hover:bg-highlight"
              aria-label="Download BlvckMeta on the App Store"
            >
              Download on the App Store
            </a>
            <a
              href="#"
              className="focus-ring inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:bg-accent/10"
              aria-label="Get BlvckMeta on Google Play"
            >
              Get it on Google Play
            </a>
          </div>

          <p className="mt-8 text-xs text-muted">
            BlvckMeta is designed for adults meeting the legal age requirement in their
            jurisdiction.{' '}
            <Link href="/terms" className="text-accent hover:underline">
              Terms of Service
            </Link>{' '}
            &middot;{' '}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>

      {/* About teaser */}
      <section
        className="border-t border-divider bg-surface py-16"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="about-heading"
                className="mb-4 text-3xl font-black tracking-tight"
              >
                BUILT FOR THE <span className="text-accent">CULTURE</span>
              </h2>
              <p className="mb-4 leading-relaxed text-white/70">
                BlvckMeta was created to give Black communities a dedicated digital
                space — a place where the neighborhood comes alive online. From local
                business discovery to community organizing, we built the tools your block
                actually needs.
              </p>
              <p className="mb-6 leading-relaxed text-white/70">
                Founded by Ellington &ldquo;RIXX&rdquo; Bass Sr. and developed by Rixx City
                Studios, BlvckMeta is more than an app — it&rsquo;s infrastructure for
                community.
              </p>
              <Link
                href="/about"
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-accent px-6 py-3 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-black"
              >
                Learn More About Us
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: 'Neighborhood', label: 'Focused Network' },
                { stat: 'Real-Time', label: 'Block Updates' },
                { stat: 'Verified', label: 'Local Profiles' },
                { stat: 'AI-Powered', label: 'Community Assistant' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-divider bg-black p-6 text-center"
                >
                  <p className="text-xl font-black text-accent">{item.stat}</p>
                  <p className="mt-1 text-xs text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
