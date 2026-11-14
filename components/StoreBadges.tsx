/** Standard black "App Store" / "Google Play" download badges. */
export function StoreBadges({ href, className = "" }: { href: string; className?: string }) {
  return (
    <div className={`store-badges ${className}`}>
      <a href={href} className="store-badge" aria-label="Pobierz z App Store">
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
          <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.3-3.51ZM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.56-1.21Z" />
        </svg>
        <span>
          <small>Pobierz z</small>
          <b>App Store</b>
        </span>
      </a>
      <a href={href} className="store-badge" aria-label="Pobierz z Google Play">
        <svg viewBox="0 0 24 26" width="24" height="26" aria-hidden="true">
          <path fill="#00A0FF" d="M1.2.6 13.6 13 1.2 25.4c-.3-.3-.5-.8-.5-1.4V2c0-.6.2-1.1.5-1.4Z" />
          <path fill="#00D45E" d="M1.2.6 13.6 13l3.9-3.9L3.2.9C2.4.4 1.7.3 1.2.6Z" />
          <path fill="#FF3A44" d="M1.2 25.4 13.6 13l3.9 3.9-14.3 8.2c-.8.5-1.5.6-2 .3Z" />
          <path fill="#FFC400" d="M17.5 9.1 13.6 13l3.9 3.9 4.5-2.6c1.3-.7 1.3-1.9 0-2.6l-4.5-2.6Z" />
        </svg>
        <span>
          <small>Pobierz z</small>
          <b>Google Play</b>
        </span>
      </a>
    </div>
  );
}
