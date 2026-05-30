import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-surface" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-2 text-xl font-black tracking-widest text-accent">BLVCKMETA</p>
            <p className="text-sm text-muted">
              The neighborhood social network rooted in Black culture.
            </p>
            <p className="mt-3 text-xs text-muted">Developed by Ellington &ldquo;RIXX&rdquo; Bass Sr.</p>
          </div>

          {/* Contact emails */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </p>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href="mailto:support@blvckmeta.com"
                  className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent"
                >
                  support@blvckmeta.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:legal@blvckmeta.com"
                  className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent"
                >
                  legal@blvckmeta.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:privacy@blvckmeta.com"
                  className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent"
                >
                  privacy@blvckmeta.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social + Links */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">
              Follow Us
            </p>
            <ul className="mb-4 flex gap-4" role="list">
              <li>
                <a
                  href="https://instagram.com/blvckmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent"
                  aria-label="BlvckMeta on Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/blvckmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent"
                  aria-label="BlvckMeta on Twitter/X"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@blvckmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent"
                  aria-label="BlvckMeta on TikTok"
                >
                  TikTok
                </a>
              </li>
            </ul>

            <ul className="space-y-1" role="list">
              <li>
                <Link href="/guidelines" className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/about" className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="focus-ring rounded text-sm text-muted transition-colors hover:text-accent">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-divider pt-6">
          <p className="text-center text-xs text-muted">
            &copy; 2026 BlvckMeta by Rixx City Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
