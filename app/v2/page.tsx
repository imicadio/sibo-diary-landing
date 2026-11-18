import type { Metadata } from "next";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { SiteNav } from "@/components/SiteNav";
import { AuthorCredit } from "@/components/AuthorCredit";
import { VariantSwitch } from "@/components/VariantSwitch";
import { StoryScroll, type StoryStep } from "@/components/v2/StoryScroll";
import { FodmapPlayground } from "@/components/v2/FodmapPlayground";
import { FeatureTabs } from "@/components/FeatureTabs";
import { ReportAnatomy } from "@/components/v2/ReportAnatomy";
import { asset } from "@/lib/asset";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Sibo Diary — dziennik objawów SIBO, plan posiłków i przepisy low-FODMAP",
  description:
    "Raport PDF dla lekarza i dietetyczki, ponad 500 przepisów low-FODMAP z kaloriami, plan tygodnia z listą zakupów i dziennik objawów, który pomaga zauważyć, co Ci szkodzi.",
};

const DOWNLOAD = "#pobierz";

const navLinks = [
  { href: "#funkcje", label: "Dziennik" },
  { href: "#raporty", label: "Raport PDF" },
  { href: "#lekkie-posilki", label: "Przepisy" },
  { href: "#planer", label: "Planer" },
  { href: "#fodmap", label: "FODMAP" },
  { href: "#faq", label: "FAQ" },
];

const highlights = [
  { icon: "📄", title: "Raport PDF", sub: "dla lekarza i dietetyczki" },
  { icon: "🥗", title: "500+ przepisów", sub: "plan tygodnia i zakupy" },
  { icon: "🍌", title: "Bezpieczne porcje", sub: "wykres FODMAP" },
  { icon: "⌚", title: "Sen i kroki", sub: "same z zegarka" },
];

const story: StoryStep[] = [
  {
    kicker: "Plan dnia",
    title: "Ułóż dzień w minutę.",
    text: "Wybierasz przepis z kategorii, a posiłek ląduje w planie z godziną. Po jedzeniu odhaczasz go, a gdy masz ochotę na coś innego, „Wymień” podsuwa zamiennik.",
    points: ["Kopiuj dzień", "Powtarzaj co tydzień", "Kalorie i makro dnia"],
    img: "/v2/plan.jpg",
    alt: "Planer: plan dnia ze śniadaniem, obiadem i kolacją",
  },
  {
    kicker: "Porcja na miarę",
    title: "Dopasuj gramy, sprawdź FODMAP.",
    text: "Dotknij składnika w posiłku i ustaw ilość co 1 g. Wykres FODMAP, kalorie i makro przeliczają się od razu, zanim cokolwiek zapiszesz.",
    points: ["Licznik − / +", "Wykres pięciu grup", "Reset do przepisu"],
    img: "/v2/portion.jpg",
    alt: "Arkusz porcji marchwi z wykresem FODMAP i makro",
  },
  {
    kicker: "Lista zakupów",
    title: "Sporządź listę zakupów.",
    text: "„Dodaj z planu tygodnia” zbiera składniki ze wszystkich zaplanowanych posiłków i sumuje powtórki. W sklepie odhaczasz to, co już jest w koszyku.",
    points: ["Z przepisu albo z całego tygodnia", "Podpowiedzi z katalogu", "Własne pozycje"],
    img: "/v2/shopping.jpg",
    alt: "Lista zakupów z 11 produktami do kupienia",
  },
];

const foodFeatures = [
  {
    title: "Szybka wyszukiwarka produktów",
    text: "Wpisz „banan” i od razu sprawdź bezpieczną porcję oraz rozbicie na fruktany, GOS, laktozę, sorbitol i mannitol.",
  },
  {
    title: "Elastyczny jadłospis",
    text: "Wrzucasz dania w plan dnia, a gdy zmienisz zdanie – podmieniasz posiłek jednym ruchem, bez rozwalania bilansu.",
  },
  {
    title: "Wszystkie limity na jednym ekranie",
    text: "Śledzisz nie tylko makro i FODMAP, ale też kroki, wodę i sen.",
  },
];

