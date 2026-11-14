/** Brand symbol, inlined from the SIBOsymptoms logo kit (grid 256). */
export function LogoMark({
  size = 40,
  variant = "color",
}: {
  size?: number;
  variant?: "color" | "reversed";
}) {
  const tile = variant === "color" ? "#0E5E56" : "#F5FBF8";
  const loops = variant === "color" ? "#F5FBF8" : "#0E5E56";
  return (
    <svg
      width={size}
      height={size}
      viewBox="36 36 184 184"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={tile}
        d="M84 36H172A48 48 0 0 1 220 84V172A48 48 0 0 1 172 220H84A48 48 0 0 1 36 172V84A48 48 0 0 1 84 36Z"
      />
      <path
        fill={loops}
        d="M180 70.5H92A23.5 23.5 0 0 0 92 117.5H164A8.5 8.5 0 0 1 164 134.5H92A23.5 23.5 0 0 0 92 181.5H128A7.5 7.5 0 0 0 128 166.5H92A8.5 8.5 0 0 1 92 149.5H164A23.5 23.5 0 0 0 164 102.5H92A8.5 8.5 0 0 1 92 85.5H180A7.5 7.5 0 0 0 180 70.5Z"
      />
      <circle cx="156" cy="174" r="9" fill="#7CC57E" />
    </svg>
  );
}

export function Logo({ variant = "color" }: { variant?: "color" | "reversed" }) {
  return (
    <span className={`logo logo--${variant}`}>
      <LogoMark size={36} variant={variant} />
      <span className="logo__text">
        <b>Sibo</b>Diary
      </span>
    </span>
  );
}
