# Sibo Diary — landing page

**Podgląd na żywo — dwie wersje do porównania:**

- **Wersja A:** https://imicadio.github.io/sibo-diary-landing/
- **Wersja B:** https://imicadio.github.io/sibo-diary-landing/v2/

Między wersjami przełączasz się pływającym przyciskiem „Wersja A / B” w prawym dolnym rogu.

Landing page aplikacji Sibo Diary w Next.js (App Router, statyczny eksport).

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona będzie pod [http://localhost:3000](http://localhost:3000).

## Struktura

- `app/page.tsx` — wersja A: sekcje strony i treści
- `components/Mockups.tsx` — wersja A: makiety ekranów aplikacji (HTML/CSS)
- `app/v2/page.tsx`, `app/v2/v2.module.css` — wersja B (prawdziwe zrzuty ekranów z aplikacji w trybie demo)
- `public/v2/screens/`, `public/v2/foods/` — zrzuty ekranów i zdjęcia produktów z aplikacji
- `components/VariantSwitch.tsx` — przełącznik wersji A / B
- `components/Logo.tsx` — znak i logo
- `app/globals.css` — style i paleta kolorów marki

## Publikacja

Każdy push na `main` buduje stronę i publikuje ją na GitHub Pages (`.github/workflows/deploy.yml`).
