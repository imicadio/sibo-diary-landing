"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { prefersReducedMotion } from "./useInView";
import s from "./HeroPhones.module.css";

const screens = [
  { src: "/v2/plan.jpg", alt: "Planer: plan dnia z trzema posiłkami" },
  { src: "/v2/shopping.jpg", alt: "Lista zakupów z produktami do kupienia" },
  { src: "/v2/reports.jpg", alt: "Raporty: podsumowanie tygodnia i eksport PDF" },
  { src: "/v2/recipes.jpg", alt: "Lista przepisów low-FODMAP" },
  { src: "/v2/today.jpg", alt: "Dziennik: kalendarz tygodnia, kroki, sen i woda" },
];

const INTERVAL = 3000;

/**
 * Three-phone fan that rotates right → left every 3 s: the right phone slides
 * to the centre, the centre one to the left, and the next screen enters on the right.
 */
export function HeroPhones() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % screens.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const n = screens.length;

  return (
    <div className={s.stage}>
      {screens.map((sc, i) => {
        const rel = (i - active + n) % n;
        const pos = rel === 0 ? "center" : rel === 1 ? "right" : rel === n - 1 ? "left" : rel === 2 ? "next" : "gone";
        return (
          <div key={sc.src} className={`${s.phone} ${s[pos]}`} aria-hidden={pos !== "center"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(sc.src)} alt={pos === "center" ? sc.alt : ""} loading={i < 3 ? "eager" : "lazy"} />
          </div>
        );
      })}
    </div>
  );
}
