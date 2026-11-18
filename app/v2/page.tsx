import type { Metadata } from "next";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { SiteNav } from "@/components/SiteNav";
import { AuthorCredit } from "@/components/AuthorCredit";
import { VariantSwitch } from "@/components/VariantSwitch";
import { StoryScroll, type StoryStep } from "@/components/v2/StoryScroll";
import { FodmapPlayground } from "@/components/v2/FodmapPlayground";
import { HeroPhones } from "@/components/v2/HeroPhones";
import { CountUp } from "@/components/v2/CountUp";
import { asset } from "@/lib/asset";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Sibo Diary — dziennik objawów SIBO, plan posiłków i przepisy low-FODMAP",
  description:
    "Objawy, toaleta, posiłki, suplementy, woda, kroki i sen w jednym dzienniku. Plan posiłków, lista zakupów, wykres FODMAP, ponad 500 przepisów low-FODMAP i raport PDF dla lekarza.",
};

const DOWNLOAD = "#pobierz";

const navLinks = [
  { href: "#funkcje", label: "Funkcje" },
  { href: "#planer", label: "Planer" },
  { href: "#fodmap", label: "FODMAP" },
  { href: "#przepisy", label: "Przepisy" },
  { href: "#raporty", label: "Raporty" },
  { href: "#faq", label: "FAQ" },
];

const highlights = [
  { icon: "＋", title: "Wpis jednym dotknięciem", sub: "szybkie dodawanie" },
  { icon: "🍌", title: "Przewodnik FODMAP", sub: "produkty i porcje" },
  { icon: "📊", title: "Raport tygodnia", sub: "objawy obok posiłków" },
  { icon: "⌚", title: "Kroki i sen", sub: "z telefonu i zegarka" },
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

const recipeFacts = [
  { icon: "🔥", title: "Kalorie i makro", text: "białko, tłuszcz i węglowodany w porcji" },
  { icon: "⏱️", title: "Czas przygotowania", text: "od 5-minutowych koktajli po obiady" },
  { icon: "🛒", title: "Składniki do koszyka", text: "jednym przyciskiem na listę zakupów" },
  { icon: "📶", title: "Także offline", text: "przepisy zapisują się na telefonie" },
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
    q: "Jak połączyć zegarek?",
    a: "Otwórz kafelek Kroki albo Sen i dotknij „Połącz”. Aplikacja czyta dane z Apple Zdrowie na iPhonie i z Health Connect na Androidzie, więc działa z większością zegarków. Kroki i sen zawsze możesz też dopisać ręcznie.",
  },
];

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`${s.phone} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt} loading="lazy" />
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
              Dziennik objawów przy SIBO
            </p>
            <h1 className={s.heroTitle}>
              <span className={s.line}>
                <span>Zapisuj objawy.</span>
              </span>
              <span className={s.line}>
                <span className={s.lime}>Zobacz, co Ci służy.</span>
              </span>
            </h1>
            <p className={s.heroLead}>
              Objawy, toaleta, posiłki, suplementy, woda, kroki i sen w jednym dzienniku. Do tego
              plan posiłków, lista zakupów i ponad 500 przepisów low-FODMAP. Po kilku tygodniach
              widzisz, co się powtarza, a lekarzowi pokazujesz raport.
            </p>
            <div className={s.heroCta}>
              <StoreBadges href={DOWNLOAD} />
              <small>Dostępna za darmo do pobrania na iPhone&rsquo;a i Androida.</small>
            </div>
          </div>

          <div className={s.heroStage}>
            <HeroPhones />
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
                Po tygodniu mało kto pamięta, który dzień był gorszy i co było wtedy na obiad.
                Dlatego zapisujesz na bieżąco, a po kilku tygodniach widać, co się powtarza. Na
                wizycie pokazujesz lekarzowi konkretne dni, zamiast mówić „raz lepiej, raz gorzej”.
              </p>
            </Reveal>
          </div>
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
              <p className={s.giantLabel}>ponad</p>
              <p className={s.giant}>
                <CountUp to={500} />
              </p>
              <h2 className={s.h2Small}>
                przepisów <span className={s.nowrap}>low-FODMAP</span> w aplikacji
              </h2>
              <p className={s.body}>
                Śniadania, obiady, kolacje, zupy, koktajle i desery. Filtrujesz po kategorii, czasie,
                kaloriach albo makro, ulubione oznaczasz serduszkiem, a własne przepisy dodajesz sam.
              </p>
              <ul className={s.recipeFacts}>
                {recipeFacts.map((f) => (
                  <li key={f.title}>
                    <span aria-hidden="true">{f.icon}</span>
                    <b>{f.title}</b>
                    <small>{f.text}</small>
                  </li>
                ))}
              </ul>
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
        <div className={s.wrap}>
          <Reveal className={s.recipeCta}>
            <div>
              <p className={s.recipeCtaTitle}>
                Ponad 500 przepisów czeka w aplikacji.
              </p>
              <p className={s.recipeCtaText}>
                Pobierz Sibo Diary za darmo i ułóż pierwszy dzień jeszcze dziś.
              </p>
            </div>
            <StoreBadges href={DOWNLOAD} />
          </Reveal>
        </div>
      </section>

      {/* REPORTS */}
      <section className={s.intro} id="raporty">
        <div className={s.wrap}>
          <div className={`${s.split} ${s.splitFlip}`}>
            <Reveal delay={120} className={s.introPhoneWrap}>
              <div className={s.introGlow} aria-hidden="true" />
              <Phone src="/v2/reports.jpg" alt="Ekran Raporty: podsumowanie tygodnia i przycisk Wyeksportuj PDF" className={s.tiltRight} />
            </Reveal>
            <Reveal>
              <p className={s.kicker}>Raporty</p>
              <h2 className={s.h2}>
                Tydzień
                <br />
                <span className={s.mark}>w jednym widoku.</span>
              </h2>
              <p className={s.sub}>
                Raport pokazuje dni z wpisami oraz posiłki, objawy i wypróżnienia na jednej siatce.
              </p>
              <p className={s.body}>
                Im ciemniejsze pole, tym silniejszy objaw. Obok widać posiłki, leki i suplementy
                przyjęte przed wypróżnieniami, więc łatwiej zauważyć, co się powtarza. Przed wizytą
                zapisujesz cały tydzień jako PDF i wysyłasz go lekarzowi albo drukujesz.
              </p>
              <p className={s.pdfNote}>
                <span aria-hidden="true">PDF</span>
                Wyeksportuj PDF: siatka objawów, średnie i skala Bristol na jednej stronie
              </p>
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
