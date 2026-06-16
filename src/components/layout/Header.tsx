"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { mainNav } from "@/content/site";
import { getWhatsAppUrl } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="Sector One beranda">
        <Image src="/media/brand/logosectorone.svg" width={40} height={45} alt="" priority />
        <span>Sector One</span>
      </Link>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-cta" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span>Menu</span>
          <i aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-menu-top">
              <span>Sector One</span>
              <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)}>
                Tutup
              </button>
            </div>
            <nav aria-label="Navigasi mobile">
              {mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: index * 0.04 }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a className="mobile-menu-cta" href={getWhatsAppUrl()}>
              Konsultasikan Website
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
