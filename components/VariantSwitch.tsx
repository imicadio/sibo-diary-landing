import Link from "next/link";

/** Floating A/B switch for comparing the two landing page variants. */
export function VariantSwitch({ active }: { active: "a" | "b" }) {
  return (
    <nav className="variant-switch" aria-label="Wersja strony">
      <span className="variant-switch__label">Wersja</span>
      <Link href="/" aria-current={active === "a" ? "page" : undefined}>
        A
      </Link>
      <Link href="/v2/" aria-current={active === "b" ? "page" : undefined}>
        B
      </Link>
    </nav>
  );
}
