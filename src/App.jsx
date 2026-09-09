import React, { useState } from "react";

/* ---------------------------------------------------------------
   HORIZON COMMONS
   Design tokens — aligned to the brand mark (navy / brass)
--------------------------------------------------------------- */
const C = {
  paper: "#F6F5F2",    // near-white, matches the logo's field
  paperDim: "#ECEAE4",
  ink: "#182234",       // deep navy-black for text/headings
  navy: "#1F3A5F",      // primary accent — brand navy
  navyDeep: "#152A47",
  brass: "#AE8A4E",     // secondary accent — brand brass/gold
  slate: "#5C6472",     // secondary text
  brick: "#9C4A34",     // sparing, urgent accent
  line: "#D8D5CC",      // hairline rule
};

const FONTS = {
  display: '"Source Serif 4", Georgia, serif',
  body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
};

const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    ::selection { background: ${C.navy}; color: ${C.paper}; }
    a { text-decoration: none; }
    button { cursor: pointer; font-family: inherit; }
    .eyebrow {
      font-family: ${FONTS.mono};
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${C.navy};
    }
    .hc-link {
      position: relative;
      color: ${C.ink};
    }
    .hc-link::after {
      content: "";
      position: absolute;
      left: 0; right: 0; bottom: -3px;
      height: 1px;
      background: ${C.navy};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }
    .hc-link:hover::after { transform: scaleX(1); }
    .hc-btn-primary {
      background: ${C.navy};
      color: ${C.paper};
      border: 1px solid ${C.navy};
      transition: background 0.2s ease, transform 0.15s ease;
    }
    .hc-btn-primary:hover { background: ${C.navyDeep}; }
    .hc-btn-secondary {
      background: transparent;
      color: ${C.ink};
      border: 1px solid ${C.ink};
      transition: background 0.2s ease, color 0.2s ease;
    }
    .hc-btn-secondary:hover { background: ${C.ink}; color: ${C.paper}; }
    .hc-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .hc-card:hover {
      transform: translateY(-3px);
      border-color: ${C.navy} !important;
    }
    .marker-btn { transition: transform 0.2s ease; }
    .marker-btn:hover { transform: translateY(-2px); }
    .marker-btn:hover .marker-dot { fill: ${C.brass}; }
    @media (prefers-reduced-motion: reduce) {
      .hc-link::after, .hc-btn-primary, .hc-btn-secondary, .hc-card, .marker-btn { transition: none; }
    }
    input, textarea, select {
      font-family: ${FONTS.body};
    }
    input:focus, textarea:focus, select:focus, button:focus-visible, a:focus-visible {
      outline: 2px solid ${C.brass};
      outline-offset: 2px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   ICONS — minimal single-stroke line marks, consistent weight
--------------------------------------------------------------- */
const iconProps = { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", stroke: C.ink, strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };

const IconAI = () => (
  <svg {...iconProps}><circle cx="13" cy="13" r="3.2"/><path d="M13 3v4M13 19v4M23 13h-4M7 13H3M19.8 6.2l-2.8 2.8M9 15l-2.8 2.8M19.8 19.8l-2.8-2.8M9 11 6.2 8.2"/></svg>
);
const IconHealth = () => (
  <svg {...iconProps}><path d="M3 13h4l2-6 4 12 2-8 2 2h6"/><path d="M13 4c2-2.5 6-1.7 6 1.8 0 3-4 6-6 8-2-2-6-5-6-8C7 2.3 11 1.5 13 4Z"/></svg>
);
const IconEarth = () => (
  <svg {...iconProps}><circle cx="13" cy="13" r="9"/><path d="M4.5 10c3 1.5 6 1 8-1s5-2.5 8-1"/><path d="M4.5 16c3-1.5 6-1 8 1s5 2.5 8 1"/></svg>
);
const IconFoodWater = () => (
  <svg {...iconProps}><path d="M8 3v6a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V3"/><path d="M10 11v10"/><path d="M18 3c-2.5 3-3 5-3 7a3 3 0 0 0 6 0c0-2-.5-4-3-7Z"/><path d="M18 13v8"/></svg>
);

/* ---------------------------------------------------------------
   CONTENT
--------------------------------------------------------------- */
const CHALLENGES = [
  {
    id: "ai-safety",
    label: "AI Safety, Future & Societal Impact",
    short: "A technology reshaping society before society can respond.",
    Icon: IconAI,
    headline: "A technology reshaping society before society can respond.",
    paragraphs: [
      "Artificial intelligence is advancing faster than any institution built to guide it. Regulators, courts, schools, and employers are all working from an earlier version of what these systems can do — and the systems shipping today will look primitive within a year.",
      "We treat AI as a societal-impact problem, not only a technical or regulatory one. That means asking what these systems do to jobs, information, childhood development, and mental health, alongside the harder question of how to build governance flexible enough to keep pace with a technology that doesn't sit still.",
    ],
    bullets: [
      "Studying the near-term societal effects of AI — on employment, education, and information — not just long-horizon safety scenarios.",
      "Drafting governance frameworks that regulate systems by capability and risk, built to be updated as fast as the technology itself.",
      "Convening AI researchers, educators, labor economists, and civil-society groups who rarely negotiate directly with each other.",
    ],
  },
  {
    id: "health-care",
    label: "Affordable, Accessible, Effective Health Care",
    short: "Good care exists. Affording it, reaching it, and trusting it doesn't.",
    Icon: IconHealth,
    headline: "Good care exists. Affording it, reaching it, and trusting it doesn't.",
    paragraphs: [
      "The U.S. does not lack medical knowledge, technology, or trained clinicians — it has some of the best of all three in the world. What it lacks is a system where care is consistently affordable, consistently reachable, and consistently effective once a person actually gets it.",
      "We focus on all three failure points at once: cost structures that make basic care unaffordable, access barriers — distance, wait times, prior authorization — that make timely care unreachable, and quality gaps that mean getting care doesn't always mean getting better.",
    ],
    bullets: [
      "Studying prior-authorization and claims-denial patterns to find reforms that cut delay without cutting coverage.",
      "Piloting price-transparency and direct-scheduling tools with community clinics and regional hospital systems.",
      "Tracking outcomes, not just access, so effective care means measurably getting people healthier — not just getting them seen.",
    ],
  },
  {
    id: "earth-impact",
    label: "Earth Impact",
    short: "Driving decisions to sustain our planet.",
    Icon: IconEarth,
    headline: "Every decision has a footprint. We're making it visible.",
    paragraphs: [
      "Environmental stability isn't a separate cause from the rest of this list — it's the ground the rest of this work stands on. And increasingly, the choices driving that instability aren't abstract. They're specific infrastructure decisions being made right now, often without anyone fully pricing in what they cost the planet.",
      "Take the buildout of AI data centers: each one draws power at the scale of a small city, generates heat that has to be removed with enormous volumes of water or energy, and claims land and grid capacity that local communities were counting on for other uses. Multiply that by every warehouse, factory, and development decision made the same way, and the pattern becomes clear.",
    ],
    bullets: [
      "Building decision frameworks that price in power draw, water use, heat output, and land impact before infrastructure gets approved, not after.",
      "Studying the environmental footprint of the data center and AI compute buildout, where regulation visibly lags behind construction.",
      "Supporting community-level resilience planning for the climate risks a region already faces — flooding, drought, heat, fire.",
    ],
  },
  {
    id: "food-water-access",
    label: "Food & Water Access",
    short: "Production isn't the biggest problem. It's access.",
    Icon: IconFoodWater,
    headline: "Production isn't the biggest problem. It's access.",
    paragraphs: [
      "The world grows enough food and holds enough fresh water to meet human need. People still go hungry and thirsty because of where they live, what they can afford, and how far the nearest reliable source is — not because the resource itself has run out.",
      "That reframing changes the work. Instead of asking how to produce more, we ask why what already exists doesn't reach people: broken cold chains, food deserts inside wealthy cities, aging water infrastructure, and pricing that puts basic nutrition and clean water out of reach for people living within sight of a full grocery store or a working reservoir.",
    ],
    bullets: [
      "Mapping access gaps at the neighborhood level, distinguishing supply problems from distribution and affordability problems.",
      "Working with municipal water utilities on investment models that prioritize the most under-served systems first.",
      "Testing last-mile distribution and pricing models with food banks, co-ops, and regional grocers.",
    ],
  },
];

/* ---------------------------------------------------------------
   BRAND MARK
--------------------------------------------------------------- */
const ICON_SRC = "horizon-commons-icon.png";
const LOGO_SRC = "horizon-commons-logo.png";

function Wordmark({ size = 36, showText = true, textColor = C.ink }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <img src={ICON_SRC} alt="Horizon Commons compass mark" style={{ height: size, width: size, objectFit: "contain" }} />
      {showText && (
        <span style={{ fontFamily: FONTS.display, fontSize: size * 0.52, fontWeight: 600, color: textColor, whiteSpace: "nowrap" }}>
          Horizon Commons
        </span>
      )}
    </span>
  );
}

/* ---------------------------------------------------------------
   SHARED LAYOUT PIECES
--------------------------------------------------------------- */
function Nav({ page, go }) {
  const items = [
    ["home", "Home"],
    ["about", "About"],
    ["challenges", "Grand Challenges"],
    ["get-involved", "Get Involved"],
  ];
  const [open, setOpen] = useState(false);
  return (
    <header style={{ borderBottom: `1px solid ${C.line}`, background: C.paper, position: "sticky", top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => go("home")} style={{ background: "none", border: "none", padding: 0 }}>
          <Wordmark size={38} />
        </button>
        <nav style={{ display: "none" }} className="hc-desktop-nav">
          {items.map(([id, label]) => (
            <a key={id} className="hc-link" onClick={() => go(id)} style={{ marginLeft: 32, fontFamily: FONTS.body, fontSize: 14.5, fontWeight: 500, color: page === id ? C.navy : C.ink, cursor: "pointer" }}>
              {label}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="hc-mobile-toggle" style={{ background: "none", border: `1px solid ${C.ink}`, borderRadius: 4, padding: "6px 10px", fontFamily: FONTS.mono, fontSize: 12 }}>
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      <style>{`
        @media (min-width: 820px) {
          .hc-desktop-nav { display: flex !important; align-items: center; }
          .hc-mobile-toggle { display: none !important; }
        }
      `}</style>
      {open && (
        <div style={{ borderTop: `1px solid ${C.line}`, padding: "8px 24px 20px" }}>
          {items.map(([id, label]) => (
            <div key={id} style={{ padding: "10px 0", borderBottom: `1px solid ${C.line}` }}>
              <a onClick={() => { go(id); setOpen(false); }} style={{ fontFamily: FONTS.body, fontSize: 16, color: page === id ? C.navy : C.ink }}>{label}</a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}`, marginTop: 100 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32 }}>
        <div style={{ maxWidth: 320 }}>
          <Wordmark size={34} />
          <p style={{ fontFamily: FONTS.body, fontSize: 13.5, color: C.slate, lineHeight: 1.6, marginTop: 14 }}>
            A nonpartisan commons where the people closest to today's hardest problems build solutions worth acting on.
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Site</div>
            {["home", "about", "challenges", "get-involved"].map((id) => (
              <div key={id} style={{ marginBottom: 8 }}>
                <a className="hc-link" onClick={() => go(id)} style={{ fontFamily: FONTS.body, fontSize: 13.5, color: C.ink, cursor: "pointer" }}>
                  {id === "home" ? "Home" : id === "about" ? "About" : id === "challenges" ? "Grand Challenges" : "Get Involved"}
                </a>
              </div>
            ))}
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Contact</div>
            <div style={{ fontFamily: FONTS.body, fontSize: 13.5, color: C.slate, marginBottom: 8 }}>hello@horizoncommons.org</div>
            <div style={{ fontFamily: FONTS.body, fontSize: 13.5, color: C.slate }}>Convenings held on and offline</div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${C.line}`, padding: "16px 24px", textAlign: "center" }}>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: C.slate, letterSpacing: "0.06em" }}>© {new Date().getFullYear()} HORIZON COMMONS — A COMMONS FOR THE HARD PROBLEMS</span>
      </div>
    </footer>
  );
}

/* Horizon strip: the signature device. Landmarks placed along a shared line. */
function HorizonStrip({ go }) {
  const n = CHALLENGES.length;
  const margin = 10;
  const step = n > 1 ? (100 - margin * 2) / (n - 1) : 0;
  return (
    <div style={{ position: "relative", padding: "0 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Desktop: markers along a horizontal line */}
        <div className="horizon-desktop" style={{ display: "none", position: "relative", height: 200 }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: C.line }} />
          {CHALLENGES.map((c, i) => {
            const left = margin + i * step;
            const above = i % 2 === 0;
            const { Icon } = c;
            return (
              <button key={c.id} className="marker-btn" onClick={() => go("challenge", c.id)}
                style={{ position: "absolute", left: `${left}%`, top: "50%", transform: "translate(-50%,-50%)", background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", width: 190 }}>
                {above && (
                  <div style={{ marginBottom: 14, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.paper, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}><Icon /></div>
                    <span style={{ fontFamily: FONTS.body, fontSize: 12.5, fontWeight: 600, color: C.ink, textAlign: "center", lineHeight: 1.3 }}>{c.label}</span>
                  </div>
                )}
                <svg width="10" height="10" style={{ display: "block" }}><circle className="marker-dot" cx="5" cy="5" r="4" fill={C.navy} /></svg>
                {!above && (
                  <div style={{ marginTop: 14, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.paper, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}><Icon /></div>
                    <span style={{ fontFamily: FONTS.body, fontSize: 12.5, fontWeight: 600, color: C.ink, textAlign: "center", lineHeight: 1.3 }}>{c.label}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        {/* Mobile: vertical list along a vertical line */}
        <div className="horizon-mobile" style={{ position: "relative", paddingLeft: 30 }}>
          <div style={{ position: "absolute", left: 9, top: 6, bottom: 6, width: 1, background: C.line }} />
          {CHALLENGES.map((c) => {
            const { Icon } = c;
            return (
              <button key={c.id} onClick={() => go("challenge", c.id)} style={{ display: "flex", alignItems: "center", gap: 14, background: "none", border: "none", padding: "14px 0", width: "100%", textAlign: "left" }}>
                <svg width="18" height="18" style={{ position: "absolute", left: 0 }}><circle cx="9" cy="9" r="4" fill={C.navy} /></svg>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.paper, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 20 }}><Icon /></div>
                <span style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 600, color: C.ink }}>{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (min-width: 820px) {
          .horizon-desktop { display: block !important; }
          .horizon-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ---------------------------------------------------------------
   PAGES
--------------------------------------------------------------- */
function Home({ go }) {
  return (
    <div>
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 40px" }}>
        <img src={LOGO_SRC} alt="Horizon Commons" style={{ height: 108, width: "auto", marginBottom: 28, marginLeft: -6 }} />
        <div className="eyebrow" style={{ marginBottom: 20 }}>A NONPARTISAN COMMONS</div>
        <h1 style={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: "clamp(34px, 5.2vw, 62px)", lineHeight: 1.08, color: C.ink, maxWidth: 900, margin: 0 }}>
          Grand challenges live between the disciplines. So do their solutions.
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: 18, lineHeight: 1.65, color: C.slate, maxWidth: 620, marginTop: 26 }}>
          Horizon Commons convenes the people closest to four defining problems of this era — AI safety and societal impact, affordable health care, Earth's environmental impact, and food and water access — to build solutions worth acting on.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
          <button className="hc-btn-primary" onClick={() => go("challenges")} style={{ padding: "13px 24px", fontSize: 14.5, fontWeight: 500, borderRadius: 4 }}>See the Grand Challenges</button>
          <button className="hc-btn-secondary" onClick={() => go("get-involved")} style={{ padding: "13px 24px", fontSize: 14.5, fontWeight: 500, borderRadius: 4 }}>Join the Commons</button>
        </div>
      </section>

      <section style={{ padding: "56px 0 20px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 24px", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10 }}>
          <span className="eyebrow">FOUR POINTS ON A SHARED HORIZON</span>
          <a className="hc-link" onClick={() => go("challenges")} style={{ fontFamily: FONTS.body, fontSize: 13.5, color: C.ink, cursor: "pointer" }}>View all →</a>
        </div>
        <HorizonStrip go={go} />
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 24px 20px", borderTop: `1px solid ${C.line}` }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>HOW WE WORK</div>
        <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 600, color: C.ink, maxWidth: 700, margin: "0 0 48px" }}>
          Three disciplines, applied to every challenge.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }} className="hc-three-col">
          {[
            ["Gather", "We bring people who don't usually sit in the same room.", "Policymakers from both parties, clinicians and hospital administrators, AI researchers and civil-society advocates, farmers, water engineers, and the people most affected by each problem meet as equals, not panelists."],
            ["Understand", "We start from evidence, not positions.", "Before we propose anything, working groups spend months mapping how a problem actually works — the incentives, the money, the regulations, the failure points. No solution ships until the diagnosis is right."],
            ["Create", "We build things that can actually be tried.", "Pilot programs, model legislation, governance frameworks, and cost studies — not reports that end up on a shelf. Every working group owes the commons something testable."],
          ].map(([title, sub, body]) => (
            <div key={title} style={{ borderTop: `1px solid ${C.ink}`, paddingTop: 20 }}>
              <h3 style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 600, color: C.ink, margin: "0 0 10px" }}>{title}</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 14.5, fontWeight: 600, color: C.navy, margin: "0 0 12px" }}>{sub}</p>
              <p style={{ fontFamily: FONTS.body, fontSize: 14.5, lineHeight: 1.65, color: C.slate, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
        <style>{`@media (min-width: 820px) { .hc-three-col { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
      </section>

      <section style={{ background: C.ink, marginTop: 100, padding: "72px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: FONTS.display, fontSize: "clamp(24px, 3.4vw, 34px)", color: C.paper, lineHeight: 1.35, margin: "0 0 32px" }}>
            The horizon doesn't move. But we can get closer to it together.
          </p>
          <button className="hc-btn-primary" onClick={() => go("get-involved")} style={{ padding: "13px 26px", fontSize: 14.5, fontWeight: 500, borderRadius: 4, borderColor: C.brass, background: C.brass }}>
            Join the Commons
          </button>
        </div>
      </section>
    </div>
  );
}

function About({ go }) {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 20px" }}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>ABOUT</div>
      <h1 style={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: "clamp(30px, 4.4vw, 48px)", color: C.ink, maxWidth: 780, lineHeight: 1.12, margin: 0 }}>
        Common ground still exists. We go find it.
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, marginTop: 48 }} className="hc-about-grid">
        <div>
          <p style={{ fontFamily: FONTS.body, fontSize: 16.5, lineHeight: 1.75, color: C.ink, margin: "0 0 20px" }}>
            Horizon Commons formed on a simple observation: the defining problems of this era don't fit inside any one discipline, party, or institution. AI's societal impact touches law, computer science, and human development. The cost of a hospital visit touches medicine, insurance markets, and Congress. None of these problems will be solved by people who only talk to people who already agree with them.
          </p>
          <p style={{ fontFamily: FONTS.body, fontSize: 16.5, lineHeight: 1.75, color: C.ink, margin: "0 0 20px" }}>
            So we built a commons instead of an institution: a shared, neutral ground where the people who understand a problem from the inside — practitioners, researchers, and the people living with its consequences — can work on it together, without having to first agree on everything else.
          </p>
          <p style={{ fontFamily: FONTS.body, fontSize: 16.5, lineHeight: 1.75, color: C.ink, margin: 0 }}>
            Our mission is to improve the human experience — measurably, for real people — by giving hard problems a place to be worked on by everyone who has a stake in them.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>PRINCIPLES</div>
          {[
            ["Nonpartisan, not neutral", "Nonpartisan doesn't mean we have no findings. It means our conclusions follow evidence, not affiliation."],
            ["Built with the affected, not for them", "Anyone directly living a challenge has a seat before anyone studying it from a distance."],
            ["Solutions must be testable", "If a proposal can't be piloted, measured, or falsified, it isn't finished yet."],
          ].map(([t, d]) => (
            <div key={t} style={{ borderTop: `1px solid ${C.line}`, padding: "18px 0" }}>
              <h4 style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 600, color: C.ink, margin: "0 0 6px" }}>{t}</h4>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, lineHeight: 1.6, color: C.slate, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (min-width: 900px) { .hc-about-grid { grid-template-columns: 1.4fr 1fr !important; } }`}</style>

      <div style={{ marginTop: 88, borderTop: `1px solid ${C.line}`, paddingTop: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>HOW WE'RE STRUCTURED</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="hc-three-col-b">
          {[
            ["Working Groups", "One standing group per Grand Challenge, each mixing practitioners, researchers, and affected community members for multi-year, ongoing work."],
            ["Fellows Program", "A small cohort of researchers and organizers embedded inside a working group for a defined term, producing a specific piece of publishable or pilotable work."],
            ["Commons Sessions", "Public convenings, in person and online, where working groups present findings, take challenge, and recruit the next round of collaborators."],
          ].map(([t, d]) => (
            <div key={t}>
              <h4 style={{ fontFamily: FONTS.display, fontSize: 19, fontWeight: 600, color: C.ink, margin: "0 0 10px" }}>{t}</h4>
              <p style={{ fontFamily: FONTS.body, fontSize: 14.5, lineHeight: 1.65, color: C.slate, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
        <style>{`@media (min-width: 820px) { .hc-three-col-b { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
      </div>

      <div style={{ marginTop: 88, background: C.paperDim, border: `1px solid ${C.line}`, borderRadius: 6, padding: "40px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <p style={{ fontFamily: FONTS.display, fontSize: 22, color: C.ink, margin: 0, maxWidth: 520 }}>See how the work breaks down across each Grand Challenge.</p>
        <button className="hc-btn-primary" onClick={() => go("challenges")} style={{ padding: "12px 22px", fontSize: 14, fontWeight: 500, borderRadius: 4 }}>View the Challenges</button>
      </div>
    </div>
  );
}

function ChallengesOverview({ go }) {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 20px" }}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>GRAND CHALLENGES</div>
      <h1 style={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: "clamp(30px, 4.4vw, 48px)", color: C.ink, maxWidth: 780, lineHeight: 1.15, margin: 0 }}>
        Four points on a shared horizon.
      </h1>
      <p style={{ fontFamily: FONTS.body, fontSize: 16.5, lineHeight: 1.7, color: C.slate, maxWidth: 640, marginTop: 22 }}>
        These aren't ranked. Each one sits on the same line, and each one intersects with the others more than any single headline suggests.
      </p>

      <div style={{ marginTop: 56 }}>
        <HorizonStrip go={go} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20, marginTop: 70 }} className="hc-challenge-grid">
        {CHALLENGES.map((c) => {
          const { Icon } = c;
          return (
            <button key={c.id} className="hc-card" onClick={() => go("challenge", c.id)}
              style={{ textAlign: "left", background: "none", border: `1px solid ${C.line}`, borderRadius: 6, padding: 26, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.paperDim, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon /></div>
              <div>
                <h3 style={{ fontFamily: FONTS.display, fontSize: 20, fontWeight: 600, color: C.ink, margin: "0 0 8px" }}>{c.label}</h3>
                <p style={{ fontFamily: FONTS.body, fontSize: 14, lineHeight: 1.6, color: C.slate, margin: 0 }}>{c.short}</p>
              </div>
              <span style={{ fontFamily: FONTS.mono, fontSize: 11.5, color: C.navy, letterSpacing: "0.06em" }}>READ MORE →</span>
            </button>
          );
        })}
      </div>
      <style>{`
        @media (min-width: 700px) { .hc-challenge-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </div>
  );
}

function ChallengeDetail({ id, go }) {
  const idx = CHALLENGES.findIndex((c) => c.id === id);
  const c = CHALLENGES[idx] || CHALLENGES[0];
  const { Icon } = c;
  const next = CHALLENGES[(idx + 1) % CHALLENGES.length];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 20px" }}>
      <a className="hc-link" onClick={() => go("challenges")} style={{ fontFamily: FONTS.mono, fontSize: 12, color: C.slate, cursor: "pointer" }}>← ALL GRAND CHALLENGES</a>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28, marginBottom: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.paperDim, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon /></div>
        <span className="eyebrow">GRAND CHALLENGE — {c.label.toUpperCase()}</span>
      </div>

      <h1 style={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: "clamp(28px, 4.2vw, 44px)", color: C.ink, lineHeight: 1.15, margin: "0 0 36px" }}>
        {c.headline}
      </h1>

      {c.paragraphs.map((p, i) => (
        <p key={i} style={{ fontFamily: FONTS.body, fontSize: 17, lineHeight: 1.8, color: C.ink, margin: "0 0 22px" }}>{p}</p>
      ))}

      <div style={{ marginTop: 40, borderTop: `1px solid ${C.line}`, paddingTop: 32 }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>WHAT WE'RE DOING</div>
        {c.bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < c.bullets.length - 1 ? `1px solid ${C.line}` : "none" }}>
            <svg width="10" height="10" style={{ marginTop: 6, flexShrink: 0 }}><circle cx="5" cy="5" r="4" fill={C.navy} /></svg>
            <p style={{ fontFamily: FONTS.body, fontSize: 15.5, lineHeight: 1.65, color: C.ink, margin: 0 }}>{b}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 56, background: C.paperDim, border: `1px solid ${C.line}`, borderRadius: 6, padding: "30px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 15, color: C.ink, margin: 0 }}>Have expertise or a stake in {c.label.toLowerCase()}?</p>
        <button className="hc-btn-primary" onClick={() => go("get-involved")} style={{ padding: "11px 20px", fontSize: 13.5, fontWeight: 500, borderRadius: 4 }}>Join this Working Group</button>
      </div>

      <div style={{ marginTop: 48, display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => go("challenge", next.id)} style={{ background: "none", border: "none", textAlign: "right", padding: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 6 }}>NEXT CHALLENGE</div>
          <div className="hc-link" style={{ fontFamily: FONTS.display, fontSize: 19, color: C.ink }}>{next.label} →</div>
        </button>
      </div>
    </div>
  );
}

function GetInvolved() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", challenge: CHALLENGES[0].id, message: "" });

  const ways = [
    ["Join a Working Group", "For practitioners, researchers, and people with direct, lived experience of one of the four Grand Challenges. Working groups meet regularly and own their outcomes."],
    ["Share Evidence & Expertise", "Submit research, review a draft framework, or offer testimony. You don't need to join a group to contribute what you know."],
    ["Fund a Challenge", "For funders and institutions: sponsor a specific working group's research, convenings, or pilots, with full visibility into how it's used."],
    ["Host or Attend a Commons Session", "Public convenings, in person and online, where working groups present findings and take challenge from anyone in the room."],
  ];

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 20px" }}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>GET INVOLVED</div>
      <h1 style={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: "clamp(30px, 4.4vw, 48px)", color: C.ink, maxWidth: 780, lineHeight: 1.15, margin: 0 }}>
        Bring your seat to the table.
      </h1>
      <p style={{ fontFamily: FONTS.body, fontSize: 16.5, lineHeight: 1.7, color: C.slate, maxWidth: 640, marginTop: 22 }}>
        The commons only works if the table stays full. There's a way in whether you have an hour, a body of research, or a budget line.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20, marginTop: 56 }} className="hc-ways-grid">
        {ways.map(([t, d]) => (
          <div key={t} style={{ borderTop: `1px solid ${C.ink}`, paddingTop: 18 }}>
            <h3 style={{ fontFamily: FONTS.display, fontSize: 19, fontWeight: 600, color: C.ink, margin: "0 0 10px" }}>{t}</h3>
            <p style={{ fontFamily: FONTS.body, fontSize: 14.5, lineHeight: 1.65, color: C.slate, margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <style>{`@media (min-width: 820px) { .hc-ways-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>

      <div style={{ marginTop: 80, borderTop: `1px solid ${C.line}`, paddingTop: 48, display: "grid", gridTemplateColumns: "1fr", gap: 40 }} className="hc-form-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>SAY HELLO</div>
          <h2 style={{ fontFamily: FONTS.display, fontSize: 26, fontWeight: 600, color: C.ink, margin: "0 0 14px" }}>Tell us where you fit.</h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 14.5, lineHeight: 1.65, color: C.slate, margin: 0, maxWidth: 380 }}>
            A person reads every message. Tell us what you do, what challenge pulls at you, and how much time or capacity you have — we'll route you to the right working group.
          </p>
        </div>

        <div>
          {submitted ? (
            <div style={{ border: `1px solid ${C.navy}`, borderRadius: 6, padding: 28, background: C.paperDim }}>
              <p style={{ fontFamily: FONTS.display, fontSize: 20, color: C.ink, margin: "0 0 8px" }}>Message sent.</p>
              <p style={{ fontFamily: FONTS.body, fontSize: 14.5, color: C.slate, margin: 0 }}>We'll reply within a few business days with next steps for the {CHALLENGES.find(c => c.id === form.challenge)?.label} working group.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Field label="Name">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="you@example.com" />
              </Field>
              <Field label="Which Grand Challenge interests you?">
                <select value={form.challenge} onChange={(e) => setForm({ ...form, challenge: e.target.value })} style={inputStyle}>
                  {CHALLENGES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </Field>
              <Field label="Message">
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="What you do, and how you'd like to help" />
              </Field>
              <button className="hc-btn-primary" onClick={() => setSubmitted(true)} style={{ padding: "13px 24px", fontSize: 14.5, fontWeight: 500, borderRadius: 4, alignSelf: "flex-start", marginTop: 6 }}>
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`@media (min-width: 820px) { .hc-form-grid { grid-template-columns: 1fr 1.3fr !important; } }`}</style>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px 12px",
  border: `1px solid ${C.line}`,
  borderRadius: 4,
  background: C.paper,
  fontSize: 14.5,
  color: C.ink,
};

function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.06em", color: C.slate, display: "block", marginBottom: 6, textTransform: "uppercase" }}>{label}</span>
      {children}
    </label>
  );
}

/* ---------------------------------------------------------------
   APP
--------------------------------------------------------------- */
export default function App() {
  const [page, setPage] = useState("home");
  const [activeChallenge, setActiveChallenge] = useState(CHALLENGES[0].id);

  const go = (target, challengeId) => {
    if (target === "challenge" && challengeId) setActiveChallenge(challengeId);
    setPage(target);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  let content;
  if (page === "home") content = <Home go={go} />;
  else if (page === "about") content = <About go={go} />;
  else if (page === "challenges") content = <ChallengesOverview go={go} />;
  else if (page === "challenge") content = <ChallengeDetail id={activeChallenge} go={go} />;
  else if (page === "get-involved") content = <GetInvolved />;
  else content = <Home go={go} />;

  return (
    <div style={{ background: C.paper, minHeight: "100vh", fontFamily: FONTS.body }}>
      <FontImport />
      <Nav page={page === "challenge" ? "challenges" : page} go={go} />
      {content}
      <Footer go={go} />
    </div>
  );
}
