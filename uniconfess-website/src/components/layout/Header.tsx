import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { APP_NAME, PLAY_STORE_URL } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background transition-transform group-hover:scale-95">
            U
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {APP_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-md bg-foreground px-3.5 py-2 text-[13px] font-semibold text-background transition hover:opacity-90 sm:inline-flex"
          >
            Download
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
