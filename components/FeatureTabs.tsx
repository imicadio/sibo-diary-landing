"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { asset } from "@/lib/asset";
import s from "./FeatureTabs.module.css";

const DURATION = 6000;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches;
}

const tabs = [
  {
    key: "pain",
    label: "Ból",
    title: "Ból w skali od 0 do 10",
    text: "Przesuwasz suwak, a pod nim widzisz, co znaczy dany poziom. Do tego rodzaj bólu (tępy, kłujący, skurczowy, piekący…), miejsce na brzuchu i to, co pomogło.",
    chips: ["Skala 0–10", "Rodzaj bólu", "Lokalizacja", "Co pomaga"],
    img: "/screens/pain.jpg",
    alt: "Ekran Ból: natężenie 4 na 10 i rodzaj bólu",
    toast: { icon: "✓", title: "Zapisano: Ból 4/10", sub: "Umiarkowany · 13:45" },
    stat: { value: "8", label: "rodzajów bólu" },
  },
  {
    key: "bloating",
    label: "Wzdęcia",
    title: "Wzdęcia, które da się porównać",
    text: "Powiększenie brzucha wybierasz z obrazków od 0 do 3. Napięcie i pełność oceniasz osobno, bo to dwa różne odczucia.",
    chips: ["Obrazki 0–3", "Napięcie", "Pełność", "Gazy 0–10"],
    img: "/screens/bloating.jpg",
    alt: "Ekran Wzdęcia: powiększenie brzucha na obrazkach i napięcie",
    toast: { icon: "✓", title: "Zapisano: Wzdęcia", sub: "Lekkie · 16:20" },
    stat: { value: "0–3", label: "skala obrazkowa" },
  },
  {
    key: "supplements",
    label: "Suplementy",
    title: "Probiotyk rano, magnez wieczorem",
    text: "Dodajesz suplement z godziną i dawką, a on czeka w planie dnia. Po wzięciu odhaczasz go jednym dotknięciem. W raporcie widać, co było brane przed wypróżnieniami.",
    chips: ["Godzina i dawka", "Plan dnia", "Odhaczanie", "W raporcie"],
    img: "/screens/plan.jpg",
    alt: "Plan dnia z probiotykiem i magnezem oraz lista objawów",
    toast: { icon: "💊", title: "Probiotyk wzięty", sub: "1 kapsułka · 08:00" },
    stat: { value: "1 tap", label: "żeby odhaczyć" },
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = visible && !paused && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % tabs.length), DURATION);
    return () => window.clearTimeout(id);
  }, [running, active]);

  const tab = tabs[active];

  return (
    <div
      ref={rootRef}
      className={`${s.root} ${running ? s.running : ""}`}
      style={{ "--duration": `${DURATION}ms` } as React.CSSProperties}
    >
      <div
        className={s.tabs}
        role="tablist"
        aria-label="Funkcje dziennika"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.key}
              role="tab"
              id={`tab-${t.key}`}
              aria-selected={on}
              aria-controls="feature-panel"
              className={`${s.tab} ${on ? s.tabOn : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={s.tabHead}>
                <span className={s.num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.label}>{t.label}</span>
              </span>
              <span className={s.tabBody} aria-hidden={!on}>
                <span className={s.tabInner}>
                  <b>{t.title}</b>
                  <span className={s.text}>{t.text}</span>
                  <span className={s.chips}>
                    {t.chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </span>
                </span>
              </span>
              <span className={s.progress} aria-hidden="true">
                {on && <span key={`${active}-${running}`} />}
              </span>
            </button>
          );
        })}
      </div>

      <div className={s.stage} id="feature-panel" role="tabpanel" aria-labelledby={`tab-${tab.key}`}>
        <div className={s.blob} aria-hidden="true" />
        <div className={s.blob2} aria-hidden="true" />
        <div className={s.ring} aria-hidden="true" />

        <div className={s.phone}>
          {tabs.map((t, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={t.key}
              src={asset(t.img)}
              alt={i === active ? t.alt : ""}
              aria-hidden={i !== active}
              loading="lazy"
              className={i === active ? s.shotOn : s.shot}
            />
          ))}
        </div>

        <div key={`toast-${active}`} className={s.toast} aria-hidden="true">
          <span className={s.toastIcon}>{tab.toast.icon}</span>
          <span>
            <b>{tab.toast.title}</b>
            <small>{tab.toast.sub}</small>
          </span>
        </div>

        <div key={`stat-${active}`} className={s.stat} aria-hidden="true">
          <b>{tab.stat.value}</b>
          <small>{tab.stat.label}</small>
        </div>
      </div>
    </div>
  );
}
