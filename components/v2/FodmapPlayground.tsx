"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./useInView";
import s from "./FodmapPlayground.module.css";

/** FODMAP groups with the app's standard per-meal limits (g). */
const GROUPS = [
  { key: "fructans", label: "Fruktany", limit: 0.3 },
  { key: "gos", label: "GOS", limit: 0.2 },
  { key: "lactose", label: "Laktoza", limit: 1.0 },
  { key: "sorbitol", label: "Sorbitol", limit: 0.2 },
  { key: "mannitol", label: "Mannitol", limit: 0.2 },
] as const;

type Per100 = Partial<Record<(typeof GROUPS)[number]["key"], number>>;
type Item = { name: string; grams: number; per100: Per100 };

/** Illustrative values per 100 g — the app reads real ones from its catalogue. */
const PRODUCT: Item = { name: "Awokado", grams: 40, per100: { sorbitol: 0.42, fructans: 0.04 } };

const MEAL: Item[] = [
  { name: "Chleb orkiszowy na zakwasie", grams: 60, per100: { fructans: 0.3 } },
  { name: "Awokado", grams: 30, per100: { sorbitol: 0.42, fructans: 0.04 } },
  { name: "Jajko", grams: 60, per100: {} },
  { name: "Ser feta", grams: 30, per100: { lactose: 0.4 } },
];

const SIZE = 300;
const C = SIZE / 2;
const R = 112;

function totals(items: Item[]) {
  return GROUPS.map((g) => items.reduce((sum, it) => sum + ((it.per100[g.key] ?? 0) * it.grams) / 100, 0));
}

/** Square-root scale like the app: limit sits on the middle ring, edge = 4× limit. */
function radius(value: number, limit: number) {
  const ratio = Number.isFinite(value) ? Math.max(0, value / limit) : 0;
  return R * Math.sqrt(Math.min(ratio, 4) / 4);
}

function point(i: number, r: number) {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / GROUPS.length;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
}

const fmt = (v: number) => (v === 0 ? "0" : v < 0.01 ? "<0,01" : v.toFixed(2).replace(".", ","));

