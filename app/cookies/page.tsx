import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'BlvckMeta Cookie Policy — how we use cookies and similar tracking technologies on our website.',
};

const tocItems = [
  { id: 'what', label: 'What Are Cookies' },
  { id: 'types', label: 'Types of Cookies We Use' },
  { id: 'third-party', label: 'Third-Party Cookies' },
  { id: 'local-storage', label: 'Local Storage & Session Storage' },
  { id: 'analytics', label: 'Analytics Technologies' },
  { id: 'advertising', label: 'Advertising & Measurement' },
  { id: 'control', label: 'Your Cookie Choices' },
  { id: 'browser', label: 'Browser Settings' },
  { id: 'do-not-track', label: 'Do Not Track' },
  { id: 'updates', label: 'Updates to This Policy' },
  { id: 'contact', label: 'Contact' },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="May 1, 2026"
      tocItems={tocItems}
    >
      <LegalSection id="what" number={1} title="What Are Cookies">
        <p>
          Cookies are small text files that are stored on your device (computer, tablet,
          or smartphone) when you visit a website. They help websites recognize your
          device on return visits, remember your preferences, and provide a more
          personalized experience.
        </p>
        <p>
          Cookies are widely used by website operators to make their sites work more
          efficiently, provide useful features, and collect reporting information. When
          we say &ldquo;cookies&rdquo; in this policy, we are referring to cookies and other similar
          tracking technologies, including pixels, web beacons, and local storage.
        </p>
        <p>
          Cookies do not typically contain personally identifiable information, but
          personal information that we store about you may be linked to the information
          stored in and obtained from cookies.
        </p>
      </LegalSection>

      <LegalSection id="types" number={2} title="Types of Cookies We Use">
        <h3>Strictly Necessary Cookies</h3>
        <p>
          These cookies are essential for the BlvckMeta website to function and cannot
          be switched off in our systems. They are usually only set in response to actions
          you make, such as setting your privacy preferences, logging in, or filling in
          forms. Without these cookies, the site cannot function properly.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Session management cookies (maintain your logged-in state)</li>
          <li>Security cookies (prevent cross-site request forgery)</li>
          <li>Load balancing cookies (ensure consistent performance)</li>
        </ul>

        <h3>Performance & Analytics Cookies</h3>
        <p>
          These cookies allow us to count visits and traffic sources so we can measure
          and improve the performance of our website. They help us know which pages are
          most and least popular and see how visitors move around the site. All information
          collected by these cookies is aggregated and therefore anonymous.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Page view tracking</li>
          <li>Bounce rate and session duration</li>
          <li>Traffic source analysis</li>
          <li>Error and crash reporting</li>
        </ul>

        <h3>Functional Cookies</h3>
        <p>
          These cookies enable the website to provide enhanced functionality and
          personalization. They may be set by us or by third-party providers whose
          services we have added to our pages.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Language preferences</li>
          <li>Accessibility settings</li>
          <li>Previously entered form data (draft content)</li>
          <li>UI preferences (dark/light mode)</li>
        </ul>

        <h3>Targeting & Advertising Cookies</h3>
        <p>
          These cookies may be set through our website by our advertising partners.
          They may be used to build a profile of your interests and show you relevant
          advertisements on other sites. They do not store directly personal information
          but are based on uniquely identifying your browser and internet device.
        </p>
        <p>
          You can opt out of targeting cookies at any time using the controls described
          in the &ldquo;Your Cookie Choices&rdquo; section below.
        </p>
      </LegalSection>

      <LegalSection id="third-party" number={3} title="Third-Party Cookies">
        <p>
          In addition to our own cookies, we use cookies from trusted third-party service
          providers to help deliver our website and services. These third parties may
          include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Google Analytics:</strong> We use Google
            Analytics to understand how our website is used. Google Analytics uses cookies
            to collect usage information. For more information, visit{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google&rsquo;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Firebase (Google):</strong> Our backend
            infrastructure includes Firebase, which sets functional cookies related to
            authentication and session management.
          </li>
          <li>
            <strong className="text-white">Formspree:</strong> Our contact and application
            forms are powered by Formspree, which may use cookies for fraud prevention
            and form functionality.
          </li>
        </ul>
        <p>
          We do not control third-party cookies and recommend reviewing the privacy
          policies of these providers for more information about their cookie practices.
        </p>
      </LegalSection>

      <LegalSection id="local-storage" number={4} title="Local Storage & Session Storage">
        <p>
          In addition to cookies, we and our third-party partners may use local storage
          and session storage technologies. These are similar to cookies in that they
          allow data to be stored on your browser, but they have some differences:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Local Storage:</strong> Stores data
            persistently in your browser until explicitly cleared. Used for saving
            preferences, cached data, and offline functionality.
          </li>
          <li>
            <strong className="text-white">Session Storage:</strong> Stores data only
            for the duration of your browser session. Cleared when you close the tab
            or browser window.
          </li>
          <li>
            <strong className="text-white">IndexedDB:</strong> Used by some web
            applications for larger data storage needs, such as offline content caching.
          </li>
        </ul>
        <p>
          You can clear local storage and session storage data through your browser&rsquo;s
          developer tools or by clearing your browser data.
        </p>
      </LegalSection>

      <LegalSection id="analytics" number={5} title="Analytics Technologies">
        <p>
          We use web analytics technologies to understand how visitors interact with the
          BlvckMeta website. These technologies may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Page Tags / Pixels:</strong> Tiny, invisible
            images embedded in web pages that track when a page is loaded.
          </li>
          <li>
            <strong className="text-white">JavaScript Beacons:</strong> Code snippets
            that send data to analytics servers when triggered by user interactions.
          </li>
          <li>
            <strong className="text-white">Fingerprinting:</strong> We do not use device
            fingerprinting for tracking purposes.
          </li>
        </ul>
        <p>
          Analytics data we collect includes: pages visited, time on page, referring
          URLs, device type, browser type, operating system, and approximate geographic
          location (country or city level — not precise location).
        </p>
        <p>
          We use this data solely to improve our website and services. Analytics data
          is aggregated and does not identify you personally.
        </p>
      </LegalSection>

      <LegalSection id="advertising" number={6} title="Advertising & Measurement">
        <p>
          We may use advertising measurement technologies to understand the effectiveness
          of our marketing campaigns. These may include tracking pixels from advertising
          platforms to measure conversions (such as app downloads) resulting from our ads.
        </p>
        <p>
          <strong className="text-white">We do not sell your personal data for advertising.</strong>{' '}
          Any advertising-related data collection is used solely to measure the
          performance of BlvckMeta&rsquo;s own marketing campaigns.
        </p>
        <p>
          You can opt out of advertising measurement by declining advertising cookies or
          using your device&rsquo;s built-in privacy controls (e.g., Limit Ad Tracking on iOS
          or opt-out settings on Android).
        </p>
      </LegalSection>

      <LegalSection id="control" number={7} title="Your Cookie Choices">
        <p>
          You have several options for controlling how cookies are used when you visit
          BlvckMeta:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Browser Settings:</strong> You can configure
            your browser to refuse all cookies, accept only certain cookies, or alert you
            when cookies are being sent. See the &ldquo;Browser Settings&rdquo; section below for
            instructions.
          </li>
          <li>
            <strong className="text-white">Google Analytics Opt-Out:</strong> You can
            opt out of Google Analytics by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Interest-Based Advertising:</strong> You can
            opt out of interest-based advertising through the{' '}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Network Advertising Initiative
            </a>{' '}
            or the{' '}
            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Digital Advertising Alliance
            </a>
            .
          </li>
        </ul>
        <p>
          Please note that disabling certain cookies may affect the functionality of
          the BlvckMeta website. Strictly necessary cookies cannot be disabled as they
          are required for the site to function.
        </p>
      </LegalSection>

      <LegalSection id="browser" number={8} title="Browser Settings">
        <p>
          Most web browsers allow you to control cookies through your browser settings.
          Here are links to cookie management instructions for popular browsers:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          For mobile browsers, refer to your device&rsquo;s documentation for instructions
          on managing cookies and privacy settings.
        </p>
      </LegalSection>

      <LegalSection id="do-not-track" number={9} title="Do Not Track">
        <p>
          Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) feature that signals websites
          not to track your browsing activity. Currently, there is no universally agreed
          standard for how websites should respond to DNT signals.
        </p>
        <p>
          BlvckMeta currently does not respond to DNT signals. However, we provide
          alternative opt-out mechanisms described in this policy. We will continue to
          monitor developments around DNT standards and update our practices accordingly.
        </p>
      </LegalSection>

      <LegalSection id="updates" number={10} title="Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our
          practices or for other operational, legal, or regulatory reasons. The &ldquo;Last
          Updated&rdquo; date at the top of this page indicates when this policy was most
          recently revised.
        </p>
        <p>
          We encourage you to review this policy periodically to stay informed about
          our use of cookies and related technologies.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={11} title="Contact">
        <p>
          If you have questions about our use of cookies or this Cookie Policy, please
          contact us:
        </p>
        <ul className="list-none space-y-2 pl-2">
          <li>
            <strong className="text-white">Privacy Email:</strong>{' '}
            <a href="mailto:privacy@blvckmeta.com" className="text-accent hover:underline">
              privacy@blvckmeta.com
            </a>
          </li>
          <li>
            <strong className="text-white">General Support:</strong>{' '}
            <a href="mailto:support@blvckmeta.com" className="text-accent hover:underline">
              support@blvckmeta.com
            </a>
          </li>
        </ul>
        <p>
          You can also review our full{' '}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>{' '}
          for more information about how we handle your personal data.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
