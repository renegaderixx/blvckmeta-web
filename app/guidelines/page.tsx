import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Community Guidelines',
  description:
    'BlvckMeta Community Guidelines — the rules and standards for respectful, safe participation on the platform.',
};

const tocItems = [
  { id: 'respect', label: 'Respect & Dignity' },
  { id: 'authenticity', label: 'Authenticity' },
  { id: 'safety', label: 'Safety & Wellbeing' },
  { id: 'content', label: 'Content Standards' },
  { id: 'minors', label: 'Protecting Minors' },
  { id: 'commerce', label: 'Commerce & Advertising' },
  { id: 'privacy', label: 'Privacy of Others' },
  { id: 'age', label: 'Age Requirements' },
  { id: 'reporting', label: 'Reporting & Enforcement' },
  { id: 'teaira', label: 'TEAIRA AI Usage' },
  { id: 'appeals', label: 'Appeals' },
];

export default function GuidelinesPage() {
  return (
    <LegalLayout
      title="Community Guidelines"
      lastUpdated="May 1, 2026"
      tocItems={tocItems}
    >
      {/* Intro */}
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
        <p className="font-medium text-white">
          BlvckMeta is built for community. These guidelines exist to protect the people
          on our platform — their dignity, safety, and ability to connect authentically.
          When you join BlvckMeta, you agree to uphold these standards. Violations may
          result in content removal, account suspension, or permanent bans.
        </p>
      </div>

      <LegalSection id="respect" number={1} title="Respect & Dignity">
        <p>
          BlvckMeta is a space rooted in Black culture and community values. Every person
          on this platform deserves to be treated with dignity and respect, regardless of
          their background, beliefs, appearance, or opinions.
        </p>
        <p>
          <strong className="text-white">You must not:</strong>
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Post or share content that demeans, degrades, or dehumanizes any person or
            group based on race, ethnicity, religion, gender, sexual orientation, gender
            identity, disability, national origin, age, or other characteristics.
          </li>
          <li>
            Engage in targeted harassment, sustained bullying campaigns, or coordinated
            efforts to harm another user&rsquo;s experience.
          </li>
          <li>
            Use slurs or hate speech against any individual or community.
          </li>
          <li>
            Threaten, intimidate, or incite violence against any person or group.
          </li>
        </ul>
        <p>
          Criticism of public figures, commentary on social issues, and discussions of
          systemic injustice are permitted. The line we draw is between expression and
          targeted harm.
        </p>
      </LegalSection>

      <LegalSection id="authenticity" number={2} title="Authenticity">
        <p>
          BlvckMeta is built on real community. Fake accounts, deceptive identities, and
          manufactured engagement undermine everything we&rsquo;re building.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">No impersonation:</strong> You may not create
            an account pretending to be another person, celebrity, public figure, business,
            or organization without clear indication that the account is a parody or fan
            account.
          </li>
          <li>
            <strong className="text-white">No coordinated inauthentic behavior:</strong>{' '}
            You may not operate fake accounts, coordinate artificial engagement (fake
            likes, fake followers), or create networks of accounts to manipulate platform
            metrics or public perception.
          </li>
          <li>
            <strong className="text-white">No spam:</strong> Repetitive, unsolicited
            messages, comments, or content designed to flood the platform or promote
            products without value to the community is prohibited.
          </li>
          <li>
            <strong className="text-white">No misinformation:</strong> Deliberately
            spreading false information that could harm individuals, communities, or
            public health is not permitted.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="safety" number={3} title="Safety & Wellbeing">
        <p>
          The physical and emotional safety of our community members is paramount.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">No incitement to violence:</strong> Content
            that promotes, glorifies, or facilitates real-world violence against
            individuals or groups is strictly prohibited and will be reported to
            appropriate authorities.
          </li>
          <li>
            <strong className="text-white">No self-harm content:</strong> Content that
            promotes, glorifies, or provides instructions for suicide or self-harm is
            prohibited. We follow safe messaging guidelines. If you or someone you know
            needs help, please contact the 988 Suicide & Crisis Lifeline by calling or
            texting 988.
          </li>
          <li>
            <strong className="text-white">No dangerous challenges:</strong> Content that
            encourages dangerous activities that could result in physical harm is not
            permitted.
          </li>
          <li>
            <strong className="text-white">No doxxing:</strong> Publishing private
            personal information (home address, phone number, workplace, etc.) of others
            without their consent is strictly prohibited.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="content" number={4} title="Content Standards">
        <p>
          BlvckMeta is a platform for community connection, not explicit or illegal content.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">No sexually explicit content:</strong> Graphic
            sexual content, nudity, or pornography is prohibited on BlvckMeta.
          </li>
          <li>
            <strong className="text-white">No illegal content:</strong> Content that
            depicts, promotes, or facilitates illegal activities is prohibited. This
            includes content that facilitates drug trafficking, human trafficking, or
            other serious crimes.
          </li>
          <li>
            <strong className="text-white">No graphic violence:</strong> Gratuitous
            depictions of gore, real-world violence, or injuries are not permitted.
            Newsworthy content documenting injustice may be permitted with appropriate
            context.
          </li>
          <li>
            <strong className="text-white">Intellectual property:</strong> Do not share
            content you don&rsquo;t have rights to. Repeat copyright infringers will have
            their accounts terminated.
          </li>
          <li>
            <strong className="text-white">Copyrighted music:</strong> Follow applicable
            licensing guidelines when posting video or audio content.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="minors" number={5} title="Protecting Minors">
        <p>
          The protection of children is a non-negotiable priority on BlvckMeta.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Zero tolerance for CSAM:</strong> Child Sexual
            Abuse Material (CSAM) or any content that sexualizes minors in any way is
            absolutely prohibited. All such content will be immediately removed,
            preserved as evidence, and reported to the National Center for Missing and
            Exploited Children (NCMEC) and law enforcement. Accounts will be permanently
            banned.
          </li>
          <li>
            <strong className="text-white">No grooming:</strong> Any behavior designed
            to build inappropriate relationships with minors, solicit photos from minors,
            or facilitate contact with minors for harmful purposes is strictly prohibited.
          </li>
          <li>
            <strong className="text-white">No content endangering children:</strong>{' '}
            Content that endangers minors&rsquo; safety, wellbeing, or privacy is prohibited.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="commerce" number={6} title="Commerce & Advertising">
        <p>
          BlvckMeta supports local businesses and service providers as a core part of
          our community. To keep commerce honest and trustworthy:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Business listings and service provider profiles must accurately represent
            the goods and services offered.
          </li>
          <li>
            You may not make false, misleading, or deceptive claims about products or
            services.
          </li>
          <li>
            Scams, pyramid schemes, and fraudulent business practices are strictly
            prohibited and will result in account termination and potential legal referral.
          </li>
          <li>
            Paid promotions and sponsored content must be clearly disclosed as such,
            in compliance with FTC guidelines.
          </li>
          <li>
            Advertising content must comply with our Advertiser Terms found in our
            Terms of Service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="privacy" number={7} title="Privacy of Others">
        <p>
          Respect the privacy of other community members. You must not:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Share another person&rsquo;s private information (address, phone, email, financial
            information) without their consent.
          </li>
          <li>
            Record or share photos/videos of other people in private settings without
            their knowledge or consent.
          </li>
          <li>
            Expose or threaten to expose private images of any person without their
            consent (&ldquo;revenge porn&rdquo; or non-consensual intimate imagery).
          </li>
          <li>
            Stalk or track another user&rsquo;s physical location.
          </li>
        </ul>
        <p>
          Users have the right to control who can see their content and who can contact
          them. Circumventing privacy controls (e.g., screenshotting and redistributing
          private content without consent) violates community standards.
        </p>
      </LegalSection>

      <LegalSection id="age" number={8} title="Age Requirements">
        <p>
          All BlvckMeta app users must be of legal age as determined by the laws of
          their state, province, or country of residence. This is a firm requirement,
          not a guideline.
        </p>
        <p>
          If you are below the legal age of majority in your jurisdiction, you may not
          create or maintain a BlvckMeta account. Accounts found to belong to underage
          users will be terminated, and associated data will be deleted in accordance
          with our Privacy Policy.
        </p>
        <p>
          <strong className="text-white">About our Internship Program:</strong> Our
          Careers page lists an educational internship program open to students ages
          14–17. This is a supervised, parental-consent-required student initiative —
          completely separate from the BlvckMeta platform and its community. Internship
          participants do not receive app accounts. The age eligibility for the app
          remains the legal age of majority in your jurisdiction.
        </p>
        <p>
          If you suspect a user is under the legal age, please report the account
          immediately using the in-app reporting tool or by emailing{' '}
          <a href="mailto:privacy@blvckmeta.com" className="text-accent hover:underline">
            privacy@blvckmeta.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="reporting" number={9} title="Reporting & Enforcement">
        <p>
          BlvckMeta relies on our community to help keep the platform safe. If you see
          content or behavior that violates these guidelines, please report it using the
          in-app reporting tools available on every post, comment, and profile.
        </p>
        <p>
          Our trust and safety team reviews reports and takes action, which may include:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Removing violating content</li>
          <li>Issuing warnings to accounts</li>
          <li>Temporarily suspending accounts</li>
          <li>Permanently banning accounts</li>
          <li>Reporting content or accounts to law enforcement where appropriate</li>
        </ul>
        <p>
          We take all reports seriously, but cannot guarantee action on every report.
          False reporting — submitting reports to harass or silence users whose content
          does not violate guidelines — is itself a violation of these guidelines.
        </p>
        <p>
          For urgent safety issues, please contact us at{' '}
          <a href="mailto:support@blvckmeta.com" className="text-accent hover:underline">
            support@blvckmeta.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="teaira" number={10} title="TEAIRA AI Usage">
        <p>
          TEAIRA, our AI assistant, is designed to enhance your community experience.
          When using TEAIRA, you agree to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Not attempt to manipulate, jailbreak, or circumvent TEAIRA&rsquo;s safety systems.
          </li>
          <li>
            Not use TEAIRA to generate harmful, illegal, or policy-violating content.
          </li>
          <li>
            Not use TEAIRA to impersonate other individuals.
          </li>
          <li>
            Understand that TEAIRA&rsquo;s responses are for informational purposes only and
            do not constitute professional advice of any kind.
          </li>
        </ul>
        <p>
          Misuse of TEAIRA to generate content that violates these guidelines will
          result in enforcement action against your account.
        </p>
      </LegalSection>

      <LegalSection id="appeals" number={11} title="Appeals">
        <p>
          If your content has been removed or your account has been actioned and you
          believe it was in error, you have the right to appeal. To submit an appeal:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Use the in-app appeal option if available in the enforcement notice</li>
          <li>
            Email{' '}
            <a href="mailto:support@blvckmeta.com" className="text-accent hover:underline">
              support@blvckmeta.com
            </a>{' '}
            with the subject line &ldquo;Content Appeal&rdquo; or &ldquo;Account Appeal&rdquo;
          </li>
          <li>Include your username, the content in question, and the reason you believe the action was incorrect</li>
        </ul>
        <p>
          We will review appeals within 10 business days. Our decision on appeals is
          final. Appeals submitted in bad faith or repetitively may result in further
          enforcement action.
        </p>
        <p>
          Note: Accounts banned for CSAM, CSAM-adjacent content, or serious threats of
          real-world violence are not eligible for appeal.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
