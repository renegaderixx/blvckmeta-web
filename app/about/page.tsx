import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BlvckMeta',
  description:
    'Learn about BlvckMeta — the neighborhood social network rooted in Black culture, built by Rixx City Studios.',
};

const values = [
  {
    title: 'Community First',
    description:
      'Every decision we make starts with a question: does this serve our community? We build for the people on the block, not algorithms or advertisers.',
  },
  {
    title: 'Cultural Authenticity',
    description:
      'BlvckMeta is built by and for Black communities. The culture isn\'t a theme — it\'s the foundation. From design language to feature priorities, authenticity is non-negotiable.',
  },
  {
    title: 'Trust & Safety',
    description:
      'We invest heavily in trust and safety because real community requires it. We take a zero-tolerance approach to harassment, exploitation, and harm.',
  },
  {
    title: 'Economic Empowerment',
    description:
      'By connecting local businesses and service providers with their community, BlvckMeta helps keep money circulating within the neighborhood.',
  },
  {
    title: 'Privacy by Design',
    description:
      'Your data is yours. We collect only what we need, never sell your personal information, and give you meaningful control over your privacy.',
  },
  {
    title: 'Accessibility',
    description:
      'BlvckMeta is designed to be usable by everyone. We follow accessibility best practices and continuously work to remove barriers.',
  },
];

const timeline = [
  { year: '2023', event: 'BlvckMeta concept developed by Ellington "RIXX" Bass Sr.' },
  { year: '2024', event: 'Core development begins at Rixx City Studios. TEAIRA AI assistant conceived.' },
  { year: '2025', event: 'Beta testing with community partners. Hallway Map feature launched.' },
  { year: '2026', event: 'Public launch on iOS and Android. Advertiser program opens.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-24" aria-label="About hero">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-accent/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            About BlvckMeta
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-6xl">
            BUILT FOR THE{' '}
            <span className="text-accent">BLOCK</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            BlvckMeta is the neighborhood social network rooted in Black culture. We
            built the digital infrastructure that Black communities deserve — a space
            to connect, organize, discover, and thrive.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="border-t border-divider bg-surface py-20"
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 id="mission-heading" className="mb-6 text-3xl font-black tracking-tight">
                OUR <span className="text-accent">MISSION</span>
              </h2>
              <p className="mb-4 leading-relaxed text-white/70">
                Social media was supposed to connect us. Instead, most platforms optimize
                for engagement over community, profit over people, and virality over
                meaning. Black communities deserve better.
              </p>
              <p className="mb-4 leading-relaxed text-white/70">
                BlvckMeta was built from the ground up to serve neighborhood-scale
                community. Not your followers count. Not global trending topics. Your
                block. The people around you. The businesses that keep the neighborhood
                running.
              </p>
              <p className="mb-6 leading-relaxed text-white/70">
                Our mission is to provide Black communities with a purpose-built digital
                home — a platform where cultural authenticity, local commerce, community
                organizing, and real human connection can flourish together.
              </p>
              <p className="text-sm italic text-muted">
                BlvckMeta is designed for adults meeting the legal age requirement in
                their jurisdiction. We are committed to creating a safe and trustworthy
                environment for all of our community members.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted">
                Our Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">
                        {item.year}
                      </span>
                      <div className="mt-2 h-full w-px bg-divider" aria-hidden="true" />
                    </div>
                    <p className="pb-6 text-sm leading-relaxed text-white/70">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-black py-20" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2
              id="features-heading"
              className="mb-4 text-3xl font-black tracking-tight"
            >
              WHAT MAKES <span className="text-accent">BLVCKMETA</span> DIFFERENT
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-divider bg-surface p-6">
              <h3 className="mb-3 text-lg font-bold text-accent">Vibes</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Real-time posts, reactions, and moments from your neighborhood. Vibes
                puts your block on the map — what&rsquo;s happening, what&rsquo;s hot, and what
                people are talking about in your area.
              </p>
            </div>
            <div className="rounded-xl border border-divider bg-surface p-6">
              <h3 className="mb-3 text-lg font-bold text-accent">Hallway Map</h3>
              <p className="text-sm leading-relaxed text-white/70">
                An interactive map of your neighborhood showing verified businesses,
                service providers, community resources, and local events — all curated
                by and for the community.
              </p>
            </div>
            <div className="rounded-xl border border-divider bg-surface p-6">
              <h3 className="mb-3 text-lg font-bold text-accent">TEAIRA AI</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Your AI-powered neighborhood assistant. TEAIRA helps you navigate local
                resources, find what you need, and stay informed about your community.
                Responses are informational — not professional advice.
              </p>
            </div>
            <div className="rounded-xl border border-divider bg-surface p-6">
              <h3 className="mb-3 text-lg font-bold text-accent">Direct Messaging</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Private, secure conversations with other community members. DMs and
                group chats built for real community — not content performance.
              </p>
            </div>
            <div className="rounded-xl border border-divider bg-surface p-6">
              <h3 className="mb-3 text-lg font-bold text-accent">Service Providers</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Discover and hire trusted service providers from your own community.
                Barbers, mechanics, caterers, tutors — all verified and community-rated.
              </p>
            </div>
            <div className="rounded-xl border border-divider bg-surface p-6">
              <h3 className="mb-3 text-lg font-bold text-accent">Verified Profiles</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Blue-check verification for businesses, creators, and community leaders
                so you always know who you&rsquo;re connecting with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="border-t border-divider bg-surface py-20"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2
              id="values-heading"
              className="mb-4 text-3xl font-black tracking-tight"
            >
              OUR <span className="text-accent">VALUES</span>
            </h2>
          </div>
          <ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-xl border border-divider bg-black p-6"
              >
                <h3 className="mb-3 font-bold text-accent">{value.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Company */}
      <section className="bg-black py-20" aria-labelledby="company-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="company-heading"
            className="mb-6 text-3xl font-black tracking-tight"
          >
            RIXX CITY <span className="text-accent">STUDIOS</span>
          </h2>
          <p className="mb-4 leading-relaxed text-white/70">
            BlvckMeta is a product of Rixx City Studios, an independent technology
            company focused on building digital products and experiences for underserved
            communities.
          </p>
          <p className="mb-8 leading-relaxed text-white/70">
            Founded by Ellington &ldquo;RIXX&rdquo; Bass Sr., Rixx City Studios operates at the
            intersection of technology, culture, and community impact.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/careers"
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-black transition-colors hover:bg-highlight"
            >
              Join Our Team
            </Link>
            <Link
              href="/support"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-accent hover:bg-accent/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
