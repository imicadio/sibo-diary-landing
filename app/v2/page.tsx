import type { Metadata } from "next";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { SiteNav } from "@/components/SiteNav";
import { AuthorCredit } from "@/components/AuthorCredit";
import { VariantSwitch } from "@/components/VariantSwitch";
import { StoryScroll, type StoryStep } from "@/components/v2/StoryScroll";
import { FodmapPlayground } from "@/components/v2/FodmapPlayground";
import { CountUp } from "@/components/v2/CountUp";
import { asset } from "@/lib/asset";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Sibo Diary — dziennik SIBO, plan posiłków i lista zakupów",
  description:
    "Dziennik objawów przy SIBO, plan dnia, lista zakupów z przepisów, wykres FODMAP produktu i posiłku, ponad 500 przepisów low-FODMAP i raport PDF dla lekarza.",
};

const DOWNLOAD = "#pobierz";

const navLinks = [
  { href: "#nowosci", label: "Nowości" },
  { href: "#planer", label: "Planer" },
  { href: "#fodmap", label: "FODMAP" },
  { href: "#przepisy", label: "Przepisy" },
  { href: "#raport", label: "Raport PDF" },
];

const ticker = [
  "Lista zakupów",
  "Plan dnia",
  "FODMAP posiłku",
  "Raport PDF",
  "500+ przepisów",
  "Nowy wygląd",
  "Przypomnienia",
  "Kroki i sen z zegarka",
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
    title: "Zmień gramy, zobacz FODMAP.",
    text: "Dotknij składnika w posiłku i ustaw ilość co 1 g. Wykres FODMAP, kalorie i makro przeliczają się od razu, zanim cokolwiek zapiszesz.",
    points: ["Licznik − / +", "Wykres pięciu grup", "Reset do przepisu"],
    img: "/v2/portion.jpg",
    alt: "Arkusz porcji marchwi z wykresem FODMAP i makro",
  },
  {
    kicker: "Lista zakupów",
    title: "Zakupy spisują się same.",
    text: "„Dodaj z planu tygodnia” zbiera składniki ze wszystkich zaplanowanych posiłków i sumuje powtórki. W sklepie odhaczasz to, co już jest w koszyku.",
    points: ["Z przepisu albo z całego tygodnia", "Podpowiedzi z katalogu", "Własne pozycje"],
    img: "/v2/shopping.jpg",
    alt: "Lista zakupów z 11 produktami do kupienia",
  },
];

const recipeRows = [
  ["Śniadanie", "Obiad", "Kolacja", "Koktajl", "Zupa", "Sałatka", "Deser", "Przekąska", "Drugie śniadanie"],
  [
    "Omlet z malinami i płatkami migdałów · 401 kcal",
    "Łosoś z surówką z marchewki i kaszą jaglaną · 25 min",
    "Pulpeciki z indyka z ziemniakami i mizerią · 574 kcal",
    "Koktajl bananowo-orzechowy z chia · 5 min",
    "Sałatka nicejska · 202 kcal",
  ],
];

const diaryTiles = [
  ["🚻", "Toaleta"],
  ["💨", "Gazy"],
  ["🫧", "Wzdęcia"],
  ["🩹", "Ból"],
  ["🧠", "Stres"],
  ["💧", "Woda"],
  ["👟", "Kroki"],
  ["🍽️", "Testy"],
  ["🥗", "Posiłek"],
  ["📖", "Przepis"],
  ["💊", "Leki"],
];

