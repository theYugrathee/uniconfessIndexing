import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  Users,
  ShoppingBag,
  MessagesSquare,
  Trophy,
  Lock,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const iconMap = {
  MessageSquare,
  Users,
  ShoppingBag,
  MessagesSquare,
  Trophy,
  Lock,
};

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Platform
          </p>
          <h2 className="font-serif mt-3 text-3xl text-foreground sm:text-4xl">
            Built around how students actually live
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Not another generic social feed. Every feature maps to real campus life —
            from late-night confessions to textbook deals.
          </p>
        </AnimateIn>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const featureImage = 
              feature.id === "posting" ? "/images/home-page-uniconfess.png" :
              feature.id === "clubs" ? "/images/clubs.png" :
              feature.id === "marketplace" ? "/images/Marketplace-uniconfess.png" :
              feature.id === "messaging" ? "/images/realtime-messages-uniconfess.png" :
              feature.id === "leaderboards" ? "/images/leaderboard-uniconfess.png" :
              feature.id === "vault" ? "/images/search-feature.png" : null;
            
            const altText = 
              feature.id === "posting" ? "UniConfess app anonymous posting interface for campus confessions" :
              feature.id === "clubs" ? "UniConfess app student clubs and real-time community chat interface" :
              feature.id === "marketplace" ? "UniConfess local peer-to-peer campus marketplace interface for buying and selling textbooks" :
              feature.id === "messaging" ? "UniConfess real-time messaging interface for student communication" :
              feature.id === "leaderboards" ? "UniConfess campus leaderboard showing top student contributors" :
              feature.id === "vault" ? "UniConfess secret vault interface for private drafts and saved content" : "";
            
            const titleText = 
              feature.id === "posting" ? "UniConfess Anonymous Posting" :
              feature.id === "clubs" ? "UniConfess University Student Clubs" :
              feature.id === "marketplace" ? "UniConfess Student Campus Marketplace" :
              feature.id === "messaging" ? "UniConfess Real-time Messaging" :
              feature.id === "leaderboards" ? "UniConfess Campus Leaderboard" :
              feature.id === "vault" ? "UniConfess Secret Vault" : "";
            
            return (
              <AnimateIn key={feature.id} delay={index * 60}>
                <article className="group grid gap-4 py-8 sm:grid-cols-12 sm:items-start sm:gap-8">
                  <div className="flex items-center gap-4 sm:col-span-4">
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <h3 className="text-base font-semibold text-foreground sm:hidden">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-8">
                    <h3 className="hidden text-base font-semibold text-foreground sm:block">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted sm:mt-2">
                      {feature.description}
                    </p>
                    {featureImage && (
                      <div className="mt-4">
                        <Image
                          src={featureImage}
                          alt={altText}
                          title={titleText}
                          width={180}
                          height={360}
                          loading="lazy"
                          className="rounded-xl border border-border shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn className="mt-10">
          <Link
            href="/features"
            className="inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Full feature breakdown →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
