import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the BlvckMeta Terms of Service. These terms govern your use of the BlvckMeta app and website.',
};

const tocItems = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'accounts', label: 'User Accounts & Registration' },
  { id: 'conduct', label: 'Prohibited Conduct' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'teaira', label: 'TEAIRA AI Assistant' },
  { id: 'purchases', label: 'In-App Purchases' },
  { id: 'advertiser', label: 'Advertiser Terms' },
  { id: 'termination', label: 'Termination' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="February 18, 2026"
      tocItems={tocItems}
    >
      <LegalSection id="acceptance" number={1} title="Acceptance of Terms">
        <p>
          Welcome to BlvckMeta. By downloading, accessing, or using the BlvckMeta mobile
          application or website (collectively, the &ldquo;Service&rdquo;), you agree to be bound by
          these Terms of Service (&ldquo;Terms&rdquo;) and our Privacy Policy. These Terms constitute a
          legally binding agreement between you and BlvckMeta by Rixx City Studios
          (&ldquo;BlvckMeta,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p>
          If you do not agree to these Terms, you must not access or use the Service.
          Your continued use of the Service following any changes to these Terms
          constitutes your acceptance of the revised Terms. We encourage you to review
          these Terms periodically.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. We will notify users of
          material changes through the app or by email. Your continued use after notice
          constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" number={2} title="Eligibility">
        <p>
          You must be of legal age as defined by the laws of your state, province, or
          country of residence to create an account and use the BlvckMeta Service. By
          registering, you represent and warrant that you meet the minimum legal age
          requirement in your jurisdiction.
        </p>
        <p>
          BlvckMeta does not knowingly permit accounts for individuals below their local
          legal age. We reserve the right to verify your age at any time and to suspend
          or terminate accounts that do not comply with this requirement. If you become
          aware that an account belongs to an underage user, please contact us immediately
          at <a href="mailto:legal@blvckmeta.com" className="text-accent hover:underline">legal@blvckmeta.com</a>.
        </p>
        <p>
          <strong className="text-white">Note on the Internship Program:</strong> The
          14–17 internship program described on our Careers page is a separate, supervised
          student educational initiative — not an app account or platform membership.
          Internship participants do not receive a BlvckMeta user account through the
          internship program. All app accounts require users to meet the legal age
          requirement applicable in their jurisdiction.
        </p>
        <p>
          In addition to age requirements, you must: (a) have the legal capacity to enter
          into a binding contract in your jurisdiction; (b) not be prohibited from using
          the Service under any applicable laws; and (c) not have previously been suspended
          or removed from the Service.
        </p>
      </LegalSection>

      <LegalSection id="accounts" number={3} title="User Accounts & Registration">
        <p>
          To access most features of BlvckMeta, you must create an account. When
          registering, you agree to provide accurate, current, and complete information.
          You are responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>
        <p>
          You agree to immediately notify BlvckMeta of any unauthorized use of your
          account or any other security breach by contacting{' '}
          <a href="mailto:support@blvckmeta.com" className="text-accent hover:underline">
            support@blvckmeta.com
          </a>
          . BlvckMeta will not be liable for any losses arising from unauthorized use of
          your account.
        </p>
        <p>
          You may not share your account credentials with any third party. Each account
          is for individual use only. You may not create multiple accounts to circumvent
          suspensions, bans, or other enforcement actions.
        </p>
        <p>
          Account usernames must not impersonate any person or entity, mislead others
          about your identity or affiliation, or violate any third-party intellectual
          property rights. BlvckMeta reserves the right to reclaim or require you to
          change any username that violates these standards.
        </p>
      </LegalSection>

      <LegalSection id="conduct" number={4} title="Prohibited Conduct">
        <p>
          You agree not to use the Service to engage in any of the following activities:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-white/80">
          <li>
            Posting, uploading, or transmitting any content that is illegal, harmful,
            threatening, abusive, harassing, defamatory, obscene, or otherwise
            objectionable.
          </li>
          <li>
            Engaging in any form of discrimination, hate speech, or content that targets
            individuals or groups based on race, ethnicity, religion, gender, sexual
            orientation, disability, national origin, or other protected characteristics.
          </li>
          <li>
            Harassment, cyberbullying, stalking, or intimidating other users.
          </li>
          <li>
            Sharing, soliciting, or distributing sexual content involving minors
            (CSAM). Any such content will be immediately reported to the National Center
            for Missing and Exploited Children (NCMEC) and relevant law enforcement.
          </li>
          <li>
            Impersonating any person, business, or entity, or falsely representing your
            affiliation with any person or organization.
          </li>
          <li>
            Using automated bots, scrapers, or other automated means to access, collect,
            or process data from the Service without our prior written consent.
          </li>
          <li>
            Attempting to circumvent, disable, or interfere with the security features
            of the Service or any systems connected thereto.
          </li>
          <li>
            Spamming, phishing, or engaging in any other deceptive practice.
          </li>
          <li>
            Selling, trading, or otherwise transferring your account to another person.
          </li>
          <li>
            Violating any applicable local, state, national, or international laws or
            regulations.
          </li>
        </ul>
        <p>
          Violations of these standards may result in immediate suspension or permanent
          termination of your account, removal of content, and/or referral to law
          enforcement where appropriate.
        </p>
      </LegalSection>

      <LegalSection id="ip" number={5} title="Intellectual Property">
        <p>
          The Service and all content, features, and functionality within it — including
          but not limited to text, graphics, logos, icons, images, audio clips, video
          clips, data compilations, and software — are the exclusive property of
          BlvckMeta by Rixx City Studios and are protected by United States and
          international copyright, trademark, patent, trade secret, and other
          intellectual property laws.
        </p>
        <p>
          By posting, uploading, or sharing content on BlvckMeta (&ldquo;User Content&rdquo;), you
          grant BlvckMeta a non-exclusive, royalty-free, worldwide, sublicensable, and
          transferable license to use, reproduce, distribute, display, and create
          derivative works of your User Content solely for the purposes of operating,
          promoting, and improving the Service.
        </p>
        <p>
          You represent and warrant that you own all rights to your User Content or have
          obtained the necessary permissions to grant BlvckMeta the license described
          above, and that your User Content does not infringe any third-party
          intellectual property rights.
        </p>
        <p>
          BlvckMeta, the BlvckMeta logo, TEAIRA, Hallway Map, and Vibes are trademarks
          of Rixx City Studios. You may not use these marks without prior written
          permission.
        </p>
      </LegalSection>

      <LegalSection id="teaira" number={6} title="TEAIRA AI Assistant">
        <p>
          BlvckMeta includes TEAIRA, an artificial intelligence-powered assistant
          designed to help users navigate community resources, discover local information,
          and engage with the BlvckMeta platform.
        </p>
        <p>
          <strong className="text-white">Important Disclaimer:</strong> TEAIRA&rsquo;s
          responses are provided for informational and entertainment purposes only. They
          do not constitute professional, legal, medical, financial, psychological, or
          any other professional advice. You should not rely on TEAIRA for decisions that
          require professional expertise.
        </p>
        <p>
          BlvckMeta makes no representations or warranties regarding the accuracy,
          completeness, or reliability of information provided by TEAIRA. AI-generated
          responses may contain errors, outdated information, or inaccuracies. Always
          verify important information with qualified professionals.
        </p>
        <p>
          TEAIRA is not a substitute for human judgment, professional consultation, or
          emergency services. If you are experiencing an emergency, please contact
          appropriate emergency services immediately (e.g., 911 in the United States).
        </p>
        <p>
          You agree not to attempt to manipulate TEAIRA into generating harmful,
          illegal, or policy-violating content. Misuse of TEAIRA may result in account
          suspension.
        </p>
      </LegalSection>

      <LegalSection id="purchases" number={7} title="In-App Purchases">
        <p>
          BlvckMeta offers optional in-app purchases, including but not limited to
          premium subscriptions, virtual coins, credits, profile upgrades, and other
          digital goods and services (&ldquo;Purchases&rdquo;). All Purchases are made through Apple
          App Store (iOS) or Google Play Store (Android) payment systems.
        </p>
        <p>
          <strong className="text-white">All Purchases are final and non-refundable</strong>{' '}
          except as required by applicable law or as expressly stated in our refund policy.
          Digital goods and virtual currency have no monetary value outside of BlvckMeta
          and cannot be transferred, redeemed for cash, or exchanged.
        </p>
        <p>
          Subscription fees are billed in advance on a recurring basis (monthly or
          annual, as applicable) and automatically renew unless cancelled at least 24
          hours before the end of the current period. You can manage and cancel
          subscriptions through your device&rsquo;s App Store settings.
        </p>
        <p>
          BlvckMeta reserves the right to modify pricing at any time with reasonable
          advance notice. If you disagree with a price change, you must cancel your
          subscription before the change takes effect. Continued use of a subscription
          after a price change constitutes acceptance of the new price.
        </p>
        <p>
          For refund requests required by applicable law, please contact your device&rsquo;s
          app store (Apple or Google) directly, as they process all payment transactions.
        </p>
      </LegalSection>

      <LegalSection id="advertiser" number={8} title="Advertiser Terms">
        <p>
          Businesses and individuals may apply to advertise on BlvckMeta through our
          advertiser program. By participating as an advertiser, you agree to these
          Terms as well as any additional Advertiser Guidelines provided during the
          application and onboarding process.
        </p>
        <p>
          All advertising content is subject to review and approval by BlvckMeta.
          Advertisers must ensure their content complies with all applicable laws,
          regulations, and BlvckMeta community standards. Prohibited advertising content
          includes, but is not limited to: illegal products or services, misleading
          claims, content that discriminates, adult content, weapons, or any content that
          violates our Community Guidelines.
        </p>
        <p>
          Advertisers are responsible for ensuring their ads are truthful, do not infringe
          third-party rights, and comply with all applicable advertising standards and
          regulations including FTC guidelines regarding endorsements and testimonials.
        </p>
        <p>
          BlvckMeta reserves the right to reject, remove, or pause any advertisement at
          any time and for any reason. Refund eligibility for rejected ads will be
          determined on a case-by-case basis in accordance with our advertiser policies.
        </p>
      </LegalSection>

      <LegalSection id="termination" number={9} title="Termination">
        <p>
          BlvckMeta reserves the right to suspend, restrict, or terminate your account
          and access to the Service at any time, with or without notice, for any reason,
          including but not limited to violation of these Terms, illegal activity, or harm
          to other users or the platform.
        </p>
        <p>
          You may delete your account at any time through the app settings or by
          contacting{' '}
          <a href="mailto:support@blvckmeta.com" className="text-accent hover:underline">
            support@blvckmeta.com
          </a>
          . Upon account deletion, your profile and User Content will be removed from
          public view. Some data may be retained for legal compliance purposes as
          described in our Privacy Policy.
        </p>
        <p>
          Upon termination, you lose access to your account, including any virtual
          currency, credits, or digital goods associated with it. Termination does not
          relieve you of any obligations incurred prior to termination.
        </p>
        <p>
          All provisions of these Terms that by their nature should survive termination
          — including intellectual property rights, disclaimers, indemnification, and
          limitation of liability — shall survive termination.
        </p>
      </LegalSection>

      <LegalSection id="liability" number={10} title="Limitation of Liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BLVCKMETA AND ITS
          AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND SERVICE PROVIDERS
          SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
          REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED
          TO YOUR USE OF THE SERVICE.
        </p>
        <p>
          IN NO EVENT SHALL BLVCKMETA&rsquo;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
          OUT OF OR RELATED TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF: (A)
          THE TOTAL AMOUNT YOU PAID TO BLVCKMETA IN THE TWELVE (12) MONTHS PRECEDING
          THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100 USD).
        </p>
        <p>
          BLVCKMETA PROVIDES THE SERVICE ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT
          WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          limitation of liability for certain types of damages. In such jurisdictions,
          our liability is limited to the fullest extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" number={11} title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of
          the United States, without regard to conflict of law principles. Any dispute
          arising from these Terms or your use of the Service shall first be resolved
          through good-faith negotiation.
        </p>
        <p>
          If informal resolution is unsuccessful, any claim or dispute shall be resolved
          by binding arbitration under the rules of the American Arbitration Association
          (AAA), except that either party may seek injunctive or other equitable relief
          in any court of competent jurisdiction.
        </p>
        <p>
          You agree that any dispute resolution proceedings shall be conducted on an
          individual basis only. You waive any right to bring claims as a class action,
          collective action, or representative proceeding.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining
          provisions shall continue in full force and effect.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={12} title="Contact">
        <p>
          If you have any questions, concerns, or comments about these Terms of Service,
          please contact our legal team:
        </p>
        <ul className="list-none space-y-2 pl-2 text-white/80">
          <li>
            <strong className="text-white">Email:</strong>{' '}
            <a href="mailto:legal@blvckmeta.com" className="text-accent hover:underline">
              legal@blvckmeta.com
            </a>
          </li>
          <li>
            <strong className="text-white">Company:</strong> BlvckMeta by Rixx City Studios
          </li>
          <li>
            <strong className="text-white">Support:</strong>{' '}
            <a
              href="mailto:support@blvckmeta.com"
              className="text-accent hover:underline"
            >
              support@blvckmeta.com
            </a>
          </li>
        </ul>
        <p>
          We aim to respond to all legal inquiries within 5–10 business days.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
