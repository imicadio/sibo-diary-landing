# Sibo Diary — landing page

**Podgląd na żywo:**

- wersja A: https://imicadio.github.io/sibo-diary-landing/
- wersja B: https://imicadio.github.io/sibo-diary-landing/v2/

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
- `app/v2/` — wersja B: nowości (lista zakupów, plan dnia, FODMAP posiłku, raport PDF, 500+ przepisów), animacje i interaktywny wykres FODMAP
- `components/v2/` — elementy wersji B: przewijana historia Planera, wykres FODMAP, licznik
- `components/VariantSwitch.tsx` — przełącznik A/B w prawym dolnym rogu
- `public/screens/`, `public/foods/` — zrzuty ekranów (wersja A) i zdjęcia produktów
- `public/v2/` — nowe zrzuty z aplikacji (tryb demo, plan Premium) i strona raportu PDF

## Publikacja

Każdy push na `main` buduje stronę i publikuje ją na GitHub Pages (`.github/workflows/deploy.yml`).