const foods = [
  { img: "ananas", name: "Ananas", cat: "Owoce", level: "low" },
  { img: "quinoa", name: "Komosa ryżowa", cat: "Zboża", level: "low" },
  { img: "herbata", name: "Herbata", cat: "Napoje", level: "low" },
  { img: "banana", name: "Banan", cat: "Owoce", level: "mid" },
  { img: "kapusta", name: "Kapusta kiszona", cat: "Warzywa", level: "mid" },
  { img: "jablko", name: "Jabłko", cat: "Owoce", level: "high" },
] as const;

const levelLabel = { low: "niski FODMAP", mid: "uważaj na porcję", high: "wysoki FODMAP" };

const lightMeals = [
  {
    icon: "🥗",
    title: "Lekkie i policzone",
    text: "Kalorie, białko, tłuszcz i węglowodany przy każdym przepisie i w planie całego dnia.",
  },
  {
    icon: "🎯",
    title: "Cel kalorii dla Ciebie",
    text: "Kalkulator liczy dzienny cel z wagi, wzrostu i aktywności, a pasek pokazuje, ile zostało.",
  },
  {
    icon: "🍌",
    title: "Porcja w limicie FODMAP",
    text: "Wykres pokazuje fruktany, GOS, laktozę, sorbitol i mannitol w porcji, zanim zjesz.",
  },
  {
    icon: "📓",
    title: "Sprawdź, po czym Cię wzdyma",
    text: "Wzdęcia zapisane obok posiłków pokazują, co warto zostawić w planie, a co odstawić.",
  },
];

const plans = [
  {
    name: "Free",
    tag: "na zawsze",
    lead: "Wszystko, żeby zacząć prowadzić dziennik.",
    intro: "W planie:",
    items: [
      "Dziennik objawów, toalety, wody, kroków i snu",
      "Katalog FODMAP i bezpieczne porcje",
      "Ponad 500 przepisów low-FODMAP",
      "Planer na dziś i jutro, do 4 posiłków",
      "Leki i przypomnienia o lekach",
      "Raport bieżącego tygodnia",
    ],
  },
  {
    name: "Standard",
    tag: "najczęściej wybierany",
    lead: "Dla tych, którzy planują cały tydzień.",
    intro: "Wszystko z Free, a do tego:",
    items: [
      "Plan posiłków na cały tydzień",
      "Kopiowanie dnia i powtarzanie co tydzień",
      "Do 6 posiłków dziennie",
      "FODMAP porcji na wykresie",
      "Własne limity FODMAP i kalkulator makro",
      "Raporty z poprzednich tygodni",
      "Fazy snu i wszystkie przypomnienia",
    ],
  },
  {
    name: "Premium",
    tag: "pełnia możliwości",
    lead: "Zakupy, raporty PDF i bez limitów.",
    intro: "Wszystko ze Standard, a do tego:",
    items: [
      "Lista zakupów z przepisów i planu tygodnia",
      "Raport PDF dla lekarza i dietetyczki",
      "Filtry przepisów po czasie, kaloriach i makro",
      "Bez limitu posiłków, przekąsek i napojów",
    ],
  },
];

type Cell = boolean | string;
const comparison: { group: string; rows: { label: string; hint?: string; cells: [Cell, Cell, Cell] }[] }[] = [
  {
    group: "Dziennik",
    rows: [
      { label: "Objawy, toaleta (skala Bristol), woda, kroki i sen", cells: [true, true, true] },
      { label: "Szybkie dodawanie: 10+ rodzajów wpisu", cells: [true, true, true] },
      { label: "Kroki i sen z Apple Zdrowie / Health Connect", cells: [true, true, true] },
      { label: "Fazy snu z zegarka", hint: "głęboki, REM, lekki", cells: [false, true, true] },
      { label: "Leki, suplementy i przypomnienia o lekach", cells: [true, true, true] },
      { label: "Przypomnienia o wodzie, krokach i objawach po jedzeniu", cells: [false, true, true] },
    ],
  },
  {
    group: "Jedzenie i FODMAP",
    rows: [
      { label: "Katalog FODMAP i bezpieczne porcje", cells: [true, true, true] },
      { label: "Ponad 500 przepisów low-FODMAP", cells: [true, true, true] },
      { label: "Własne przepisy i produkty", cells: ["z limitem", "bez limitu", "bez limitu"] },
      { label: "FODMAP porcji na wykresie", hint: "przy zmianie ilości", cells: [false, true, true] },
      { label: "Własne limity FODMAP", hint: "dopasowane do etapu diety", cells: [false, true, true] },
      { label: "Kalkulator kalorii i makro", cells: [false, true, true] },
      { label: "Filtry przepisów: czas, kalorie, makro", cells: [false, false, true] },
    ],
  },
  {
    group: "Planer",
    rows: [
      { label: "Plan posiłków", cells: ["dziś i jutro", "cały tydzień", "cały tydzień"] },
      { label: "Posiłków dziennie", cells: ["do 4", "do 6", "bez limitu"] },
      { label: "Kopiowanie dnia jednym dotknięciem", cells: [false, true, true] },
      { label: "Plan powtarzany co tydzień", cells: [false, true, true] },
      { label: "Lista zakupów z przepisów i planu tygodnia", cells: [false, false, true] },
    ],
  },
  {
    group: "Raporty",
    rows: [
      { label: "Raport bieżącego tygodnia", cells: [true, true, true] },
      { label: "Raporty z poprzednich tygodni i porównanie", cells: [false, true, true] },
      { label: "Raport PDF dla lekarza i dietetyczki", cells: [false, false, true] },
    ],
  },
];

