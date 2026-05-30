# BlvckMeta Web

Official marketing and information website for BlvckMeta — the neighborhood social network rooted in Black culture.

Built with Next.js 14, TypeScript, and Tailwind CSS. Deploys as a static export to Vercel.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** Formspree
- **PDF Generation:** jsPDF + html2canvas
- **Signature Capture:** react-signature-canvas
- **Deployment:** Vercel

---

## Local Development

### 1. Prerequisites

- Node.js 18.17 or later
- npm 9+ (or yarn / pnpm)

### 2. Install dependencies

```bash
cd blvckmeta-web
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_HIRING_OPEN` | `true` to show full careers page, `false` for holding page |
| `NEXT_PUBLIC_FORMSPREE_SUPPORT` | Formspree form ID for support contact form |
| `NEXT_PUBLIC_FORMSPREE_CAREERS` | Formspree form ID for career/internship applications |
| `NEXT_PUBLIC_FORMSPREE_PRIVACY` | Formspree form ID for privacy requests |

To get Formspree IDs:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form for each endpoint
3. Copy the form ID from the endpoint URL (e.g. `https://formspree.io/f/YOUR_ID`)

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, features, and CTAs |
| `/about` | Company and mission page |
| `/terms` | Terms of Service (12 sections) |
| `/privacy` | Privacy Policy (14 sections) |
| `/guidelines` | Community Guidelines (11 sections) |
| `/cookies` | Cookie Policy (11 sections) |
| `/support` | FAQ accordion + contact form |
| `/careers` | Internship (14–17) + Career (18+) application forms with PDF generation |
| `/media-kit` | Press resources, brand assets, boilerplates |

---

## Production Build

```bash
npm run build
```

This generates a static export in the `/out` directory.

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Set environment variables in the Vercel dashboard under **Settings → Environment Variables**
5. Deploy

### Environment Variables on Vercel

Add these in Vercel dashboard → Project → Settings → Environment Variables:

- `NEXT_PUBLIC_HIRING_OPEN`
- `NEXT_PUBLIC_FORMSPREE_SUPPORT`
- `NEXT_PUBLIC_FORMSPREE_CAREERS`
- `NEXT_PUBLIC_FORMSPREE_PRIVACY`

---

## Project Structure

```
blvckmeta-web/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer)
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Landing page
│   ├── about/page.tsx
│   ├── terms/page.tsx
│   ├── privacy/page.tsx
│   ├── guidelines/page.tsx
│   ├── cookies/page.tsx
│   ├── support/page.tsx
│   ├── careers/page.tsx
│   └── media-kit/page.tsx
├── components/
│   ├── Nav.tsx             # Navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── LegalLayout.tsx     # Shared legal page wrapper + TOC
│   ├── SignaturePad.tsx     # Signature capture (draw + type fallback)
│   └── ApplicationPDF.tsx  # PDF generation utility
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── vercel.json
└── .env.example
```

---

## Accessibility

All forms follow WCAG 2.1 AA guidelines:
- Every field has a visible `<label htmlFor>` — no label-less inputs
- `aria-required`, `aria-invalid`, `aria-describedby` on all form fields
- Error messages use `role="alert"` or `aria-live="assertive"`
- Success messages use `aria-live="polite"`
- Skip-to-main-content link at top of every page
- Keyboard navigation throughout
- Color is never the sole indicator of state

---

## Brand

| Token | Value |
|---|---|
| Background | `#000000` |
| Surface | `#0D0D0D` |
| Accent Orange | `#FF8C00` |
| Highlight Orange | `#FFA733` |
| Text White | `#FFFFFF` |
| Muted Gray | `#888888` |
| Divider | `#1A1A1A` |
| Error | `#FF4444` |
| Success | `#00C853` |

---

## Contact

- **Support:** support@blvckmeta.com
- **Legal:** legal@blvckmeta.com
- **Privacy:** privacy@blvckmeta.com
- **Press:** press@blvckmeta.com

&copy; 2026 BlvckMeta by Rixx City Studios. All rights reserved.
Developed by Ellington "RIXX" Bass Sr.
