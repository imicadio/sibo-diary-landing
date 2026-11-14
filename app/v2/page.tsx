import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { FeatureTabs } from "@/components/v2/FeatureTabs";
import { StoreBadges } from "@/components/StoreBadges";
import { SiteNav } from "@/components/v2/SiteNav";
import { AuthorCredit } from "@/components/AuthorCredit";
import { VariantSwitch } from "@/components/VariantSwitch";
import { asset } from "@/lib/asset";
import s from "./v2.module.css";

const DOWNLOAD = "#pobierz";

const sources = ["Apple Watch", "Garmin", "Samsung", "Fitbit", "Amazfit", "Xiaomi"];

const highlights = [
  { icon: "＋", title: "Wpis jednym dotknięciem", sub: "szybkie dodawanie" },
  { icon: "🍌", title: "Przewodnik FODMAP", sub: "produkty i porcje" },
  { icon: "📊", title: "Raport tygodnia", sub: "objawy obok posiłków" },
  { icon: "⌚", title: "Kroki i sen", sub: "z telefonu i zegarka" },
];

const foodFeatures = [
  {
    title: "Przewodnik po produktach",
    text: "Wpisz „banan” i zobacz poziom FODMAP, bezpieczną porcję i rozbicie na fruktany, GOS, laktozę, sorbitol i mannitol. Serduszko dodaje produkt do ulubionych.",
  },
  {
    title: "Jadłospis i plan dnia",
    text: "Przepisy low-FODMAP z kaloriami i makro. Dodaj posiłek do planu, odhacz, gdy zjesz, albo wymień na inny. Plan dnia możesz powtarzać co tydzień.",
  },
  {
    title: "Twoje cele i limity",
    text: "Ustaw kalorie i makro, limity FODMAP, kroki, wodę i sen. Paski na ekranie dnia pokazują, ile zostało do celu.",
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

const faq = [
  {
    q: "Czy aplikacja jest darmowa?",
    a: "Tak, dziennik objawów, toalety, posiłków i nawodnienia jest darmowy. Informację o ewentualnych funkcjach płatnych podamy przed premierą w sklepach.",
  },
  {
    q: "Czy Sibo Diary stawia diagnozę?",
    a: "Nie. To dziennik, a nie wyrób medyczny. Pomaga zebrać dane do rozmowy z lekarzem lub dietetykiem, ale diagnozę i leczenie zawsze ustala specjalista.",
  },
  {
    q: "Jak połączyć zegarek?",
    a: "Otwórz kafelek Kroki albo Sen i dotknij „Połącz”. Aplikacja czyta dane z Apple Zdrowie na iPhonie i z Health Connect na Androidzie, więc działa z większością zegarków. Kroki i sen zawsze możesz też dopisać ręcznie.",
  },
  {
    q: "Czy muszę być na diecie low-FODMAP?",
    a: "Nie. Przewodnik po produktach i jadłospis pomagają, jeśli jesteś na tej diecie, ale sam dziennik objawów i toalety działa niezależnie od tego, co jesz.",
  },
  {
    q: "Gdzie są przechowywane moje dane?",
    a: "Na Twoim koncie, w szyfrowanej bazie. Dane zdrowotne nie są sprzedawane ani udostępniane reklamodawcom, a konto możesz usunąć razem z danymi.",
  },
  {
    q: "Jak wrócić do przewodnika po aplikacji?",
    a: "Krótki przewodnik pojawia się po pierwszym logowaniu. Możesz go pominąć i obejrzeć później w Ustawieniach.",
  },
];

function Phone({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${s.phone} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt} loading="lazy" />
    </div>
  );
}

export default function V2() {
  return (
    <div className={s.page}>
      <SiteNav downloadHref={DOWNLOAD} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroTitle}>
          <LogoMark size={88} />
          <h1>Sibo Diary</h1>
          <StoreBadges href={DOWNLOAD} className={s.heroBadges} />
        </div>
        <Phone src="/screens/today.jpg" alt="Ekran Dziennik: kalendarz tygodnia, postęp, kroki, sen i woda" className={s.heroPhone} />
        <div className={s.heroCopy}>
          <p className={s.heroQuote}>
            Objawy, toaleta, posiłki, suplementy, woda, kroki i sen w jednym dzienniku.
          </p>
          <p className={s.heroQuoteSub}>
            Zapisujesz w kilka sekund, a po tygodniu widzisz, co dzieje się z Twoimi jelitami.
          </p>
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
      </section>

      {/* INTRO */}
      <section className={s.intro} id="funkcje">
        <div className={s.wrap}>
          <div className={s.split}>
            <Reveal className={s.introPhoneWrap}>
              <Phone src="/screens/toilet.jpg" alt="Ekran Toaleta: skala Bristol, kolor i wielkość" className={s.tilt} />
            </Reveal>
            <Reveal delay={120}>
              <p className={`${s.sceneKicker} ${s.kickerDark}`}>Dziennik dnia</p>
              <h2 className={s.h2}>
                Poznaj rytm
                <br />
                <span className={s.accentSea}>swoich jelit.</span>
              </h2>
              <p className={s.sub}>
                Gazy, wzdęcia, ból, stres i wypróżnienia zapisane z godziną i nasileniem, dzień po
                dniu.
              </p>
              <p className={s.body}>
                Sibo Diary to dziennik stworzony dla osób z SIBO. Każdy wpis trafia do dnia
                wybranego w kalendarzu, a zielone kółko przy dacie pokazuje, że ten dzień ma wpisy.
                Dzięki temu po kilku tygodniach nie musisz zgadywać, kiedy było gorzej i co wtedy
                było na talerzu — wszystko jest w jednym miejscu, gotowe do rozmowy z lekarzem.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HEALTH (dark) */}
      <section className={s.dark} id="zegarek">
        <div className={s.wrap}>
          <div className={s.split}>
            <Reveal>
              <p className={s.sceneKicker}>Kroki, sen i woda</p>
              <h2 className={`${s.h2} ${s.h2Light}`}>
                Zegarek liczy,
                <br />
                <span className={s.accentMint}>dziennik pamięta.</span>
              </h2>
              <p className={s.bodyLight}>
                Połącz aplikację z Apple Zdrowie albo Health Connect, a kroki i sen pobiorą się
                same — z długością nocy, godziną zaśnięcia i pobudki oraz fazami snu. Wodę dodajesz
                szklanka po szklance. Cele ustawiasz w Ustawieniach.
              </p>
              <ul className={s.sources}>
                {sources.map((src) => (
                  <li key={src}>{src}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className={s.cropWrap}>
              <div className={s.crop}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/screens/today.jpg")} alt="Kafelki Kroki, Sen i Woda w aplikacji" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK FEATURES */}
      <section className={s.light}>
        <div className={s.wrap}>
          <Reveal>
            <p className={`${s.sceneKicker} ${s.kickerDark} ${s.center}`}>Objawy i suplementy</p>
            <h2 className={`${s.h2} ${s.center}`}>
              Wpis w kilka sekund,
              <br />
              <span className={s.accentSea}>jednym dotknięciem</span>
            </h2>
            <p className={`${s.sub} ${s.center} ${s.subCenter}`}>
              Każdy objaw ma własny, prosty ekran. Zamiast pisać notatki, przesuwasz suwak albo
              wybierasz obrazek — a wpis od razu trafia do dnia z godziną.
            </p>
          </Reveal>
          <FeatureTabs />
        </div>
        <div className={s.scene}>
          <div className={s.sceneInner}>
            <Phone src="/screens/quickadd.jpg" alt="Panel Szybkie dodawanie z kafelkami wpisów" className={s.scenePhone} />
            <div className={s.sceneCopy}>
              <p className={s.sceneKicker}>Szybkie dodawanie</p>
              <p className={s.sceneBig}>Toaleta. Gazy. Wzdęcia. Ból. Stres. Woda. Kroki. Posiłek.</p>
            </div>
            <div className={s.sceneFoods} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/foods/banana.png")} alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/foods/ananas.png")} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOD (dark) */}
      <section className={s.dark} id="jedzenie">
        <div className={s.wrap}>
          <div className={s.foodGrid}>
            <div>
              <Reveal>
                <p className={s.sceneKicker}>Przewodnik i jadłospis</p>
                <h2 className={`${s.h2} ${s.h2Light}`}>
                  Jedzenie,
                  <br />
                  <span className={s.accentMint}>które Ci służy.</span>
                </h2>
                <p className={`${s.bodyLight} ${s.foodLead}`}>
                  Przewodnik po produktach, przepisy low-FODMAP i plan dnia w jednej zakładce. Bez
                  szukania w tabelach i notatkach.
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
              <Phone src="/screens/meals.jpg" alt="Ekran Jadłospis z przepisami low-FODMAP" className={s.tiltRight} />
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

      {/* REPORTS */}
      <section className={s.intro} id="raporty">
        <div className={s.wrap}>
          <div className={`${s.split} ${s.splitFlip}`}>
            <Reveal delay={120} className={s.introPhoneWrap}>
              <Phone src="/screens/reports.jpg" alt="Ekran Raporty: podsumowanie tygodnia" className={s.tiltRight} />
            </Reveal>
            <Reveal>
              <p className={`${s.sceneKicker} ${s.kickerDark}`}>Raporty</p>
              <h2 className={s.h2}>
                Tydzień
                <br />
                <span className={s.accentSea}>w jednym widoku.</span>
              </h2>
              <p className={s.sub}>
                Raport pokazuje dni z wpisami oraz posiłki, objawy i wypróżnienia na jednej siatce.
              </p>
              <p className={s.body}>
                Im ciemniejsze pole, tym silniejszy objaw. Obok widać posiłki, leki i suplementy
                przyjęte przed wypróżnieniami, więc łatwiej zauważyć, co się powtarza. Wykresy pod
                spodem pokazują, jak zmieniało się samopoczucie z tygodnia na tydzień.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.faq} id="faq">
        <div className={s.wrap}>
          <p className={`${s.sceneKicker} ${s.kickerDark}`}>FAQ</p>
          <h2 className={s.h2}>
            Masz pytania?
            <br />
            <span className={s.accentSea}>Mamy odpowiedzi.</span>
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
            <small>Darmowa aplikacja na iPhone&rsquo;a i Androida.</small>
          </Reveal>
          <Phone src="/screens/today.jpg" alt="" className={s.closingPhone} />
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
            <a href="#faq">FAQ</a>
            <a href={DOWNLOAD}>Pobierz</a>
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
