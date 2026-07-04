import type { Metadata } from "next";
import { FOUNDER, PLAY_STORE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service — UniConfess Campus App",
  description:
    "UniConfess Terms of Service: student verification requirements, acceptable use, marketplace rules, and account policies by founder Yug Rathee.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 1, 2026</p>
      <p className="mt-6 text-muted leading-relaxed">
        These Terms of Service (&quot;Terms&quot;) govern your use of UniConfess, the
        campus-first social platform founded by {FOUNDER.name} and available on Google
        Play Store at{" "}
        <a href={PLAY_STORE_URL} className="text-primary hover:underline">
          com.yugrathee.uniconfess.app
        </a>
        . By using UniConfess, you agree to these Terms.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Eligibility</h2>
        <p className="text-muted leading-relaxed">
          UniConfess is exclusively for enrolled college and university students. You
          must verify your status using a valid institutional email address. Misrepresenting
          your student status is grounds for immediate account termination.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Account Responsibilities</h2>
        <p className="text-muted leading-relaxed">
          You are responsible for maintaining the security of your account credentials.
          You must not share your account with non-students or create multiple accounts
          to evade moderation actions. Notify us immediately at {FOUNDER.email} if you
          suspect unauthorized access.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Acceptable Use</h2>
        <p className="text-muted leading-relaxed">
          You agree not to post content that is illegal, harassing, threatening, sexually
          exploitative, discriminatory, or that violates others&apos; privacy. Anonymous
          posting does not exempt you from these rules. UniConfess reserves the right to
          remove content and suspend accounts that violate community standards.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Anonymous Posting</h2>
        <p className="text-muted leading-relaxed">
          Anonymous posts hide your identity from other users but remain subject to
          moderation and applicable laws. UniConfess may preserve records necessary for
          safety investigations while maintaining PII separation as described in our
          Privacy Policy.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Campus Marketplace</h2>
        <p className="text-muted leading-relaxed">
          Marketplace transactions occur directly between verified students. UniConfess
          facilitates connections but is not a party to transactions. Users are
          responsible for verifying items, agreeing on prices, and conducting safe
          in-person exchanges on campus. Report fraudulent listings through in-app
          reporting tools.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Clubs and Messaging</h2>
        <p className="text-muted leading-relaxed">
          Club creators and members must follow the same acceptable use policies. Real-time
          chat messages are encrypted in transit. Do not use UniConfess messaging for
          commercial spam, unsolicited promotion, or non-student recruitment.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">7. Intellectual Property</h2>
        <p className="text-muted leading-relaxed">
          UniConfess, its logo, and original content are owned by {FOUNDER.name}. You
          retain ownership of content you post but grant UniConfess a license to display
          and distribute it within the platform for service operation.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">8. Account Termination and Deletion</h2>
        <p className="text-muted leading-relaxed">
          You may delete your account at any time via in-app settings. UniConfess may
          suspend or terminate accounts that violate these Terms. Upon termination,
          your right to use the platform ceases immediately.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">9. Disclaimer of Warranties</h2>
        <p className="text-muted leading-relaxed">
          UniConfess is provided &quot;as is&quot; without warranties of any kind. We do
          not guarantee uninterrupted service, error-free operation, or specific
          marketplace transaction outcomes.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">10. Governing Law and Contact</h2>
        <p className="text-muted leading-relaxed">
          These Terms are governed by applicable laws in India. For questions, contact
          Founder {FOUNDER.name} at{" "}
          <a href={`mailto:${FOUNDER.email}`} className="text-primary hover:underline">
            {FOUNDER.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
