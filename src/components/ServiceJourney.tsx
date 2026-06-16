"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { services } from "@/content/services";

export function ServiceJourney() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const shouldReduceMotion = useReducedMotion();
  const active = services.find((service) => service.slug === activeSlug) ?? services[0];

  return (
    <div className="service-journey">
      <div className="service-list" role="list" aria-label="Daftar layanan Sector One">
        {services.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            className={service.slug === activeSlug ? "service-row active" : "service-row"}
            onClick={() => setActiveSlug(service.slug)}
            onMouseEnter={() => setActiveSlug(service.slug)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{service.name}</strong>
            <small>{service.price}</small>
          </button>
        ))}
      </div>

      <motion.aside
        className="service-active-panel"
        key={active.slug}
        initial={shouldReduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 14% 0)" }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Layanan aktif</p>
        <h3>{active.name}</h3>
        <p>{active.summary}</p>
        <dl>
          <div>
            <dt>Harga</dt>
            <dd>{active.price}</dd>
          </div>
          <div>
            <dt>Estimasi</dt>
            <dd>{active.estimate}</dd>
          </div>
          <div>
            <dt>Revisi</dt>
            <dd>{active.revisions}</dd>
          </div>
        </dl>
        <Link href={`/layanan/${active.slug}`}>Lihat detail layanan</Link>
      </motion.aside>
    </div>
  );
}
