# Sibo Diary — landing page

**Podgląd na żywo:** https://imicadio.github.io/sibo-diary-landing/

Landing page aplikacji Sibo Diary w Next.js (App Router, statyczny eksport).

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona będzie pod [http://localhost:3000](http://localhost:3000).

## Struktura

- `app/page.tsx`, `app/page.module.css` — sekcje strony, treści i ich style
- `app/layout.tsx`, `app/globals.css` — font, metadane i style globalne (reset, animacja pojawiania, przyciski sklepów)
- `components/SiteNav.tsx` — pływające menu z wersją mobilną
- `components/FeatureTabs.tsx` — animowane zakładki funkcji (Ból, Wzdęcia, Suplementy)
- `components/StoreBadges.tsx`, `components/AuthorCredit.tsx`, `components/Logo.tsx`, `components/Reveal.tsx` — drobne elementy wspólne
- `public/screens/`, `public/foods/` — zrzuty ekranów aplikacji (tryb demo) i zdjęcia produktów

## Publikacja

Każdy push na `main` buduje stronę i publikuje ją na GitHub Pages (`.github/workflows/deploy.yml`).
