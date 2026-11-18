"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/Logo";
import s from "./SiteNav.module.css";

const defaultLinks = [
  { href: "#funkcje", label: "Funkcje" },
  { href: "#zegarek", label: "Kroki i sen" },
  { href: "#jedzenie", label: "Jedzenie" },
  { href: "#raporty", label: "Raporty" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav({
  downloadHref,
  links = defaultLinks,
}: {
  downloadHref: string;
  links?: { href: string; label: string }[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${s.nav} ${scrolled || open ? s.scrolled : ""} ${open ? s.open : ""}`}>
      <div className={s.bar}>
        <Link href="/" className={s.brand} onClick={close} aria-label="Sibo Diary — strona główna">
          <LogoMark size={32} />
          <span>
            <b>Sibo</b> Diary
          </span>
        </Link>

        <nav className={s.links} aria-label="Główna nawigacja">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={s.actions}>
          <a href={downloadHref} className={s.cta} onClick={close}>
            Pobierz aplikację
          </a>
          <button
            type="button"
            className={s.burger}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={s.menu} hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href={downloadHref} className={s.menuCta} onClick={close}>
          Pobierz aplikację
        </a>
      </div>
    </header>
  );
}
