import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import PrivacyContactForm from '@/components/PrivacyContactForm';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the BlvckMeta Privacy Policy. We are committed to protecting your personal information.',
};

const tocItems = [
  { id: 'collect', label: 'Information We Collect' },
  { id: 'use', label: 'How We Use Your Information' },
  { id: 'firebase', label: 'Firebase / Google Data Processing' },
  { id: 'sharing', label: 'Sharing & Disclosure' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'age', label: 'Age & Account Eligibility' },
  { id: 'push', label: 'Push Notifications' },
  { id: 'cookies', label: 'Cookies & Local Storage' },
  { id: 'security', label: 'Security' },
  { id: 'ccpa', label: 'California Residents (CCPA)' },
  { id: 'gdpr', label: 'International Users (GDPR)' },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact' },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="February 18, 2026"
      tocItems={tocItems}
    >
      <LegalSection id="collect" number={1} title="Information We Collect">
        <p>
          When you use BlvckMeta, we collect information in several ways to provide,
          improve, and personalize the Service. The categories of information we collect
          include:
        </p>
        <h3>Information You Provide Directly</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Account registration details (name, email address, date of birth, phone number)</li>
          <li>Profile information (profile photo, bio, city, neighborhood)</li>
          <li>User-generated content (posts, messages, comments, photos, videos)</li>
          <li>Payment information (processed securely by Apple or Google; we do not store full card numbers)</li>
          <li>Communications you send to us (support requests, feedback)</li>
          <li>Application information submitted through our Careers page</li>
        </ul>
        <h3>Information Collected Automatically</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Device information (device type, operating system, unique device identifiers)</li>
          <li>Log data (IP address, access times, app features used, crash reports)</li>
          <li>Location data (approximate location derived from IP; precise location only with your explicit permission)</li>
          <li>Usage analytics (features accessed, time spent, interaction patterns)</li>
          <li>Push notification interaction data</li>
        </ul>
        <h3>Information from Third Parties</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Social login providers (if you sign in via Apple, Google, etc.)</li>
          <li>Analytics partners</li>
          <li>Advertising measurement partners</li>
        </ul>
      </LegalSection>

      <LegalSection id="use" number={2} title="How We Use Your Information">
        <p>
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Providing the Service:</strong> Creating and
            managing your account, enabling features, processing transactions, and
            delivering the core BlvckMeta experience.
          </li>
          <li>
            <strong className="text-white">Personalization:</strong> Tailoring content,
            recommendations, and experiences to your neighborhood and preferences.
          </li>
          <li>
            <strong className="text-white">Communication:</strong> Sending transactional
            messages (receipts, security alerts), service updates, and, with your consent,
            marketing communications.
          </li>
          <li>
            <strong className="text-white">Safety and Security:</strong> Detecting,
            investigating, and preventing fraud, abuse, and violations of our Terms of
            Service.
          </li>
          <li>
            <strong className="text-white">Analytics and Improvement:</strong> Understanding
            how users interact with the Service to improve features, fix bugs, and enhance
            performance.
          </li>
          <li>
            <strong className="text-white">Legal Compliance:</strong> Fulfilling legal
            obligations, responding to lawful requests, and enforcing our agreements.
          </li>
          <li>
            <strong className="text-white">Advertising:</strong> Displaying relevant ads
            within the Service. We do not sell your personal data to advertisers.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="firebase" number={3} title="Firebase / Google Data Processing">
        <p>
          BlvckMeta uses Google Firebase, a platform provided by Google LLC, to power
          core infrastructure including user authentication, real-time database, cloud
          storage, push notifications, and analytics. When you use BlvckMeta, certain
          data is processed by Google Firebase and subject to Google&rsquo;s privacy practices.
        </p>
        <p>
          Firebase services we use include:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Firebase Authentication — manages sign-in and account security</li>
          <li>Cloud Firestore — stores app data and user-generated content</li>
          <li>Firebase Cloud Storage — stores uploaded media files</li>
          <li>Firebase Cloud Messaging (FCM) — delivers push notifications</li>
          <li>Firebase Analytics — provides usage analytics and crash reporting</li>
          <li>Firebase Crashlytics — monitors app stability</li>
        </ul>
        <p>
          Google acts as a data processor on our behalf for Firebase services. Data
          processed through Firebase is governed by Google&rsquo;s Data Processing and
          Security Terms. For more information, visit{' '}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            firebase.google.com/support/privacy
          </a>
          .
        </p>
        <p>
          Data processed through Firebase may be stored on servers located in the
          United States and other countries where Google operates data centers.
        </p>
      </LegalSection>

      <LegalSection id="sharing" number={4} title="Sharing & Disclosure">
        <p>
          <strong className="text-white">We do not sell your personal data.</strong> We
          do not sell, rent, or trade your personal information to third parties for their
          own marketing purposes.
        </p>
        <p>We may share your information in the following limited circumstances:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Service Providers:</strong> With trusted
            vendors and service providers who process data on our behalf (e.g., cloud
            hosting, payment processors, analytics providers), subject to confidentiality
            obligations.
          </li>
          <li>
            <strong className="text-white">Legal Requirements:</strong> When required by
            law, court order, subpoena, or other legal process, or to protect the rights,
            property, or safety of BlvckMeta, our users, or the public.
          </li>
          <li>
            <strong className="text-white">Business Transfers:</strong> In connection
            with a merger, acquisition, reorganization, or sale of all or a portion of
            our assets, your information may be transferred. We will notify users of
            material changes to data handling in such circumstances.
          </li>
          <li>
            <strong className="text-white">With Your Consent:</strong> For any other
            purpose with your explicit consent.
          </li>
          <li>
            <strong className="text-white">Public Content:</strong> Content you post
            publicly (e.g., Vibes posts, public profile information) is visible to other
            users of the Service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" number={5} title="Data Retention">
        <p>
          We retain your personal information for as long as necessary to provide the
          Service, comply with our legal obligations, resolve disputes, enforce our
          agreements, and for other legitimate business purposes.
        </p>
        <p>
          Account information is retained for the duration of your account. When you
          delete your account, we will delete or anonymize your personal information
          within 90 days, except where we are required to retain it for legal compliance
          purposes (such as financial records, which may be retained for up to 7 years).
        </p>
        <p>
          User-generated content you have posted may remain visible after account
          deletion if it has been interacted with by others (e.g., replies to your
          comments). In these cases, your name and identifiable information will be
          removed and replaced with &ldquo;Deleted User.&rdquo;
        </p>
        <p>
          Analytics and aggregated data that cannot identify you personally may be
          retained indefinitely.
        </p>
      </LegalSection>

      <LegalSection id="rights" number={6} title="Your Rights">
        <p>
          Depending on your jurisdiction, you may have the following rights regarding
          your personal information:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Access:</strong> Request a copy of the
            personal information we hold about you.
          </li>
          <li>
            <strong className="text-white">Correction:</strong> Request that we correct
            inaccurate or incomplete information.
          </li>
          <li>
            <strong className="text-white">Deletion:</strong> Request that we delete your
            personal information, subject to certain exceptions (e.g., legal obligations).
          </li>
          <li>
            <strong className="text-white">Data Export/Portability:</strong> Request a
            machine-readable copy of your data that you can transfer to another service.
          </li>
          <li>
            <strong className="text-white">Opt-Out of Marketing:</strong> Unsubscribe
            from marketing communications at any time using the unsubscribe link in
            emails or through app notification settings.
          </li>
          <li>
            <strong className="text-white">Restriction of Processing:</strong> Request
            that we restrict processing of your data in certain circumstances.
          </li>
          <li>
            <strong className="text-white">Object to Processing:</strong> Object to
            processing based on legitimate interests.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:privacy@blvckmeta.com" className="text-accent hover:underline">
            privacy@blvckmeta.com
          </a>
          . We will respond to verifiable requests within 30 days. We may need to verify
          your identity before processing your request.
        </p>
      </LegalSection>

      <LegalSection id="age" number={7} title="Age & Account Eligibility">
        <p>
          Users must be of legal age as determined by the laws of their jurisdiction
          to create a BlvckMeta account. We do not knowingly collect personal information
          from individuals who have not met the legal age requirement in their
          jurisdiction.
        </p>
        <p>
          If we become aware that we have collected personal information from an underage
          user without appropriate parental consent, we will take steps to delete that
          information and terminate the associated account as quickly as possible.
        </p>
        <p>
          If you believe that an underage individual has created a BlvckMeta account,
          please contact us immediately at{' '}
          <a href="mailto:privacy@blvckmeta.com" className="text-accent hover:underline">
            privacy@blvckmeta.com
          </a>{' '}
          so we can investigate and take appropriate action.
        </p>
        <p>
          <strong className="text-white">
            Note on the 14–17 age range on our Careers page:
          </strong>{' '}
          Our Careers page describes a supervised student internship program open to
          individuals ages 14–17. This is an educational initiative entirely separate
          from BlvckMeta app accounts or platform membership. Internship applicants do
          not receive a BlvckMeta user account as part of the internship, and their
          application data is handled separately with appropriate protections for minors.
          All BlvckMeta app accounts require users to meet the legal age requirement in
          their jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="push" number={8} title="Push Notifications">
        <p>
          BlvckMeta may send push notifications to your device to provide updates,
          reminders, messages, and other information related to your use of the Service.
          You can control push notifications through your device settings or within the
          BlvckMeta app under Settings &gt; Notifications.
        </p>
        <p>
          If you opt out of push notifications, you may still receive in-app notifications
          and transactional communications (such as security alerts and account updates).
        </p>
      </LegalSection>

      <LegalSection id="cookies" number={9} title="Cookies & Local Storage">
        <p>
          Our website and web-based features use cookies and similar technologies
          (including local storage and session storage) to operate, improve, and
          personalize the Service. Cookies are small data files stored on your device.
        </p>
        <p>We use the following types of cookies:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-white">Essential Cookies:</strong> Required for the
            website to function. They cannot be disabled.
          </li>
          <li>
            <strong className="text-white">Analytics Cookies:</strong> Help us understand
            how visitors interact with our website.
          </li>
          <li>
            <strong className="text-white">Preference Cookies:</strong> Remember your
            settings and preferences.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Note that disabling
          certain cookies may affect the functionality of the website. For more
          information, see our{' '}
          <a href="/cookies" className="text-accent hover:underline">
            Cookie Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="security" number={10} title="Security">
        <p>
          We implement industry-standard technical, organizational, and physical security
          measures designed to protect your personal information from unauthorized access,
          disclosure, alteration, and destruction. These measures include encryption of
          data in transit (TLS) and at rest, access controls, and regular security
          assessments.
        </p>
        <p>
          However, no method of transmission over the internet or electronic storage is
          100% secure. While we strive to protect your information, we cannot guarantee
          absolute security. In the event of a data breach that affects your personal
          information, we will notify you as required by applicable law.
        </p>
        <p>
          You are responsible for maintaining the security of your account credentials.
          Use a strong, unique password and enable two-factor authentication if available.
        </p>
      </LegalSection>

      <LegalSection id="ccpa" number={11} title="California Residents (CCPA)">
        <p>
          If you are a California resident, the California Consumer Privacy Act (CCPA),
          as amended by the California Privacy Rights Act (CPRA), may provide you with
          additional rights.
        </p>
        <p>You have the right to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Know what personal information we collect and how it is used and shared</li>
          <li>Delete personal information we hold about you (with some exceptions)</li>
          <li>Opt out of the sale or sharing of your personal information (we do not sell personal data)</li>
          <li>Limit the use and disclosure of sensitive personal information</li>
          <li>Non-discrimination for exercising your privacy rights</li>
        </ul>
        <p>
          To exercise your California privacy rights, please contact us at{' '}
          <a href="mailto:privacy@blvckmeta.com" className="text-accent hover:underline">
            privacy@blvckmeta.com
          </a>
          . We will verify your identity and respond within 45 days.
        </p>
        <p>
          California residents may also designate an authorized agent to make requests
          on their behalf. We will require verification of the agent&rsquo;s authority before
          processing such requests.
        </p>
      </LegalSection>

      <LegalSection id="gdpr" number={12} title="International Users (GDPR)">
        <p>
          If you are located in the European Economic Area (EEA), United Kingdom, or
          Switzerland, the General Data Protection Regulation (GDPR) or applicable
          local data protection laws may apply to our processing of your personal
          information.
        </p>
        <p>
          We process your personal information on the following legal bases:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong className="text-white">Contract:</strong> To fulfill our agreement to provide the Service</li>
          <li><strong className="text-white">Legitimate Interests:</strong> For analytics, safety, and improving the Service</li>
          <li><strong className="text-white">Legal Obligation:</strong> To comply with applicable laws</li>
          <li><strong className="text-white">Consent:</strong> For marketing communications and optional data processing</li>
        </ul>
        <p>
          By using BlvckMeta, you understand that your personal information may be
          transferred to and processed in the United States, which may have different
          data protection laws than your country of residence. We take steps to ensure
          appropriate safeguards are in place for such transfers.
        </p>
        <p>
          EEA users have the right to lodge a complaint with their local data protection
          supervisory authority if they believe we have not handled their data in
          accordance with applicable law.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={13} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, technology, legal requirements, or other factors. We will notify
          you of material changes by posting the new policy on this page and updating the
          &ldquo;Last Updated&rdquo; date.
        </p>
        <p>
          For significant changes that materially affect your rights, we will provide
          additional notice — such as an in-app notification or email — at least 30 days
          before the changes take effect. Your continued use of the Service after changes
          take effect constitutes your acceptance of the updated policy.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically to stay informed
          about how we protect your information.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={14} title="Contact">
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or
          our data practices, please contact our Privacy team:
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
          <li>
            <strong className="text-white">Company:</strong> BlvckMeta by Rixx City Studios
          </li>
        </ul>
        <p>
          Or submit a privacy request directly using the form below. We respond within 30 days.
        </p>
        <PrivacyContactForm />
      </LegalSection>
    </LegalLayout>
  );
}
