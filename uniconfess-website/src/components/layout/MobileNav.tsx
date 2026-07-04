"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/constants";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open && (
        <div className="animate-slide-down absolute left-0 right-0 top-full border-b border-border bg-background px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
            >
              Download
            </Link>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-foreground px-3 py-2.5 text-center text-sm font-semibold text-background"
            >
              Get on Google Play
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
