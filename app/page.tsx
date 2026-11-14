import { Logo, LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import {
  BristolCard,
  FodmapCard,
  MedsCard,
  PatternCard,
  PhoneMockup,
  ReportCard,
  Ring,
  SymptomCard,
} from "@/components/Mockups";
import { VariantSwitch } from "@/components/VariantSwitch";
import type { ReactNode } from "react";

const APP_URL = "#pobierz";

const highlights = [
  { icon: "⏱", title: "Wpis w 5 sekund", sub: "posiłek, objaw, wypróżnienie" },
  { icon: "🔎", title: "Wyzwalacze", sub: "dziennik łączy kropki" },
  { icon: "🩺", title: "Raport PDF", sub: "gotowy na wizytę" },
  { icon: "🔒", title: "Prywatnie", sub: "Twoje dane zostają u Ciebie" },
];

const quickChips = [
  "Owsianka na mleku bez laktozy",
  "Wzdęcia 7/10",
  "Typ 4 rano",
  "Rifaksymina, dawka 2",
  "Ból po obiedzie",
  "Sen: 6 h",
  "Stres w pracy",
  "Bez objawów do wieczora",
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
    quote: "Wzdęcia, siedem na dziesięć.",
    body: (
      <>
        Zaznacz objaw i jego nasilenie suwakiem. Sibo Diary zapisuje godzinę i sam łączy wpis z
        ostatnim posiłkiem, więc nie trzeba pamiętać, co było na talerzu trzy godziny temu.
      </>
    ),
    visual: <SymptomCard />,
  },
  {
    kicker: "Ty, w sklepie",
    quote: "Czy mogę zjeść awokado?",
    body: (
      <>
        Baza produktów podpowiada, które porcje mają niską zawartość FODMAP, i pokazuje, jak dany
        produkt wypadał w Twoim własnym dzienniku. Pytanie niczego nie zapisuje.
      </>
    ),
    visual: <FodmapCard />,
  },
  {
    kicker: "Ty, rano",
    quote: "Typ czwarty.",
    body: (
      <>
        Wypróżnienia zapisujesz jednym dotknięciem w skali bristolskiej. Bez opisywania, bez
        krępujących notatek, a lekarz od razu widzi trend.
      </>
    ),
    visual: <BristolCard />,
  },
  {
    kicker: "Ty, w trakcie kuracji",
    quote: "Dawka rifaksyminy wzięta.",
    body: (
      <>
        Dodaj plan leczenia, suplementy albo etap diety: eliminację, reintrodukcję, utrzymanie.
        Przypomnienia przychodzą o właściwej porze, a każda dawka trafia do historii.
      </>
    ),
    visual: <MedsCard />,
  },
  {
    kicker: "Ty, w niedzielę wieczorem",
    quote: "Co mi szkodzi?",
    body: (
      <>
        Po kilku tygodniach wpisów Sibo Diary szuka powtarzających się wzorców między jedzeniem,
        snem, stresem i objawami. Pokazuje je ostrożnie, jako podpowiedź do sprawdzenia, a nie
        diagnozę.
      </>
    ),
    visual: <PatternCard />,
  },
  {
    kicker: "Ty, przed wizytą",
    quote: "Wyślij to lekarzowi.",
    body: (
      <>
        Jeden przycisk tworzy czytelny raport PDF z wybranego okresu: objawy, wypróżnienia,
        przebieg kuracji i podejrzane produkty. Zamiast „chyba było lepiej” masz konkretne liczby.
      </>
    ),
    visual: <ReportCard />,
  },
];

