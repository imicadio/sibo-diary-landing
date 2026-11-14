/* Illustrative UI mockups of the Sibo Diary app, built in HTML/CSS. */

const timeline = [
  { time: "8:10", icon: "🥣", title: "Owsianka na mleku bez laktozy", meta: "Śniadanie · niski FODMAP", tag: "ok" },
  { time: "11:30", icon: "💊", title: "Rifaksymina 550 mg", meta: "Dzień 6 z 14", tag: "med" },
  { time: "13:45", icon: "🍝", title: "Makaron z sosem czosnkowym", meta: "Obiad · wysoki FODMAP", tag: "warn" },
  { time: "15:20", icon: "🎈", title: "Wzdęcia · 7/10", meta: "Objaw · 1,5 h po obiedzie", tag: "sym" },
];

export function PhoneMockup() {
  return (
    <div className="phone" aria-label="Ekran aplikacji Sibo Diary">
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__island" />
          <span>100%</span>
        </div>
        <div className="phone__head">
          <div>
            <small>Czwartek, 14 listopada</small>
            <strong>Dzisiaj</strong>
          </div>
          <span className="phone__avatar">M</span>
        </div>

        <div className="phone__score">
          <Ring value={0.62} size={88} stroke={10} />
          <div>
            <small>Samopoczucie</small>
            <strong>6,2 / 10</strong>
            <span>lepiej niż wczoraj ↑</span>
          </div>
        </div>

        <ul className="phone__list">
          {timeline.map((t) => (
            <li key={t.time} className={`entry entry--${t.tag}`}>
              <span className="entry__icon">{t.icon}</span>
              <span className="entry__body">
                <b>{t.title}</b>
                <small>
                  {t.time} · {t.meta}
                </small>
              </span>
            </li>
          ))}
        </ul>

        <div className="phone__fab">＋ Dodaj wpis</div>
      </div>
    </div>
  );
}

export function Ring({
  value,
  size = 120,
  stroke = 12,
  track = "rgba(14,94,86,.12)",
  color = "#0E5E56",
}: {
  value: number;
  size?: number;
  stroke?: number;
  track?: string;
  color?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${c * value} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export function SymptomCard() {
  const items = [
    { name: "Wzdęcia", v: 7 },
    { name: "Ból brzucha", v: 4 },
    { name: "Gazy", v: 5 },
    { name: "Zmęczenie", v: 3 },
  ];
  return (
    <div className="card">
      <div className="card__title">Jak się czujesz? · 15:20</div>
      {items.map((i) => (
        <div className="meter" key={i.name}>
          <span>{i.name}</span>
          <span className="meter__bar">
            <span style={{ width: `${i.v * 10}%` }} />
          </span>
          <b>{i.v}</b>
        </div>
      ))}
      <div className="card__note">Zapisano · połączono z obiadem z 13:45</div>
    </div>
  );
}

export function FodmapCard() {
  return (
    <div className="card">
      <div className="bubble bubble--me">Czy mogę zjeść awokado?</div>
      <div className="bubble">
        <p>Zależy od porcji:</p>
        <div className="row">
          <span>⅛ owocu (30 g)</span>
          <span className="pill pill--ok">niski FODMAP</span>
        </div>
        <div className="row">
          <span>½ owocu (80 g)</span>
          <span className="pill pill--warn">wysoki · sorbitol</span>
        </div>
        <p className="muted">W Twoim dzienniku: 2 razy bez objawów przy małej porcji.</p>
      </div>
    </div>
  );
}

export function BristolCard() {
  const types = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="card">
      <div className="card__title">Skala bristolska</div>
      <div className="bristol">
        {types.map((t) => (
          <span key={t} className={t === 4 ? "is-on" : ""}>
            {t}
          </span>
        ))}
      </div>
      <div className="row">
        <span>Typ 4 · prawidłowy</span>
        <span className="pill pill--ok">7:05</span>
      </div>
      <div className="card__note">3 dni z rzędu w normie 🎉</div>
    </div>
  );
}

export function MedsCard() {
  const meds = [
    { n: "Rifaksymina 550 mg", d: "3× dziennie · dzień 6/14", done: true },
    { n: "Probiotyk", d: "wieczorem", done: false },
    { n: "Prokinetyk", d: "przed snem", done: false },
  ];
  return (
    <div className="card">
      <div className="card__title">Kuracja · plan na dziś</div>
      <div className="progress">
        <span style={{ width: "43%" }} />
      </div>
      {meds.map((m) => (
        <div className={`check ${m.done ? "is-done" : ""}`} key={m.n}>
          <span className="check__box">{m.done ? "✓" : ""}</span>
          <span>
            <b>{m.n}</b>
            <small>{m.d}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

export function PatternCard() {
  const days = ["P", "W", "Ś", "C", "P", "S", "N"];
  const levels = [2, 5, 3, 7, 2, 1, 2];
  return (
    <div className="card">
      <div className="card__title">Ostatnie 7 dni</div>
      <div className="week">
        {days.map((d, i) => (
          <div key={i} className="week__day">
            <span className="week__bar" style={{ height: `${levels[i] * 10 + 8}px`, opacity: 0.35 + levels[i] / 12 }} />
            <small>{d}</small>
          </div>
        ))}
      </div>
      <div className="insight">
        <span>💡</span>
        <p>
          Wzdęcia pojawiały się częściej w dni z <b>czosnkiem</b> (3 z 4) i <b>pszenicą</b> (2 z 3).
        </p>
      </div>
    </div>
  );
}

export function ReportCard() {
  return (
    <div className="card card--paper">
      <div className="report__head">
        <b>Raport dla lekarza</b>
        <small>15.10 – 14.11 · 30 dni</small>
      </div>
      <div className="report__grid">
        <div>
          <small>Średnie objawy</small>
          <b>4,1 → 2,6</b>
        </div>
        <div>
          <small>Dni bez bólu</small>
          <b>19 / 30</b>
        </div>
        <div>
          <small>Kuracja</small>
          <b>14 / 14 dni</b>
        </div>
        <div>
          <small>Podejrzane</small>
          <b>czosnek, pszenica</b>
        </div>
      </div>
      <div className="report__lines">
        <span />
        <span />
        <span style={{ width: "60%" }} />
      </div>
      <div className="pill pill--dark">⤓ Eksportuj PDF</div>
    </div>
  );
}
