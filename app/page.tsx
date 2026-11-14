import { Logo, LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { PhoneShot, ProductCard, ShotCrop } from "@/components/Mockups";
import { VariantSwitch } from "@/components/VariantSwitch";
import type { ReactNode } from "react";

const APP_URL = "#pobierz";

const highlights = [
  { icon: "＋", title: "Wpis jednym dotknięciem", sub: "szybkie dodawanie" },
  { icon: "🍌", title: "Przewodnik FODMAP", sub: "produkty i porcje" },
  { icon: "📊", title: "Raport tygodnia", sub: "objawy obok posiłków" },
  { icon: "⌚", title: "Kroki i sen", sub: "z telefonu i zegarka" },
];

const quickChips = [
  "Toaleta",
  "Gazy",
  "Wzdęcia",
  "Ból",
  "Stres",
  "Woda",
  "Kroki",
  "Sen",
  "Posiłek",
  "Przepis",
  "Produkty",
  "Suplement",
];

type Story = {
  kicker: string;
  quote: string;
  body: ReactNode;
  visual: ReactNode;
};

const stories: Story[] = [
  {
    kicker: "Ty, po obiedzie",
    quote: "Ból, cztery na dziesięć.",
    body: (
      <>
        Ustawiasz natężenie na skali od 0 do 10, zaznaczasz rodzaj bólu (tępy, kłujący,
        skurczowy…), miejsce i to, co przynosi ulgę. Wpis zapisuje się z godziną w dniu wybranym w
        kalendarzu.
      </>
    ),
    visual: <PhoneShot src="/screens/pain.jpg" alt="Ekran Ból: natężenie 4 na 10 i rodzaj bólu" />,
  },
  {
    kicker: "Ty, gdy brzuch puchnie",
    quote: "Dziś bez wzdęć.",
    body: (
      <>
        Powiększenie brzucha wybierasz z obrazków, a napięcie i uczucie pełności oceniasz osobno, bo
        to różne objawy. Gazy zapisujesz z częstotliwością, zapachem i dyskomfortem od 0 do 10.
      </>
    ),
    visual: (
      <PhoneShot src="/screens/bloating.jpg" alt="Ekran Wzdęcia: powiększenie brzucha na obrazkach i napięcie" />
    ),
  },
  {
    kicker: "Ty, rano",
    quote: "Typ czwarty.",
    body: (
      <>
        W „Toalecie” wybierasz typ stolca na skali Bristol, kolor i wielkość, którą porównujesz do
        orzecha, śliwki, banana albo ogórka. Do tego godzina i zapach — bez opisywania i bez
        krępujących notatek.
      </>
    ),
    visual: <PhoneShot src="/screens/toilet.jpg" alt="Ekran Toaleta: skala Bristol, kolor i wielkość" />,
  },
  {
    kicker: "Ty, w sklepie",
    quote: "Czy banan jest OK?",
    body: (
      <>
        Wpisz nazwę w Przewodniku i zobacz poziom FODMAP, bezpieczną porcję oraz rozbicie na
        fruktany, GOS, laktozę, sorbitol i mannitol. Do tego kalorie i makro na 100 g. Serduszko
        dodaje produkt do ulubionych.
      </>
    ),
    visual: <ProductCard />,
  },
  {
    kicker: "Ty, przy planowaniu",
    quote: "Co dziś zjem?",
    body: (
      <>
        W Jadłospisie są przepisy low-FODMAP z kaloriami i makro. Dodajesz posiłek do planu dnia,
        odhaczasz, gdy go zjesz, albo wymieniasz na inny. Plan możesz skopiować z innego dnia lub
        powtarzać co tydzień, a własne przepisy tworzysz od zera.
      </>
    ),
    visual: <PhoneShot src="/screens/meals.jpg" alt="Ekran Jadłospis z przepisami low-FODMAP" />,
  },
  {
    kicker: "Ty, z suplementami",
    quote: "Probiotyk o ósmej.",
    body: (
      <>
        Dodaj suplementy i leki, które bierzesz, z godzinami i dawkami. Pojawiają się w planie
        dnia, a po wzięciu odhaczasz je jednym dotknięciem. Obok przełączasz objawy, które chcesz
        dziś śledzić.
      </>
    ),
    visual: <PhoneShot src="/screens/plan.jpg" alt="Plan dnia z probiotykiem i magnezem oraz lista objawów" />,
  },
  {
    kicker: "Ty, w niedzielę wieczorem",
    quote: "Jak minął tydzień?",
    body: (
      <>
        Raport pokazuje dni z wpisami i jedną siatkę z posiłkami, lekami, wypróżnieniami i
        objawami — im ciemniej, tym silniej. Wykresy pod spodem pokazują godziny posiłków, przyjęć
        i wypróżnień oraz sen na tle Twojego celu.
      </>
    ),
    visual: <PhoneShot src="/screens/reports.jpg" alt="Ekran Raporty: podsumowanie tygodnia" />,
  },
];

const faq = [
  {
    q: "Ile kosztuje Sibo Diary?",
    a: "Dziennik jest darmowy. Jeśli kiedyś pojawią się funkcje płatne, napiszemy o tym wyraźnie przed premierą w sklepach.",
  },
  {
    q: "Czy aplikacja diagnozuje SIBO?",
    a: "Nie. Sibo Diary to dziennik, a nie wyrób medyczny. Pomaga zebrać dane i przygotować się do rozmowy z lekarzem lub dietetykiem, ale diagnozę i leczenie ustala specjalista.",
  },
  {
    q: "Co mogę zapisywać?",
    a: "Toaletę w skali Bristol, gazy, wzdęcia, ból, stres, wodę, kroki, sen, posiłki, przepisy, produkty, suplementy i leki. Każdy wpis trafia do dnia wybranego w kalendarzu.",
  },
  {
    q: "Czy muszę być na diecie low-FODMAP?",
    a: "Nie. Przewodnik po produktach i jadłospis przydają się na tej diecie, ale dziennik objawów i toalety działa niezależnie od tego, co jesz.",
  },
  {
    q: "Jak połączyć zegarek?",
    a: "Otwórz kafelek Kroki albo Sen i dotknij „Połącz”. Aplikacja czyta dane z Apple Zdrowie na iPhonie i z Health Connect na Androidzie, więc działa z Apple Watch, Garminem, Samsungiem, Fitbitem, Amazfitem i innymi. Kroki i sen możesz też dopisać ręcznie.",
  },
  {
    q: "Na jakich telefonach działa?",
    a: "Na iPhonie i na Androidzie. Dane trzymasz na swoim koncie, więc widzisz je na każdym telefonie, na którym się zalogujesz.",
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <a href="#" aria-label="Sibo Diary — strona główna">
            <Logo variant="reversed" />
          </a>
          <nav className="nav__links" aria-label="Główna nawigacja">
            <a href="#jak-to-dziala">Jak to działa</a>
            <a href="#funkcje">Funkcje</a>
            <a href="#pytania">Pytania</a>
          </nav>
          <a className="btn btn--light btn--sm" href={APP_URL}>
            Pobierz
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <h1>Twój dziennik SIBO na cały dzień</h1>
              <p className="lead">
                Objawy, toaleta, posiłki, suplementy, woda, kroki i sen w jednej aplikacji. Wpis
                dodajesz jednym dotknięciem, a raport tygodnia pokazuje objawy obok tego, co było na talerzu.
              </p>
              <div className="hero__cta">
                <StoreButtons />
              </div>
            </div>
            <div className="hero__visual">
              <div className="chips-float" aria-hidden="true">
                <span className="chip chip--a">＋ Ból 4/10</span>
                <span className="chip chip--b">＋ Toaleta · typ 4</span>
                <span className="chip chip--c">✓ Probiotyk wzięty</span>
              </div>
              <PhoneShot
                src="/screens/today.jpg"
                alt="Ekran Dziennik: kalendarz tygodnia, postęp, kroki, sen i woda"
                className="shot--hero"
                priority
              />
            </div>
          </div>

          <div className="container">
            <ul className="highlights">
              {highlights.map((h) => (
                <li key={h.title}>
                  <span className="highlights__icon" aria-hidden="true">
                    {h.icon}
                  </span>
                  <span>
                    <b>{h.title}</b>
                    <small>{h.sub}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro" id="jak-to-dziala">
          <div className="container intro__inner">
            <Reveal>
              <h2>Dotknij „+” i wybierz, co zapisać. Tyle.</h2>
              <p className="lead lead--dark">
                Zielony przycisk jest zawsze pod ręką, na każdym ekranie. Wpis trafia do dnia
                wybranego w kalendarzu, a zielone kółko przy dacie pokazuje, że ten dzień ma wpisy.
                Krótki przewodnik po pierwszym logowaniu pokaże Ci wszystko w minutę.
              </p>
              <div className="chip-cloud">
                {quickChips.map((c, i) => (
                  <span key={c} className={`chip chip--soft ${i % 4 === 0 ? "chip--accent" : ""}`}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="intro__visual">
              <PhoneShot src="/screens/quickadd.jpg" alt="Panel Szybkie dodawanie z kafelkami wpisów" />
            </Reveal>
          </div>
        </section>

        {/* STORIES */}
        <section className="stories" id="funkcje">
          <div className="container">
            {stories.map((s, i) => (
              <article className={`story ${i % 2 ? "story--flip" : ""}`} key={s.kicker}>
                <Reveal className="story__copy">
                  <p className="kicker">{s.kicker}</p>
                  <h3>{s.quote}</h3>
                  <p>{s.body}</p>
                </Reveal>
                <Reveal className="story__visual" delay={120}>
                  {s.visual}
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* DARK FEATURE */}
        <section className="dark">
          <div className="container dark__grid">
            <Reveal>
              <p className="kicker kicker--light">Kroki, sen i woda</p>
              <h2>
                Zegarek liczy,
                <br />
                <span className="accent">dziennik pamięta.</span>
              </h2>
              <p className="lead">
                Połącz aplikację z Apple Zdrowie albo Health Connect, a kroki i sen pobiorą się
                same — z długością nocy, godziną zaśnięcia i pobudki oraz fazami snu. Wodę dodajesz
                szklanka po szklance. Cele ustawiasz w Ustawieniach.
              </p>
              <ul className="sources">
                {["Apple Watch", "Garmin", "Samsung", "Fitbit", "Amazfit", "Xiaomi"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <ShotCrop
                src="/screens/today.jpg"
                alt="Kafelki Kroki 5 500 z 10 000, Sen 7 h 30 min i Woda 1,5 z 3 litrów"
                position="50% 78%"
              />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="pytania">
          <div className="container faq__inner">
            <h2>Pytania i odpowiedzi</h2>
            <div className="faq__list">
              {faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="closing" id="pobierz">
          <div className="container closing__inner">
            <Reveal>
              <h2 className="closing__title">
                Zapisuj na bieżąco.
                <br />
                <span>Rozmawiaj z lekarzem konkretnie.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="closing__lead">
                Zamiast odtwarzać z pamięci ostatnie tygodnie, otwierasz raport i pokazujesz, kiedy
                było gorzej i jakie posiłki oraz suplementy były wtedy w planie dnia.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="closing__cta">
                <LogoMark size={72} variant="reversed" />
                <StoreButtons light />
                <small>Darmowa aplikacja na iPhone&rsquo;a i Androida.</small>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo />
          <p className="footer__disclaimer">
            Sibo Diary służy do prowadzenia dziennika i nie jest wyrobem medycznym. Nie zastępuje
            porady lekarza ani dietetyka.
          </p>
          <nav className="footer__links" aria-label="Stopka">
            <a href="#">Polityka prywatności</a>
            <a href="#">Regulamin</a>
            <a href="#">Kontakt</a>
          </nav>
          <small>© {new Date().getFullYear()} Sibo Diary</small>
        </div>
      </footer>
      <VariantSwitch active="a" />
    </>
  );
}

function StoreButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="store">
      <a className={`btn ${light ? "btn--light" : "btn--ink"}`} href={APP_URL}>
        <AppleIcon /> App Store
      </a>
      <a className={`btn ${light ? "btn--ghost-light" : "btn--ghost"}`} href={APP_URL}>
        <PlayIcon /> Google Play
      </a>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.3-3.51ZM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.56-1.21Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4 2.5v19c0 .4.45.65.8.45L21 12.4a.5.5 0 0 0 0-.86L4.8 2.05A.52.52 0 0 0 4 2.5Z" />
    </svg>
  );
}