const faq = [
  {
    q: "Ile kosztuje Sibo Diary?",
    a: "Dziennik objawów, posiłków i wypróżnień jest darmowy na zawsze. Wzorce, raport PDF i pełna baza FODMAP są w subskrypcji Premium, którą możesz przetestować przez 14 dni za darmo.",
  },
  {
    q: "Czy aplikacja diagnozuje SIBO?",
    a: "Nie. Sibo Diary to dziennik, a nie wyrób medyczny. Pomaga zebrać dane i zauważyć wzorce, ale diagnozę i leczenie zawsze ustala lekarz, zwykle na podstawie testu oddechowego.",
  },
  {
    q: "Czy nadaje się też przy IBS lub innych problemach jelitowych?",
    a: "Tak. Objawy, skala bristolska, dieta low FODMAP i raporty przydają się przy IBS, nietolerancjach pokarmowych i wszędzie tam, gdzie szukasz związku między jedzeniem a samopoczuciem.",
  },
  {
    q: "Ile czasu zajmuje prowadzenie dziennika?",
    a: "Większość wpisów to jedno lub dwa dotknięcia. Ulubione posiłki i stałe leki zapisujesz raz, a potem dodajesz je z listy.",
  },
  {
    q: "Co dzieje się z moimi danymi?",
    a: "Dane zdrowotne są szyfrowane i nie sprzedajemy ich nikomu. Możesz w każdej chwili wyeksportować wszystko do pliku albo usunąć konto razem z danymi.",
  },
  {
    q: "Na jakich urządzeniach działa?",
    a: "Na iPhonie i telefonach z Androidem. Dziennik synchronizuje się między urządzeniami, jeśli tego chcesz.",
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
              <h1>Dziennik SIBO, który pokazuje, co Ci szkodzi</h1>
              <p className="lead">
                Zapisz posiłek, objaw albo dawkę leku w kilka sekund. Sibo Diary łączy kropki
                między jedzeniem a samopoczuciem i przygotowuje raport na wizytę u lekarza.
              </p>
              <div className="hero__cta">
                <StoreButtons />
              </div>
            </div>
            <div className="hero__visual">
              <div className="chips-float" aria-hidden="true">
                <span className="chip chip--a">＋ Wzdęcia 7/10</span>
                <span className="chip chip--b">＋ Obiad: makaron z czosnkiem</span>
                <span className="chip chip--c">„Co mi szkodzi?”</span>
              </div>
              <PhoneMockup />
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
              <h2>Zapisz, co jesz i jak się czujesz. Resztą zajmie się dziennik.</h2>
              <p className="lead lead--dark">
                Posiłki, objawy, wypróżnienia, sen, stres i leki w jednym miejscu, na osi czasu
                jednego dnia. Bez arkuszy, bez karteczek, bez zgadywania po tygodniu, co mogło
                zaszkodzić.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="chip-cloud">
                {quickChips.map((c, i) => (
                  <span key={c} className={`chip chip--soft ${i % 3 === 0 ? "chip--accent" : ""}`}>
                    {c}
                  </span>
                ))}
              </div>
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
              <p className="kicker kicker--light">Ekran „Dzisiaj”</p>
              <h2>
                Twój dzień jest dziś
                <br />
                <span className="accent">spokojniejszy niż wczoraj.</span>
              </h2>
              <p className="lead">
                Pierścień samopoczucia zbiera objawy z całego dnia w jedną liczbę, a pod nim widać
                jedzenie, sen i stres. Tak łatwiej zauważyć, że idzie ku lepszemu, nawet gdy
                pojedynczy dzień jest gorszy.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="day-ring">
                <div className="day-ring__ring">
                  <Ring value={0.62} size={240} stroke={22} track="rgba(191,230,211,.15)" color="#7CC57E" />
                  <div className="day-ring__center">
                    <b>6,2</b>
                    <small>na 10</small>
                  </div>
                </div>
                <div className="day-ring__stats">
                  <div>
                    <small>Posiłki</small>
                    <b>3 · 1 wysoki FODMAP</b>
                  </div>
                  <div>
                    <small>Sen</small>
                    <b>7 h 20 min</b>
                  </div>
                  <div>
                    <small>Stres</small>
                    <b>niski</b>
                  </div>
                </div>
              </div>
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

        {/* FOUNDER + CTA */}
        <section className="closing" id="pobierz">
          <div className="container closing__inner">
            <Reveal>
              <h2 className="closing__title">
                Jedz spokojniej.
                <br />
                <span>Rozumiej swoje jelita.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <blockquote className="founder">
                <p>
                  Po diagnozie SIBO prowadziłem dziennik w notatkach i arkuszu, ale nigdy nie
                  umiałem z niego nic wyczytać. Zbudowałem aplikację, której sam potrzebowałem.
                  Pracuję nad nią sam, więc każda wiadomość trafia prosto do mnie.
                </p>
                <footer>— twórca Sibo Diary</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={180}>
              <div className="closing__cta">
                <LogoMark size={72} variant="reversed" />
                <StoreButtons light />
                <small>Dziennik jest darmowy. Premium możesz testować 14 dni za darmo.</small>
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