const faq = [
  {
    q: "Czy aplikacja jest darmowa?",
    a: "Plan Free jest darmowy na zawsze: dziennik objawów, katalog FODMAP, przepisy i plan na dziś i jutro. Standard i Premium odblokowują m.in. plan na cały tydzień, listę zakupów i raport PDF. Ceny podamy przed premierą w sklepach.",
  },
  {
    q: "Czy Sibo Diary stawia diagnozę?",
    a: "Nie. To dziennik, a nie wyrób medyczny. Pomaga zebrać dane do rozmowy z lekarzem lub dietetykiem, ale diagnozę i leczenie zawsze ustala specjalista.",
  },
  {
    q: "Jak działa wykres FODMAP?",
    a: "Pokazuje fruktany, GOS, laktozę, sorbitol i mannitol w porcji produktu albo całego posiłku. Środkowy pierścień to limit na jeden posiłek. Jeśli kształt wychodzi poza niego, aplikacja podpowie, przy jakiej ilości zmieścisz się w limicie.",
  },
  {
    q: "Skąd biorą się pozycje na liście zakupów?",
    a: "Z przepisów (przycisk „Dodaj do koszyka”), z całego planu tygodnia albo z ręcznego wpisu. Te same składniki się sumują, a wpisując produkt, dostajesz podpowiedzi z katalogu.",
  },
  {
    q: "Co jest w raporcie PDF?",
    a: "Tydzień na jednej stronie: siatka posiłków, objawów i wypróżnień dzień po dniu, średnie i maksima objawów oraz rozkład typów w skali Bristol. Plik wysyłasz lekarzowi albo drukujesz.",
  },
  {
    q: "Jak połączyć zegarek?",
    a: "Otwórz kafelek Kroki albo Sen i dotknij „Połącz”. Aplikacja czyta dane z Apple Zdrowie na iPhonie i z Health Connect na Androidzie, więc działa z większością zegarków. Kroki i sen zawsze możesz też dopisać ręcznie.",
  },
];

