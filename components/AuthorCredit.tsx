const LINKEDIN = "https://www.linkedin.com/in/michal-jeszko";

/** Author credit with a LinkedIn link, shown under the copyright line. */
export function AuthorCredit({ className = "" }: { className?: string }) {
  return (
    <span className={`author-credit ${className}`}>
      Stworzone przez{" "}
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
        Michał Jeszko
        <span className="sr-only"> (LinkedIn, otwiera się w nowej karcie)</span>
      </a>
    </span>
  );
}
