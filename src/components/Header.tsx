"use client";

import { useEffect, useState } from "react";
import { contacts, nav } from "@/lib/data";
import { LogoMark } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  // While the overlay menu is open: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-5 py-[18px]">
        <a href="#top" aria-label="8 Dance Studio — на главную" className="flex items-center gap-3.5">
          <LogoMark />
          <span className="hidden font-display text-sm font-light uppercase tracking-[0.38em] sm:inline">
            8 Dance Studio
          </span>
        </a>

        <nav aria-label="Основное меню" className="hidden gap-8 text-[13px] uppercase tracking-[0.08em] lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-soft transition-colors hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href={contacts.phoneHref} className="hidden text-sm tracking-[0.04em] md:inline">
            {contacts.phone}
          </a>
          <a
            href="#contacts"
            className="hidden min-h-11 items-center border border-paper px-[22px] text-xs uppercase tracking-[0.16em] transition-colors hover:bg-paper hover:text-ink sm:inline-flex"
          >
            Пробное занятие
          </a>
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Мобильное меню"
          className="container-x absolute inset-x-0 top-full flex h-[calc(100dvh-100%)] flex-col overflow-y-auto border-t border-line bg-ink pb-8 lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-xl font-light uppercase tracking-[0.12em]"
            >
              {item.label}
            </a>
          ))}
          <a href={contacts.phoneHref} className="pt-6 text-lg">
            {contacts.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
