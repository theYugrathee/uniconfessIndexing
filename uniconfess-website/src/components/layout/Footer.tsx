import Link from "next/link";
import { APP_NAME, FOUNDER, PLAY_STORE_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
                U
              </div>
              <span className="text-[15px] font-semibold">{APP_NAME}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Campus social network for verified students. Built by{" "}
              {FOUNDER.name} in India — not affiliated with uniconfess.com.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-foreground">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/download" className="hover:text-foreground transition-colors">Download</Link></li>
              <li><Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-foreground">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold text-foreground">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
              <li>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {APP_NAME} · {FOUNDER.name}
          </p>
          <p className="text-xs text-muted font-mono">
            com.yugrathee.uniconfess.app
          </p>
        </div>
      </div>
    </footer>
  );
}
