/** Prefixes a public/ path with the deploy base path (GitHub Pages sub-path). */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
