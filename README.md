# Sibo Diary — landing page

**Podgląd na żywo: https://imicadio.github.io/sibo-diary-landing/**

Landing page aplikacji Sibo Diary w Next.js (App Router, statyczny eksport).

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona będzie pod [http://localhost:3000](http://localhost:3000).

## Struktura

- `app/page.tsx` — sekcje strony i treści
- `components/Mockups.tsx` — makiety ekranów aplikacji
- `components/Logo.tsx` — znak i logo
- `app/globals.css` — style i paleta kolorów marki

## Publikacja

Każdy push na `main` buduje stronę i publikuje ją na GitHub Pages (`.github/workflows/deploy.yml`).
