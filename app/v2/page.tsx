import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";
import { VariantSwitch } from "@/components/VariantSwitch";
import { asset } from "@/lib/asset";
import s from "./v2.module.css";

const DOWNLOAD = "#pobierz";

const sources = [
  "Apple Zdrowie",
  "Health Connect",
  "Apple Watch",
  "Garmin",
  "Samsung",
  "Fitbit",
  "Amazfit",
];

const quickFeatures = [
  {
    icon: "＋",
    title: "Szybkie dodawanie",
    text: "Zielony „+” jest zawsze pod ręką. Toaleta, gazy, wzdęcia, ból, stres, woda, kroki, posiłek albo suplement — wybierasz i gotowe.",
  },
  {
    icon: "◐",
    title: "Toaleta w skali Bristol",
    text: "Forma, kolor, wielkość i godzina. Wielkość porównujesz do orzecha, banana albo ogórka, więc nie trzeba niczego ważyć ani opisywać.",
  },
  {
    icon: "≋",
    title: "Objawy z nasileniem",
    text: "Włączasz objawy, które chcesz dziś śledzić, i dodajesz wpis z godziną i siłą. Wszystko trafia do dnia wybranego w kalendarzu.",
  },
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
      <header className={s.nav}>
        <a href="#funkcje" className={s.navBtn} aria-label="Przejdź do funkcji">
          <span />
          <span />
        </a>
        <Link href="/v2/" className={s.brand}>
          <LogoMark size={28} />
          <span>
            <b>Sibo</b> | Diary
          </span>
        </Link>
        <a href={DOWNLOAD} className={s.navCta}>
          Pobierz
        </a>
      </header>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroCopy}>
          <h1>
            Sibo{" "}
            <br />
            Diary
          </h1>
          <p>
            Objawy, toaleta, posiłki, suplementy, woda, kroki i sen w jednym dzienniku. Zapisujesz
            w kilka sekund, a po tygodniu widzisz, co dzieje się z Twoimi jelitami.
          </p>
          <StoreBadges href={DOWNLOAD} />
        </div>
        <Phone src="/screens/today.jpg" alt="Ekran Dziennik: kalendarz tygodnia, postęp, kroki, sen i woda" className={s.heroPhone} />
      </section>

      {/* INTRO */}
      <section className={s.intro} id="funkcje">
        <div className={s.wrap}>
          <div className={s.split}>
            <Reveal className={s.introPhoneWrap}>
              <Phone src="/screens/toilet.jpg" alt="Ekran Toaleta: skala Bristol, kolor i wielkość" className={s.tilt} />
            </Reveal>
            <Reveal delay={120}>
              <h2 className={s.h2}>
                Poznaj rytm
                <br />
                swoich jelit.
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
      <section className={s.dark}>
        <div className={s.wrap}>
          <Reveal>
            <h2 className={`${s.h2} ${s.h2Light}`}>
              Kroki i sen
              <br />
              prosto z zegarka
            </h2>
          </Reveal>
          <div className={s.split}>
            <Reveal>
              <p className={s.bodyLight}>
                Połącz aplikację z Apple Zdrowie albo Health Connect, a kroki i sen pobiorą się same.
                Widzisz długość nocy, godziny zaśnięcia i pobudki oraz fazy snu z ostatnich 7 nocy.
                Sen wpisany ręcznie ma pierwszeństwo, więc zawsze masz ostatnie słowo.
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
            <h2 className={`${s.h2} ${s.center}`}>
              Wpis w kilka sekund,
              <br />
              jednym dotknięciem
            </h2>
          </Reveal>
          <div className={s.cols}>
            {quickFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <h3 className={s.colTitle}>
                  <span aria-hidden="true">{f.icon}</span>
                  {f.title}
                </h3>
                <p className={s.colText}>{f.text}</p>
              </Reveal>
            ))}
          </div>
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
      <section className={s.dark}>
        <div className={s.wrap}>
          <div className={s.foodGrid}>
            <div>
              <Reveal>
                <h2 className={`${s.h2} ${s.h2Light}`}>
                  Jedzenie,
                  <br />
                  które Ci służy
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
      <section className={s.intro}>
        <div className={s.wrap}>
          <div className={`${s.split} ${s.splitFlip}`}>
            <Reveal delay={120} className={s.introPhoneWrap}>
              <Phone src="/screens/reports.jpg" alt="Ekran Raporty: podsumowanie tygodnia" className={s.tiltRight} />
            </Reveal>
            <Reveal>
              <h2 className={s.h2}>
                Tydzień
                <br />
                w jednym widoku.
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
          <h2 className={s.h2}>FAQ</h2>
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

      {/* DOWNLOAD */}
      <section className={s.download} id="pobierz">
        <div className={s.downloadArt}>
          <Phone src="/screens/today.jpg" alt="" className={s.downloadPhone} />
        </div>
        <div className={s.downloadCopy}>
          <h2 className={s.h2}>
            Pobierz
            <br />
            Sibo Diary
          </h2>
          <p className={s.body}>
            Darmowy dziennik SIBO na iPhone&rsquo;a i Androida. Krótki przewodnik po pierwszym
            logowaniu pokaże Ci w minutę, gdzie co zapisywać.
          </p>
          <StoreBadges href={DOWNLOAD} className={s.badges} />
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.footerTop}>
          <div className={s.brand}>
            <LogoMark size={28} />
            <span>
              <b>Sibo</b> | Diary
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
          <span>© {new Date().getFullYear()} Sibo Diary</span>
          <span>Sibo Diary nie jest wyrobem medycznym i nie zastępuje porady lekarza.</span>
        </div>
      </footer>

      <VariantSwitch active="b" />
    </div>
  );
}