function Phone({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`${s.phone} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt} loading={eager ? "eager" : "lazy"} />
    </div>
  );
}

export default function VersionB() {
  return (
    <div className={s.page}>
      <SiteNav downloadHref={DOWNLOAD} links={navLinks} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={s.heroBrand}>
              <LogoMark size={40} />
              <span>
                <span>
                  <b>Sibo</b> Diary
                </span>
                <small>dziennik SIBO</small>
              </span>
            </p>
            <h1 className={s.heroTitle}>
              <span className={s.line}>
                <span>Zobacz, co Ci szkodzi.</span>
              </span>
              <span className={s.line}>
                <span className={s.lime}>Jedz bez zgadywania.</span>
              </span>
            </h1>
            <p className={s.heroLead}>
              Prowadź prosty dziennik objawów i posiłków, żeby wyłapać swoich cichych winowajców. Na
              wizytę u lekarza lub dietetyka zabierzesz gotowy raport PDF, a na co dzień ułożysz menu
              z ponad 500 dostępnych przepisów low-FODMAP. Nigdy więcej nie chodź głodny.
            </p>
            <div className={s.heroCta}>
              <StoreBadges href={DOWNLOAD} />
              <small>Dostępna za darmo do pobrania na iPhone&rsquo;a i Androida.</small>
            </div>
          </div>

          <div className={s.heroStage}>
            <Phone src="/v2/today.jpg" alt="Dziennik: kalendarz tygodnia, kroki, sen i woda" className={s.fanLeft} eager />
            <Phone src="/v2/plan.jpg" alt="Planer: plan dnia z trzema posiłkami" className={s.fanCenter} eager />
            <Phone src="/v2/shopping.jpg" alt="Lista zakupów z produktami do kupienia" className={s.fanRight} eager />
            <div className={`${s.toast} ${s.toast1}`}>
              <span className={s.toastIcon}>✓</span>
              <span>
                <b>W limicie FODMAP</b>
                <small>Łosoś z kaszą jaglaną</small>
              </span>
            </div>
            <div className={`${s.toast} ${s.toast2}`}>
              <span className={s.toastIcon}>🛒</span>
              <span>
                <b>Dodano składniki z 3 posiłków</b>
                <small>Lista zakupów · 13 pozycji</small>
              </span>
            </div>
            <div className={`${s.toast} ${s.toast3}`}>
              <span className={`${s.toastIcon} ${s.toastPdf}`}>PDF</span>
              <span>
                <b>Raport tygodnia gotowy</b>
                <small>SiboDiary-raport.pdf · 24 KB</small>
              </span>
            </div>
          </div>

          <ul className={s.highlights}>
            {highlights.map((h) => (
              <li key={h.title}>
                <span className={s.highlightIcon} aria-hidden="true">
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

      {/* INTRO — rhythm of the gut */}
      <section className={s.intro} id="funkcje">
        <div className={s.wrap}>
          <div className={s.split}>
            <Reveal className={s.introPhoneWrap}>
              <div className={s.introGlow} aria-hidden="true" />
              <Phone src="/v2/toilet.jpg" alt="Ekran Toaleta: skala Bristol, kolor i wielkość" className={s.tiltLeft} />
            </Reveal>
            <Reveal delay={120}>
              <p className={s.kicker}>Dziennik dnia</p>
              <h2 className={s.h2}>
                Poznaj rytm
                <br />
                <span className={s.mark}>swoich jelit.</span>
              </h2>
              <p className={s.sub}>
                Gazy, wzdęcia, ból, stres i wypróżnienia zapisane z godziną i nasileniem, dzień po
                dniu.
              </p>
              <p className={s.body}>
                Po tygodniu mało kto pamięta, kiedy dokładnie wrócił ból i co było wtedy na obiad.
                Krótkie wpisy w trakcie dnia układają się w czytelny obraz – po kilku tygodniach
                widzisz wyraźne schematy i idziesz do specjalisty z twardymi danymi, a nie
                wspomnieniami z ostatnich dwóch dni.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className={`${s.intro} ${s.introAlt} ${s.reportSection}`} id="raporty">
        <div className={s.wrap}>
          <div className={`${s.split} ${s.splitFlip}`}>
            <Reveal delay={120} className={s.reportStage}>
              <div className={s.introGlow} aria-hidden="true" />
              <div className={s.reportPhoneWrap}>
                <Phone src="/v2/reports.jpg" alt="Ekran Raporty z przyciskiem Wyeksportuj PDF" className={s.reportPhone} />
                <span className={s.tapPulse} aria-hidden="true" />
              </div>
              <figure className={s.reportSheet}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/v2/report-pdf.jpg")} alt="Pierwsza strona raportu PDF: podsumowanie, siatka objawów, średnie i skala Bristol" loading="lazy" />
                <figcaption className={s.sheetBadge}>
                  <span aria-hidden="true">PDF</span>
                  SiboDiary-raport.pdf · 24 KB
                </figcaption>
              </figure>
              <ul className={s.shareChips} aria-label="Co zrobisz z raportem">
                <li>✉️ E-mail do lekarza</li>
                <li>🖨️ Drukuj</li>
                <li>📁 Zachowaj w Plikach</li>
              </ul>
            </Reveal>
            <Reveal>
              <p className={s.kicker}>Raport PDF</p>
              <h2 className={s.h2}>
                Raport dla lekarza
                <br />
                <span className={s.mark}>i dietetyczki.</span>
              </h2>
              <p className={s.sub}>
                Cały tydzień na jednej stronie: posiłki, objawy i wypróżnienia dzień po dniu.
              </p>
              <p className={s.body}>
                Im ciemniejsze pole, tym silniejszy objaw, a tuż obok widać posiłki, leki i suplementy
                z tego samego dnia. Lekarz jednym rzutem oka wyłapuje zależności, które normalnie
                umykają w wywiadzie.
              </p>
              <ul className={s.reportStats}>
                <li>
                  <b>1</b>
                  <span>kliknięcie – i plik gotowy do wysłania</span>
                </li>
                <li>
                  <b>7</b>
                  <span>dni – pełen tydzień na przejrzystej siatce</span>
                </li>
                <li>
                  <b>2</b>
                  <span>strony – zero lania wody, same konkrety</span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal className={s.pdfPartsHead}>
            <p className={`${s.kicker} ${s.center}`}>Anatomia raportu</p>
            <h3>Co zobaczy specjalista?</h3>
            <p>Prawdziwy raport wyeksportowany z aplikacji. Wybierz część, żeby ją przybliżyć.</p>
          </Reveal>
          <Reveal>
            <ReportAnatomy ctaHref={DOWNLOAD} />
          </Reveal>

          <Reveal className={s.reportCta}>
            <div>
              <p className={s.reportCtaTitle}>
                Zabierz raport na <span className={s.mintText}>najbliższą wizytę.</span>
              </p>
              <p className={s.reportCtaText}>
                Szczegółowe dane, jasno podane: liczby, średnie i wykresy, które specjalista odczyta w
                minutę.
              </p>
            </div>
            <StoreBadges href={DOWNLOAD} />
          </Reveal>
        </div>
      </section>

      {/* LIGHT MEALS */}
      <section className={s.light} id="lekkie-posilki">
        <div className={s.wrap}>
          <div className={s.lightGrid}>
            <Reveal>
              <p className={s.kicker}>Lekkie posiłki low-FODMAP</p>
              <h2 className={s.h2}>
                Posiłki, które odchudzają,
                <br />
                <span className={s.mark}>a nie wzdymają.</span>
              </h2>
              <p className={s.sub}>
                Szukasz lekkich posiłków, po których brzuch jest spokojny? Znajdziesz i ułożysz je w Sibo
                Diary.
              </p>
              <p className={s.body}>
                Ponad 500 przepisów low-FODMAP z policzonymi kaloriami i makro – dopasowanych do
                Twojego dziennego celu. Po jedzeniu oceniasz samopoczucie jednym kliknięciem, dzięki
                czemu po kilku dniach czarno na białym widzisz, co Ci służy, a co kończy się wzdęciami.
              </p>
            </Reveal>
            <div className={s.lightCards}>
              {lightMeals.map((c, i) => (
                <Reveal key={c.title} delay={i * 90} className={s.lightCard}>
                  <span className={s.lightIcon} aria-hidden="true">
                    {c.icon}
                  </span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className={s.recipeCta}>
            <div>
              <p className={s.recipeCtaTitle}>Ponad 500 przepisów dostępnych w aplikacji.</p>
              <p className={s.recipeCtaText}>
                Pobierz Sibo Diary za darmo i ułóż pierwszy dzień jeszcze dziś.
              </p>
            </div>
            <StoreBadges href={DOWNLOAD} />
          </Reveal>
        </div>
      </section>

      {/* FOOD (dark, from version A) */}
      <section className={s.foodSection} id="jedzenie">
        <div className={s.wrap}>
          <div className={s.foodGrid}>
            <div>
              <Reveal>
                <p className={`${s.kicker} ${s.kickerLight}`}>Przewodnik i jadłospis</p>
                <h2 className={`${s.h2} ${s.h2Light}`}>
                  Jedzenie,
                  <br />
                  <span className={s.mintText}>które Ci służy.</span>
                </h2>
                <p className={`${s.bodyLight} ${s.foodLead}`}>
                  <b className={s.foodLeadTitle}>Baza produktów pod ręką.</b> Koniec z nerwowym
                  sprawdzaniem tabelek w internecie przed każdym kęsem. Wszystko masz w jednym
                  miejscu.
                </p>
              </Reveal>
              <div className={s.list}>
                {foodFeatures.map((f, i) => (
                  <Reveal key={f.title} delay={i * 80} className={s.listItem}>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={120} className={s.foodArt}>
              <div className={s.foodGlow} aria-hidden="true" />
              <Phone src="/v2/recipes.jpg" alt="Lista przepisów low-FODMAP z kaloriami i makro" className={s.tiltRight} />
              {(["quinoa", "ananas", "herbata"] as const).map((f, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={f}
                  src={asset(`/foods/${f}.png`)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`${s.foodBubble} ${s[`foodBubble${i + 1}`]}`}
                />
              ))}
            </Reveal>
          </div>

          <Reveal>
            <ul className={s.foods} aria-label="Przykładowe produkty z przewodnika">
              {foods.map((f) => (
                <li key={f.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(`/foods/${f.img}.png`)} alt="" loading="lazy" />
                  <b>{f.name}</b>
                  <small>{f.cat}</small>
                  <span className={`${s.level} ${s[`level_${f.level}`]}`}>{levelLabel[f.level]}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PLANNER STORY */}
      <section className={s.planner} id="planer">
        <div className={s.wrap}>
          <Reveal>
            <p className={s.kicker}>Planer</p>
            <h2 className={s.h2}>
              Od przepisu
              <br />
              <span className={s.mark}>do koszyka.</span>
            </h2>
          </Reveal>
          <StoryScroll steps={story} />
        </div>
      </section>

      {/* QUICK ENTRY TABS (from version A) */}
      <section className={s.tabsSection}>
        <div className={s.wrap}>
          <Reveal>
            <p className={`${s.kicker} ${s.center}`}>Objawy i suplementy</p>
            <h2 className={`${s.h2} ${s.center}`}>
              Wpis w kilka sekund,
              <br />
              <span className={s.mark}>jednym dotknięciem</span>
            </h2>
            <p className={`${s.sub} ${s.center} ${s.subCenter}`}>
              Każdy objaw ma własny, prosty ekran. Zamiast pisać notatki, przesuwasz suwak albo
              wybierasz obrazek, a wpis od razu trafia do dnia z godziną.
            </p>
          </Reveal>
          <FeatureTabs screens={{ pain: "/v2/pain.jpg", bloating: "/v2/bloating.jpg" }} />
        </div>
      </section>

      {/* QUICK ADD SCENE */}
      <section className={s.scene}>
        <div className={s.sceneInner}>
          <Reveal className={s.scenePhoneWrap}>
            <Phone src="/v2/quickadd.jpg" alt="Panel Szybkie dodawanie z 11 kafelkami wpisów" className={s.scenePhone} />
            <Phone src="/v2/pain.jpg" alt="Ekran Ból: natężenie 4 na 10 i rodzaj bólu" className={s.scenePhoneBack} />
          </Reveal>
          <div className={s.sceneCopy}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Szybkie dodawanie</p>
              <p className={s.sceneBig}>
                Toaleta. Gazy. Wzdęcia. Ból. Stres. Woda. Kroki. <span>Posiłek. Przepis. Leki.</span>
              </p>
              <p className={s.sceneLead}>
                Brzuch nie czeka, aż znajdziesz chwilę na notatki. Wpis robisz od razu: w kolejce, w
                pracy, w środku nocy. Zanim schowasz telefon, jest już zapisany.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className={s.sceneStats}>
                <li>
                  <b>10+</b>
                  <span>możliwości szybkiego wpisu</span>
                </li>
                <li>
                  <b>1</b>
                  <span>dotknięcie, żeby zacząć</span>
                </li>
                <li>
                  <b>0</b>
                  <span>pisania notatek</span>
                </li>
              </ul>
              <div className={s.sceneCta}>
                <StoreBadges href={DOWNLOAD} />
                <a href="#raporty" className={s.sceneLink}>
                  Zobacz raport tygodnia <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FODMAP (dark) */}
      <section className={s.dark} id="fodmap">
        <div className={s.wrap}>
          <div className={s.fodmapHead}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>FODMAP pod kontrolą</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>
                Sprawdź porcję,
                <br />
                <span className={s.limeText}>zanim zjesz.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.bodyLight}>
                Każdy produkt i każdy posiłek ma wykres pięciu grup FODMAP. Przerywany pierścień to
                limit na jeden posiłek: zielony kształt mieści się w nim, czerwony wychodzi poza.
                Przesuń suwak i sprawdź sam.
              </p>
            </Reveal>
          </div>
          <div className={s.fodmapGrid}>
            <Reveal>
              <FodmapPlayground />
            </Reveal>
            <Reveal delay={120} className={s.fodmapShots}>
              <Phone src="/v2/portion.jpg" alt="Wykres FODMAP porcji marchwi: w limicie" className={s.tilt} />
              <figure className={s.overCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/v2/fodmap-over.jpg")} alt="Produkt ponad limit FODMAP: sorbitol 0,28 g przy porcji 142 g" loading="lazy" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className={s.plans} id="plany">
        <div className={s.wrap}>
          <Reveal>
            <p className={`${s.kicker} ${s.center}`}>Plany</p>
            <h2 className={`${s.h2} ${s.center}`}>
              Zacznij za darmo.
              <br />
              <span className={s.mark}>Odblokuj, kiedy zechcesz.</span>
            </h2>
          </Reveal>
          <div className={s.planGrid}>
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className={`${s.plan} ${s[`plan${p.name}`]}`}>
                <span className={s.planTag}>{p.tag}</span>
                <h3>{p.name}</h3>
                <p className={s.planLead}>{p.lead}</p>
                <p className={s.planIntro}>{p.intro}</p>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className={s.compare}>
            <h3 className={s.compareTitle}>Porównaj wszystkie funkcje</h3>
            <table className={s.compareTable}>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Funkcja</span>
                  </th>
                  <th scope="col">Free</th>
                  <th scope="col" className={s.colStandard}>Standard</th>
                  <th scope="col" className={s.colPremium}>Premium</th>
                </tr>
              </thead>
              {comparison.map((g) => (
                <tbody key={g.group}>
                  <tr className={s.groupRow}>
                    <th scope="colgroup" colSpan={4}>
                      {g.group}
                    </th>
                  </tr>
                  {g.rows.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">
                        {r.label}
                        {r.hint && <small>{r.hint}</small>}
                      </th>
                      {r.cells.map((c, i) => (
                        <td key={i} className={i === 1 ? s.colStandard : i === 2 ? s.colPremium : undefined}>
                          {c === true ? (
                            <span className={s.yes} aria-label="tak">✓</span>
                          ) : c === false ? (
                            <span className={s.no} aria-label="nie">–</span>
                          ) : (
                            <span className={s.val}>{c}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </Reveal>
          <p className={s.planNote}>Zaproś znajomego: oboje dostajecie 7 dni Premium.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.faq} id="faq">
        <div className={s.wrap}>
          <p className={s.kicker}>FAQ</p>
          <h2 className={s.h2}>
            Masz pytania?
            <br />
            <span className={s.mark}>Mamy odpowiedzi.</span>
          </h2>
          <div className={s.faqList}>
            {faq.map((f, i) => (
              <details key={f.q}>
                <summary>
                  <span className={s.faqNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.faqQ}>{f.q}</span>
                  <span className={s.faqPlus} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA (from version A) */}
      <section className={s.closing} id="pobierz">
        <div className={s.closingGlow} aria-hidden="true" />
        <div className={s.closingInner}>
          <Reveal>
            <h2 className={s.closingTitle}>
              Zapisuj na bieżąco.
              <br />
              <span>Rozmawiaj z lekarzem konkretnie.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={s.closingLead}>
              Zamiast odtwarzać z pamięci ostatnie tygodnie, otwierasz raport i pokazujesz, kiedy
              było gorzej i jakie posiłki oraz suplementy były wtedy w planie dnia.
            </p>
          </Reveal>
          <Reveal delay={180} className={s.closingCta}>
            <LogoMark size={72} variant="reversed" />
            <StoreBadges href={DOWNLOAD} className={s.closingBadges} />
            <small>Dostępna za darmo do pobrania na iPhone&rsquo;a i Androida.</small>
          </Reveal>
          <Phone src="/v2/today.jpg" alt="" className={s.closingPhone} />
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.footerTop}>
          <div className={s.brand}>
            <LogoMark size={28} />
            <span>
              <b>Sibo</b> Diary
            </span>
          </div>
          <nav className={s.footerLinks} aria-label="Stopka">
            <a href="#funkcje">Funkcje</a>
            <a href="#plany">Plany</a>
            <a href="#faq">FAQ</a>
            <a href="#">Polityka prywatności</a>
          </nav>
          <a href="#" className={s.toTop}>
            Do góry ↑
          </a>
        </div>
        <div className={s.footerBottom}>
          <AuthorCredit />
          <span className={s.copyright}>© {new Date().getFullYear()} Sibo Diary</span>
          <span>Sibo Diary nie jest wyrobem medycznym i nie zastępuje porady lekarza.</span>
        </div>
      </footer>

      <VariantSwitch active="b" />
    </div>
  );
}
