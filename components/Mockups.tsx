/* Version A visuals: real app screenshots in a phone frame, plus small HTML cards. */
import { asset } from "@/lib/asset";

export function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`shot ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt} loading={priority ? "eager" : "lazy"} />
    </div>
  );
}

/** Zoomed-in crop of a screenshot, for the Steps / Sleep / Water tiles. */
export function ShotCrop({ src, alt, position }: { src: string; alt: string; position: string }) {
  return (
    <div className="shot-crop">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt} loading="lazy" style={{ objectPosition: position }} />
    </div>
  );
}

const fodmaps = ["Fruktany", "GOS", "Laktoza", "Sorbitol", "Mannitol"];

/** Product guide card styled after the app's product detail screen. */
export function ProductCard() {
  return (
    <div className="product">
      <div className="product__search">
        <span aria-hidden="true">⌕</span> banan
      </div>
      <div className="product__hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/foods/banana.png")} alt="" loading="lazy" />
      </div>
      <div className="product__head">
        <span className="product__dot" aria-hidden="true" />
        <div>
          <b>Banan</b>
          <small>Owoce</small>
        </div>
        <span className="product__heart" aria-hidden="true">
          ♡
        </span>
      </div>
      <div className="product__bars" aria-label="Rozbicie na grupy FODMAP">
        {fodmaps.map((f) => (
          <div key={f}>
            <span>{f}</span>
            <span className="product__bar" />
          </div>
        ))}
      </div>
      <div className="product__foods" aria-hidden="true">
        {["ananas", "quinoa", "herbata", "kapusta", "jablko"].map((f) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={f} src={asset(`/foods/${f}.png`)} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
