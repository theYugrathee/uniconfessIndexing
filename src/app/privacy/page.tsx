import type { Metadata } from "next";
import { FOUNDER } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy — UniConfess Campus App",
  description:
    "UniConfess Privacy Policy: data encryption in transit, student verification, PII protection, and account deletion. Official policy by Yug Rathee.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 1, 2026</p>
      <p className="mt-6 text-muted leading-relaxed">
        This Privacy Policy describes how UniConfess (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), founded by {FOUNDER.name}, collects, uses, and protects
        information when you use the UniConfess mobile application (package ID:
        com.yugrathee.uniconfess.app) and this official website.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
        <p className="text-muted leading-relaxed">
          We collect institutional email addresses for student verification, display
          names you choose, profile information you provide voluntarily, posts and
          messages you create, marketplace listings, and device information necessary
          for app functionality. Anonymous posts do not display your real identity to
          other users.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Student Verification</h2>
        <p className="text-muted leading-relaxed">
          UniConfess requires institutional email verification to maintain
          campus-exclusive communities. Verification credentials are stored securely
          and are never published on public profiles or feeds. This constraint ensures
          only enrolled college and university students access campus-specific features.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Data Encryption in Transit</h2>
        <p className="text-muted leading-relaxed">
          All data transmitted between the UniConfess app and our servers is encrypted
          using industry-standard TLS/HTTPS protocols. Private messages, authentication
          tokens, and sensitive account operations are protected during transmission.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. How We Use Your Information</h2>
        <p className="text-muted leading-relaxed">
          We use collected information to provide and improve UniConfess services,
          verify student status, moderate content for community safety, facilitate
          campus marketplace transactions, and communicate important service updates.
          We do not sell personal data to third-party advertisers.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Anonymity and PII Protection</h2>
        <p className="text-muted leading-relaxed">
          When you post anonymously, your personally identifiable information is not
          displayed to other users. Verification records and display identity are
          architecturally separated. Secret Vault content remains private to your account.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Account Deletion</h2>
        <p className="text-muted leading-relaxed">
          You may delete your UniConfess account at any time through in-app settings.
          Upon deletion request, we remove your profile, posts, marketplace listings,
          club memberships, and associated personal data within 30 days, except where
          retention is required by law. For immediate deletion requests, contact{" "}
          <a href={`mailto:${FOUNDER.email}`} className="text-primary hover:underline">
            {FOUNDER.email}
          </a>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">7. Content Moderation</h2>
        <p className="text-muted leading-relaxed">
          We employ automated content review, admin moderation tools, and community
          reporting to maintain safe campus environments. Moderators may access flagged
          content for review purposes following least-privilege principles.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">8. Third-Party Services</h2>
        <p className="text-muted leading-relaxed">
          UniConfess is distributed via Google Play Store, which operates under
          Google&apos;s privacy policies. We use essential infrastructure providers
          for hosting and analytics, bound by data processing agreements.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">9. Children&apos;s Privacy</h2>
        <p className="text-muted leading-relaxed">
          UniConfess is designed exclusively for college and university students aged
          17 and older with valid institutional credentials. We do not knowingly collect
          data from children under 13.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
        <p className="text-muted leading-relaxed">
          For privacy inquiries, contact {FOUNDER.name}, Founder & CEO of UniConfess,
          at{" "}
          <a href={`mailto:${FOUNDER.email}`} className="text-primary hover:underline">
            {FOUNDER.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
