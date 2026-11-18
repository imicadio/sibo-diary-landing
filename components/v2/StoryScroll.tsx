"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import s from "./StoryScroll.module.css";

export type StoryStep = {
  kicker: string;
  title: string;
  text: string;
  points: string[];
  img: string;
  alt: string;
};

/**
 * Scroll story: steps scroll on the left while the phone on the right stays
 * pinned and swaps its screen to match the step in the middle of the viewport.
 */
export function StoryScroll({ steps }: { steps: StoryStep[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={s.story}>
      <ol className={s.steps}>
        {steps.map((step, i) => (
          <li
            key={step.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className={`${s.step} ${i === active ? s.stepActive : ""}`}
          >
            <span className={s.num}>{String(i + 1).padStart(2, "0")}</span>
            <p className={s.kicker}>{step.kicker}</p>
            <h3 className={s.title}>{step.title}</h3>
            <p className={s.text}>{step.text}</p>
            <ul className={s.points}>
              {step.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className={s.inlinePhone}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(step.img)} alt={step.alt} loading="lazy" />
            </div>
          </li>
        ))}
      </ol>

      <div className={s.stage} aria-hidden="true">
        <div className={s.sticky}>
          <div className={s.glow} style={{ ["--hue" as string]: `${active * 34}deg` }} />
          <div className={s.phone}>
            {steps.map((step, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={step.img}
                src={asset(step.img)}
                alt=""
                loading="lazy"
                className={i === active ? s.on : i < active ? s.past : ""}
              />
            ))}
          </div>
          <div className={s.dots}>
            {steps.map((step, i) => (
              <span key={step.img} className={i === active ? s.dotOn : ""} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
