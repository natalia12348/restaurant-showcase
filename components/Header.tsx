"use client";

import { useState } from "react";
import { restaurant } from "@/lib/data";

const links = [
  { href: "#about", label: "O nas" },
  { href: "#menu", label: "Menu" },
  { href: "#reservation", label: "Rezerwacja" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-2xl tracking-[0.25em] text-gold">
          {restaurant.name.toUpperCase()}
        </a>

        <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex" aria-label="Główna">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-sm uppercase tracking-widest text-gold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Zamknij" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobilna">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm uppercase tracking-widest text-muted hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
