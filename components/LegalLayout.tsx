'use client';

import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  tocItems,
  children,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page header */}
      <header className="mb-10 border-b border-divider pb-8">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last Updated: {lastUpdated}</p>
      </header>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Sidebar TOC — sticky on desktop */}
        <aside
          className="hidden lg:block lg:w-64 lg:shrink-0"
          aria-label="Table of contents"
        >
          <div className="sticky top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Contents
            </p>
            <nav aria-label="Section navigation">
              <ul className="space-y-1" role="list">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`focus-ring flex items-start gap-2 rounded px-2 py-1.5 text-sm transition-colors hover:text-accent ${
                        activeId === item.id ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      <span className="mt-0.5 shrink-0 text-xs font-bold text-accent/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1" id="main-content">
          <div className="space-y-10 legal-prose">{children}</div>

          <div className="mt-12 border-t border-divider pt-6">
            <p className="text-sm text-muted">
              <strong className="text-white">Last Updated:</strong> {lastUpdated}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

interface LegalSectionProps {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ id, number, title, children }: LegalSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <div className="rounded-xl border border-divider bg-surface p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-black text-black"
            aria-hidden="true"
          >
            {number}
          </span>
          <h2 id={`${id}-heading`} className="text-lg font-bold text-white sm:text-xl">
            {title}
          </h2>
        </div>
        <div className="space-y-3 text-white/80">{children}</div>
      </div>
    </section>
  );
}