/** Tweens an array of numbers toward `target`. */
function useTween(target: number[]) {
  const [shown, setShown] = useState(target);
  const from = useRef(target);
  const key = target.join("|");

  useEffect(() => {
    const to = key.split("|").map(Number);
    if (prefersReducedMotion()) {
      const raf = requestAnimationFrame(() => setShown(to));
      from.current = to;
      return () => cancelAnimationFrame(raf);
    }
    const start = performance.now();
    const begin = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 380);
      const e = 1 - Math.pow(1 - t, 3);
      const next = to.map((v, i) => {
        const b = Number.isFinite(begin[i]) ? begin[i] : v;
        return b + (v - b) * e;
      });
      from.current = next;
      setShown(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [key]);

  return shown;
}

export function FodmapPlayground() {
  const [mode, setMode] = useState<"product" | "meal">("product");
  const [productGrams, setProductGrams] = useState(PRODUCT.grams);
  const [meal, setMeal] = useState(MEAL);

  const items = mode === "product" ? [{ ...PRODUCT, grams: productGrams }] : meal;
  const values = totals(items);
  const shown = useTween(values);
  const over = values.some((v, i) => v > GROUPS[i].limit + 1e-9);

  // Largest product portion that stays within every limit.
  const safeGrams = Math.floor(
    Math.min(
      ...GROUPS.map((g) => {
        const per = PRODUCT.per100[g.key] ?? 0;
        return per > 0 ? (g.limit / per) * 100 : Infinity;
      }),
    ),
  );

  const shape = shown.map((v, i) => point(i, Math.max(14, radius(v, GROUPS[i].limit))).join(",")).join(" ");
  const ring = (k: number) => GROUPS.map((_, i) => point(i, R * k).join(",")).join(" ");

  const setMealGrams = (idx: number, delta: number) =>
    setMeal((m) => m.map((it, i) => (i === idx ? { ...it, grams: Math.max(0, Math.min(250, it.grams + delta)) } : it)));

  return (
    <div className={s.card}>
      <div className={s.tabs} role="tablist" aria-label="Co sprawdzasz">
        <button type="button" role="tab" aria-selected={mode === "product"} onClick={() => setMode("product")}>
          Produkt
        </button>
        <button type="button" role="tab" aria-selected={mode === "meal"} onClick={() => setMode("meal")}>
          Cały posiłek
        </button>
      </div>

      <div className={s.body}>
        <figure className={s.chart}>
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={`FODMAP w porcji: ${GROUPS.map((g, i) => `${g.label} ${fmt(values[i])} z ${fmt(g.limit)} g`).join(", ")}. ${over ? "Ponad limit." : "W limicie."}`}>
            <polygon points={ring(1)} className={s.gridOuter} />
            <polygon points={ring(0.5)} className={s.gridLimit} />
            {GROUPS.map((g, i) => {
              const [x, y] = point(i, R);
              return <line key={g.key} x1={C} y1={C} x2={x} y2={y} className={s.axis} />;
            })}
            <polygon points={shape} className={`${s.shape} ${over ? s.shapeOver : ""}`} />
            {shown.map((v, i) => {
              const [x, y] = point(i, Math.max(14, radius(v, GROUPS[i].limit)));
              const bad = values[i] > GROUPS[i].limit + 1e-9;
              return <circle key={GROUPS[i].key} cx={x} cy={y} r={5} className={bad ? s.dotOver : s.dot} />;
            })}
          </svg>
          {GROUPS.map((g, i) => {
            const [x, y] = point(i, R + 34);
            const bad = values[i] > g.limit + 1e-9;
            return (
              <span key={g.key} className={s.label} style={{ left: `${(x / SIZE) * 100}%`, top: `${(y / SIZE) * 100}%` }}>
                {g.label}
                <b className={bad ? s.bad : ""}>{fmt(values[i])} g</b>
              </span>
            );
          })}
        </figure>

        <div className={s.controls}>
          {mode === "product" ? (
            <>
              <p className={s.itemName}>
                {PRODUCT.name} <span>{productGrams} g</span>
              </p>
              <input
                type="range"
                min={10}
                max={160}
                step={5}
                value={productGrams}
                onChange={(e) => setProductGrams(Number(e.target.value))}
                className={s.range}
                aria-label="Porcja awokado w gramach"
                style={{ ["--p" as string]: `${((productGrams - 10) / 150) * 100}%` }}
              />
              <div className={s.presets}>
                {[30, 60, 120].map((g) => (
                  <button key={g} type="button" onClick={() => setProductGrams(g)} aria-pressed={productGrams === g}>
                    {g} g
                  </button>
                ))}
              </div>
            </>
          ) : (
            <ul className={s.mealList}>
              {meal.map((it, i) => (
                <li key={it.name}>
                  <span>{it.name}</span>
                  <span className={s.stepper}>
                    <button type="button" onClick={() => setMealGrams(i, -10)} aria-label={`Mniej: ${it.name}`}>
                      −
                    </button>
                    <b>{it.grams} g</b>
                    <button type="button" onClick={() => setMealGrams(i, 10)} aria-label={`Więcej: ${it.name}`}>
                      +
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <p className={`${s.status} ${over ? s.statusOver : ""}`} aria-live="polite">
            <span aria-hidden="true">{over ? "!" : "✓"}</span>
            {over
              ? mode === "product"
                ? `Ponad limit FODMAP; w limicie do ok. ${safeGrams} g.`
                : "Posiłek ponad limit FODMAP. Zmniejsz porcję składnika."
              : "W limicie FODMAP na posiłek."}
          </p>
          <p className={s.note}>Wartości poglądowe. W aplikacji wykres liczy się z danych katalogu produktów.</p>
        </div>
      </div>
    </div>
  );
}