const plans = [
  {
    name: "Free",
    tag: "na zawsze",
    lead: "Wszystko, żeby zacząć prowadzić dziennik.",
    items: [
      "Dziennik objawów, toalety, wody, kroków i snu",
      "Katalog FODMAP i bezpieczne porcje",
      "Przepisy low-FODMAP",
      "Planer na dziś i jutro, do 4 posiłków",
      "Leki i przypomnienia o lekach",
    ],
  },
  {
    name: "Standard",
    tag: "najczęściej wybierany",
    lead: "Dla tych, którzy planują cały tydzień.",
    items: [
      "Plan posiłków na cały tydzień",
      "Kopiowanie dnia i powtarzanie co tydzień",
      "Limity FODMAP dopasowane do etapu diety",
      "FODMAP porcji na wykresie",
      "Do 6 posiłków dziennie",
    ],
  },
  {
    name: "Premium",
    tag: "pełnia możliwości",
    lead: "Zakupy, raporty i bez limitów.",
    items: [
      "Lista zakupów z przepisów i planu tygodnia",
      "Raport PDF dla lekarza i dietetyczki",
      "Filtry przepisów po czasie, kaloriach i makro",
      "Porównanie tygodni",
      "Bez limitu posiłków, przekąsek i napojów",
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
    q: "Czy przepisy działają bez internetu?",
    a: "Tak. Katalog produktów i przepisy zapisują się na telefonie, więc wyszukiwanie i filtry działają także offline.",
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
        <div className={s.blobs} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={s.heroInner}>
          <div className={s.heroCopy}>
            <p className={s.heroPill}>
              <span className={s.pulse} aria-hidden="true" />
              Nowa wersja: plan dnia, lista zakupów i raport PDF
            </p>
            <h1 className={s.heroTitle}>
              <span className={s.line}>
                <span>Wiesz, co zjeść.</span>
              </span>
              <span className={s.line}>
                <span className={s.lime}>Wiesz, co kupić.</span>
              </span>
            </h1>
            <p className={s.heroLead}>
              Sibo Diary to dziennik objawów przy SIBO, a teraz też planer posiłków z listą
              zakupów, wykresem FODMAP i ponad 500 przepisami. Na wizytę zabierasz raport PDF.
            </p>
            <div className={s.heroCta}>
              <StoreBadges href={DOWNLOAD} />
              <small>Plan Free za darmo · iPhone i Android</small>
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
        </div>
      </section>

      {/* TICKER */}
      <div className={s.ticker} aria-label="Nowości w aplikacji">
        <div className={s.tickerTrack}>
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1 ? true : undefined}>
              {ticker.map((t) => (
                <li key={t}>
                  <span aria-hidden="true">✦</span> {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* WHAT'S NEW — BENTO */}
      <section className={s.news} id="nowosci">
        <div className={s.wrap}>
          <Reveal>
            <p className={s.kicker}>Co nowego</p>
            <h2 className={s.h2}>
              Sześć nowości,
              <br />
              <span className={s.mark}>jeden dziennik.</span>
            </h2>
          </Reveal>

          <div className={s.bento}>
            <Reveal className={`${s.tile} ${s.tileShop}`}>
              <span className={s.tileTag}>Premium</span>
              <h3>Lista zakupów</h3>
              <p>Z przepisu jednym przyciskiem albo z całego planu tygodnia. Dwa razy łosoś po 120 g to na liście 240 g.</p>
              <ul className={s.miniList} aria-hidden="true">
                <li>Łosoś świeży <b>240 g</b></li>
                <li>Kasza jaglana <b>120 g</b></li>
                <li className={s.checked}>Marchew <b>90 g</b></li>
                <li>Maliny <b>60 g</b></li>
              </ul>
            </Reveal>

            <Reveal className={`${s.tile} ${s.tilePlan}`} delay={80}>
              <h3>Plan dnia</h3>
              <p>Posiłki z godzinami, odhaczanie zjedzonych i „Wymień” na inny przepis.</p>
              <div className={s.miniPlan} aria-hidden="true">
                <span className={s.done}>08:00 · Omlet z malinami</span>
                <span>16:00 · Łosoś z kaszą</span>
                <span>20:00 · Sałatka nicejska</span>
              </div>
            </Reveal>

            <Reveal className={`${s.tile} ${s.tileFodmap}`} delay={120}>
              <h3>FODMAP produktu i posiłku</h3>
              <p>Wykres pięciu grup FODMAP dla porcji. Od razu widać, czy mieścisz się w limicie.</p>
              <svg viewBox="0 0 120 120" className={s.miniRadar} aria-hidden="true">
                <polygon points="60,10 107,44 89,100 31,100 13,44" />
                <polygon points="60,35 84,52 75,80 45,80 36,52" className={s.miniLimit} />
                <polygon points="60,22 74,55 66,72 52,76 44,54" className={s.miniShape} />
              </svg>
            </Reveal>

            <Reveal className={`${s.tile} ${s.tilePdf}`} delay={80}>
              <span className={s.tileTag}>Premium</span>
              <h3>Raport PDF</h3>
              <p>Tydzień objawów na jednej stronie, gotowy do wysłania lekarzowi.</p>
              <span className={s.pdfIcon} aria-hidden="true">PDF</span>
            </Reveal>

            <Reveal className={`${s.tile} ${s.tileRecipes}`} delay={120}>
              <p className={s.bigNum}>
                <CountUp to={500} suffix="+" />
              </p>
              <h3>przepisów low-FODMAP</h3>
              <p>Śniadania, obiady, zupy, koktajle i desery. Działają bez internetu.</p>
            </Reveal>

            <Reveal className={`${s.tile} ${s.tileDesign}`} delay={160}>
              <h3>Nowy wygląd</h3>
              <p>Kolorowe kafelki, wspólny dzień w Dzienniku i Planerze, podpowiedzi przy pierwszym wejściu.</p>
              <div className={s.swatches} aria-hidden="true">
                <span style={{ background: "#84cc16" }} />
                <span style={{ background: "#e8725a" }} />
                <span style={{ background: "#3f3d8f" }} />
                <span style={{ background: "#2b8db3" }} />
              </div>
            </Reveal>
          </div>
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

      {/* RECIPES */}
      <section className={s.recipes} id="przepisy">
        <div className={s.wrap}>
          <div className={s.recipesGrid}>
            <Reveal className={s.recipesCopy}>
              <p className={s.kicker}>Przepisy</p>
              <p className={s.giant}>
                <CountUp to={500} suffix="+" />
              </p>
              <h2 className={s.h2Small}>przepisów low-FODMAP w aplikacji</h2>
              <p className={s.body}>
                Każdy z kaloriami, makro, czasem przygotowania i listą składników. Filtrujesz po
                kategorii, czasie, kaloriach albo makro, a ulubione oznaczasz serduszkiem. Własne
                przepisy też dodasz.
              </p>
            </Reveal>
            <Reveal delay={120} className={s.recipesPhones}>
              <Phone src="/v2/recipes.jpg" alt="Lista przepisów z kaloriami i makro" className={s.recipesBack} />
              <Phone src="/v2/meal.jpg" alt="Szczegóły posiłku: łosoś z surówką i kaszą jaglaną" className={s.recipesFront} />
            </Reveal>
          </div>
        </div>
        <div className={s.marquees} aria-hidden="true">
          {recipeRows.map((row, r) => (
            <div key={r} className={`${s.marquee} ${r === 1 ? s.marqueeReverse : ""}`}>
              <div className={s.marqueeTrack}>
                {[...row, ...row, ...row, ...row].map((item, i) => (
                  <span key={i} className={r === 0 ? s.chip : s.recipeChip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PDF REPORT */}
      <section className={s.report} id="raport">
        <div className={s.wrap}>
          <div className={s.reportGrid}>
            <Reveal className={s.reportArt}>
              <Phone src="/v2/reports.jpg" alt="Ekran Raporty z przyciskiem Wyeksportuj PDF" className={s.reportPhone} />
              <figure className={s.sheet}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/v2/report-pdf.jpg")} alt="Pierwsza strona raportu PDF: siatka objawów, średnie i skala Bristol" loading="lazy" />
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <p className={s.kicker}>Raport PDF</p>
              <h2 className={s.h2}>
                Na wizytę
                <br />
                <span className={s.mark}>z jedną kartką.</span>
              </h2>
              <p className={s.body}>
                Raport tygodnia zapisujesz jako PDF jednym przyciskiem. Lekarz widzi siatkę
                posiłków, objawów i wypróżnień dzień po dniu, średnie i maksima objawów oraz
                rozkład typów w skali Bristol.
              </p>
              <ul className={s.stats}>
                <li>
                  <b>7</b>
                  <span>dni na jednej siatce</span>
                </li>
                <li>
                  <b>7</b>
                  <span>typów w skali Bristol</span>
                </li>
                <li>
                  <b>1</b>
                  <span>przycisk do eksportu</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIARY */}
      <section className={s.diary} id="dziennik">
        <div className={s.wrap}>
          <div className={s.diaryGrid}>
            <Reveal>
              <p className={`${s.kicker} ${s.kickerLight}`}>Dziennik objawów</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>
                Jeden plus,
                <br />
                <span className={s.limeText}>11 rodzajów wpisu.</span>
              </h2>
              <p className={s.bodyLight}>
                Zielony plus otwiera szybkie dodawanie z każdego ekranu. Ból oceniasz na suwaku
                0–10, wzdęcia na obrazkach, wypróżnienia w skali Bristol. Kroki i sen pobiorą się
                same z Apple Zdrowie albo Health Connect.
              </p>
              <ul className={s.tiles}>
                {diaryTiles.map(([icon, label], i) => (
                  <li key={label} style={{ ["--i" as string]: i }}>
                    <span aria-hidden="true">{icon}</span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className={s.diaryPhones}>
              <Phone src="/v2/quickadd.jpg" alt="Panel Szybkie dodawanie z 11 kafelkami" className={s.diaryBack} />
              <Phone src="/v2/pain.jpg" alt="Ekran Ból: natężenie 4 na 10 i rodzaj bólu" className={s.diaryFront} />
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
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
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

      {/* CLOSING CTA */}
      <section className={s.closing} id="pobierz">
        <div className={s.blobs} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={s.closingInner}>
          <Reveal>
            <LogoMark size={72} variant="reversed" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className={s.closingTitle}>
              Zaplanuj jutro.
              <br />
              <span className={s.limeText}>Zapisz dziś.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className={s.closingLead}>
              Plan dnia, lista zakupów i dziennik objawów w jednej aplikacji. Zacznij od planu Free.
            </p>
          </Reveal>
          <Reveal delay={220} className={s.closingCta}>
            <StoreBadges href={DOWNLOAD} />
          </Reveal>
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
            <a href="#nowosci">Nowości</a>
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
