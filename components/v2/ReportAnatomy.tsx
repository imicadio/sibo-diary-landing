"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { asset } from "@/lib/asset";
import { prefersReducedMotion, useInView } from "./useInView";
import s from "./ReportAnatomy.module.css";

/** Page aspect ratio of the exported A4 PDF (height / width). */
const PAGE_RATIO = 1979 / 1400;
const DURATION = 5500;

type Part = {
  title: string;
  text: string;
  page: 1 | 2;
  /** Region on the page as fractions: [left, top, right, bottom]. */
  box: [number, number, number, number];
};

const parts: Part[] = [
  {
    title: "Tydzień w liczbach",
    text: "Dni z wpisami, wypróżnienia, średnia w skali Bristol, zjedzone posiłki i wzięte leki.",
    page: 1,
    box: [0.05, 0.118, 0.95, 0.2],
  },
  {
    title: "Siatka dzień po dniu",
    text: "Posiłki, leki, wypróżnienia i objawy obok siebie. Im ciemniejsze pole, tym silniejszy objaw.",
    page: 1,
    box: [0.05, 0.2, 0.95, 0.465],
  },
  {
    title: "Średnia i maksimum",
    text: "Każdy objaw w swojej skali, z wynikiem dla każdego dnia, średnią i najgorszym dniem.",
    page: 1,
    box: [0.05, 0.47, 0.95, 0.63],
  },
  {
    title: "Skala Bristol",
    text: "Rozkład typów stolca z całego tygodnia: od zaparcia, przez normę, po biegunkę.",
    page: 1,
    box: [0.05, 0.638, 0.95, 0.855],
  },
];

/** The last row is a teaser: page 2 stays blurred, with a nudge to try the app. */
const TEASER = parts.length;

export function ReportAnatomy({ ctaHref }: { ctaHref: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const viewer = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const el = viewer.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || prefersReducedMotion()) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % (parts.length + 1)), DURATION);
    return () => window.clearTimeout(id);
  }, [active, inView, paused]);

  const teaser = active === TEASER;
  const part: Part = teaser
    ? { title: "I więcej w aplikacji", text: "", page: 2, box: [0, 0, 1, 0.5] }
    : parts[active];
  const [x0, y0, x1, y1] = part.box;
  const pageW = size.w;
  const pageH = size.w * PAGE_RATIO;
  const regionW = (x1 - x0) * pageW;
  const regionH = (y1 - y0) * pageH;
  const scale = size.w ? Math.min(size.w / regionW, size.h / regionH) * 0.9 : 1;
  const tx = size.w / 2 - ((x0 + x1) / 2) * pageW * scale;
  const ty = size.h / 2 - ((y0 + y1) / 2) * pageH * scale;

  return (
    <div
      ref={ref}
      className={`${s.anatomy} ${inView ? s.running : ""} ${paused ? s.paused : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ol className={s.list} role="tablist" aria-label="Części raportu PDF">
        {parts.map((p, i) => (
          <li key={p.title}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? s.on : ""}
              onClick={() => setActive(i)}
            >
              <span className={s.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={s.label}>
                <b>{p.title}</b>
                <small>{p.text}</small>
              </span>
              <span className={s.page}>str. {p.page}</span>
              {i === active && <span key={active} className={s.progress} style={{ animationDuration: `${DURATION}ms` }} />}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            role="tab"
            aria-selected={teaser}
            className={`${s.teaserRow} ${teaser ? s.on : ""}`}
            onClick={() => setActive(TEASER)}
          >
            <span className={s.num}>+</span>
            <span className={s.label}>
              <b>I więcej…</b>
              <small>Druga strona raportu czeka w aplikacji. Przekonaj się sam.</small>
            </span>
            {teaser && <span key={active} className={s.progress} style={{ animationDuration: `${DURATION}ms` }} />}
          </button>
        </li>
      </ol>

      <div className={s.viewerWrap}>
        <div className={s.toolbar} aria-hidden="true">
          <span className={s.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={s.file}>SiboDiary-raport.pdf</span>
          <span className={s.pageNo}>Strona {part.page} z 2</span>
        </div>
        <div ref={viewer} className={s.viewer} role="tabpanel" aria-label={part.title}>
          {[1, 2].map((n) => (
            <div
              key={n}
              className={`${s.sheet} ${part.page === n ? s.sheetOn : ""} ${teaser && n === 2 ? s.sheetBlur : ""}`}
              style={
                {
                  width: pageW || "100%",
                  transform: part.page === n ? `translate(${tx}px, ${ty}px) scale(${scale})` : undefined,
                  "--s": scale,
                } as CSSProperties
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(`/v2/report-page${n}.jpg`)} alt={`Strona ${n} przykładowego raportu PDF`} loading="lazy" />
              {part.page === n && !teaser && (
                <span
                  className={s.focus}
                  style={{
                    left: `${x0 * 100}%`,
                    top: `${y0 * 100}%`,
                    width: `${(x1 - x0) * 100}%`,
                    height: `${(y1 - y0) * 100}%`,
                  }}
                />
              )}
            </div>
          ))}
          <div className={`${s.teaser} ${teaser ? s.teaserOn : ""}`} aria-hidden={!teaser}>
            <span className={s.teaserIcon} aria-hidden="true">🔒</span>
            <p className={s.teaserTitle}>Kroki, sen, woda i dzień po dniu</p>
            <p className={s.teaserText}>Resztę raportu zobaczysz w aplikacji, na własnych danych.</p>
            <a href={ctaHref} className={s.teaserCta} tabIndex={teaser ? 0 : -1}>
              Przekonaj się sam <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
