import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import phone01 from "@assets/Gemini_Generated_Image_3z6ldj3z6ldj3z6l-Photoroom_1781535529901.png";
import phone02 from "@assets/Gemini_Generated_Image_16vtp616vtp616vt-Photoroom_1781535843568.png";
import phone03 from "@assets/Gemini_Generated_Image_15w19215w19215w1-Photoroom_1781535843570.png";
import phone04 from "@assets/Gemini_Generated_Image_xhx69pxhx69pxhx6-Photoroom_1781535843569.png";
import phone05 from "@assets/Gemini_Generated_Image_6z57176z57176z57-Photoroom_1781535843570.png";
import phone06 from "@assets/Gemini_Generated_Image_vz5t24vz5t24vz5t-Photoroom_1781535843569.png";
import phone07 from "@assets/Gemini_Generated_Image_c6h62qc6h62qc6h6-Photoroom_1781535843570.png";

const PHONE_IMAGES = [phone01, phone02, phone03, phone04, phone05, phone06, phone07, phone04];

gsap.registerPlugin(ScrollTrigger);

/* Odd index (0,2,4,6) = white  |  Even index (1,3,5,7) = red */
const PANELS = [
  { num: "01", tag: "SWAP",          title: "SWAP TOKENS DIRECTLY IN THE APP",       desc: "Swap SOL, USDC, and thousands more — best-rate routing via Jupiter, right inside the app. Zero extra fees, no browser needed.",          scheme: "light" },
  { num: "02", tag: "WALLET",        title: "MANAGE ALL YOUR ASSETS IN ONE PLACE",   desc: "Your full portfolio at a glance — BTC, ETH, USDT and more. Send, receive, swap, or buy crypto with just one tap.",                       scheme: "dark"  },
  { num: "03", tag: "ONBOARDING",    title: "GET STARTED IN SECONDS",                desc: "Connect an existing wallet, create a brand new one, or import via seed phrase. NEKO makes setup fast, simple, and secure.",               scheme: "light" },
  { num: "04", tag: "TRADING",       title: "DISCOVER & TRADE TRENDING TOKENS",      desc: "Live DexScreener data built right in — spot trending tokens across Solana, Ethereum, and more before they pump.",                        scheme: "dark"  },
  { num: "05", tag: "INTELLIGENCE",  title: "STAY AHEAD WITH BUILT-IN CRYPTO NEWS",  desc: "Live news from CoinDesk, Cointelegraph, Decrypt, The Block & Bitcoin Magazine — all aggregated and auto-refreshed every 5 minutes.",     scheme: "light" },
  { num: "06", tag: "MARKETS",       title: "TOP 100 COINS BY MARKET CAP",           desc: "Bitcoin, Ethereum, Solana and every major coin tracked in real time. Price, 24h change, and market cap — all on one screen.",             scheme: "dark"  },
  { num: "07", tag: "NEKO CARD",     title: "SPEND CRYPTO ANYWHERE IN THE WORLD",    desc: "The NEKO Crypto Mastercard — accepted in 200+ countries and 150M+ merchants. Instant fiat-to-crypto top-up, zero FX fees.",              scheme: "light" },
  { num: "08", tag: "DISCOVERY",     title: "FIND TOKENS BEFORE THEY TREND",         desc: "NEKO tracks on-chain signals and DexScreener data to surface tokens worth watching — before the rest of the market catches on.",          scheme: "dark"  },
] as const;

const TOTAL = PANELS.length;

/* Per-scheme colour tokens */
const THEME = {
  light: {
    bg:           "#0a0a0a",
    title:        "#ffffff",
    tag:          "#E1F311",
    tagLine:      "#E1F311",
    ghostNum:     "rgba(255,255,255,0.04)",
    rule:         "#E1F311",
    desc:         "rgba(255,255,255,0.55)",
    dotInactive:  "rgba(255,255,255,0.18)",
    dotActive:    "#E1F311",
    counter:      "rgba(255,255,255,0.4)",
    progTrack:    "rgba(255,255,255,0.1)",
    progFill:     "#E1F311",
    hint:         "rgba(255,255,255,0.2)",
    gridColor:    "rgba(255,255,255,0.15)",
    phoneGlow:    "rgba(225,243,17,0.18)",
    numBg:        "rgba(255,255,255,0.035)",
  },
  dark: {
    bg:           "#E1F311",
    title:        "#0a0a0a",
    tag:          "rgba(0,0,0,0.65)",
    tagLine:      "rgba(0,0,0,0.5)",
    ghostNum:     "rgba(0,0,0,0.1)",
    rule:         "rgba(0,0,0,0.4)",
    desc:         "rgba(0,0,0,0.7)",
    dotInactive:  "rgba(0,0,0,0.22)",
    dotActive:    "#000000",
    counter:      "rgba(0,0,0,0.45)",
    progTrack:    "rgba(0,0,0,0.18)",
    progFill:     "#000000",
    hint:         "rgba(0,0,0,0.28)",
    gridColor:    "rgba(0,0,0,1)",
    phoneGlow:    "rgba(0,0,0,0.25)",
    numBg:        "rgba(0,0,0,0.06)",
  },
} as const;

export default function FeatureShowcase() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scheme = PANELS[activeIdx].scheme;
  const t = THEME[scheme];

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".feat-slide-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${panels.length * 100}%`,
        onUpdate: (self) => {
          const idx = Math.min(
            Math.round(self.progress * (panels.length - 1)),
            panels.length - 1,
          );
          setActiveIdx(idx);
          if (progressFillRef.current) {
            gsap.set(progressFillRef.current, {
              scaleX: (idx + 1) / panels.length,
              transformOrigin: "left center",
            });
          }
        },
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="h-screen w-full overflow-hidden relative"
      style={{ background: PANELS[0].scheme === "light" ? "#ffffff" : "#E1F311" }}
    >
      {/* ── Slide track ── */}
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {PANELS.map((panel, i) => {
          const th = THEME[panel.scheme];
          return (
            <div
              key={i}
              className="feat-slide-panel"
              style={{
                width: "100%",
                height: "100%",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                background: th.bg,
              }}
            >
              {/* Dot grid */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 0, opacity: 0.035,
                backgroundImage: `radial-gradient(circle, ${th.gridColor} 1px, transparent 1px)`,
                backgroundSize: "38px 38px",
                pointerEvents: "none",
              }} />

              {/* Ghost number */}
              <div style={{
                position: "absolute", left: "-1vw", bottom: "-8vh", zIndex: 1,
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28vw", lineHeight: 1,
                color: th.ghostNum,
                pointerEvents: "none", userSelect: "none",
                whiteSpace: "nowrap",
              }}>
                /{panel.num}
              </div>

              {/* Content */}
              <div style={{
                position: "relative", zIndex: 2,
                width: "100%", height: "100%",
                display: "flex", alignItems: "center",
                padding: "0 6vw", gap: "4vw",
              }}>
                {/* LEFT — text */}
                <div style={{ flex: "0 0 46%", maxWidth: "46%" }}>
                  {/* Tag */}
                  <p style={{
                    color: th.tag,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(11px, 1.05vw, 15px)",
                    letterSpacing: "0.3em",
                    marginBottom: "1.2rem",
                    display: "flex", alignItems: "center", gap: "0.6rem",
                  }}>
                    <span style={{
                      display: "inline-block", width: 28, height: 2,
                      background: th.tagLine,
                    }} />
                    {panel.tag}
                  </p>

                  {/* Ghost slide number */}
                  <p style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 56px)",
                    color: th.numBg,
                    lineHeight: 1, marginBottom: "0.1rem",
                  }}>/{panel.num}</p>

                  {/* Title */}
                  <h2 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(30px, 4.8vw, 70px)",
                    color: th.title,
                    lineHeight: 1.0,
                    marginBottom: "1.6rem",
                  }}>
                    {panel.title}
                  </h2>

                  {/* Red rule */}
                  <div style={{
                    width: 52, height: 2,
                    background: th.rule,
                    marginBottom: "1.6rem",
                  }} />

                  {/* Description */}
                  <p style={{
                    fontSize: "clamp(14px, 1.1vw, 17px)",
                    color: th.desc,
                    lineHeight: 1.85,
                    maxWidth: 420,
                  }}>
                    {panel.desc}
                  </p>
                </div>

                {/* RIGHT — phone mockup */}
                <div style={{
                  flex: "1 1 54%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  height: "100%",
                  position: "relative",
                }}>
                  {/* Glow behind phone */}
                  <div style={{
                    position: "absolute",
                    width: "50%", height: "60%",
                    background: `radial-gradient(circle, ${th.phoneGlow} 0%, transparent 70%)`,
                    filter: "blur(60px)",
                    zIndex: 0,
                    pointerEvents: "none",
                  }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <img
                      src={PHONE_IMAGES[i]}
                      alt="NEKO Wallet App"
                      style={{
                        height: Math.min(Math.round(window.innerHeight * 0.72), 520),
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom UI (adapts to active slide colour) ── */}

      {/* Progress counter + bar */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex", alignItems: "center", gap: 14,
        width: "min(480px, 60vw)",
        pointerEvents: "none",
        transition: "color 0.4s",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: t.counter,
          fontSize: 14, minWidth: 28, textAlign: "right",
          transition: "color 0.4s",
        }}>
          {String(activeIdx + 1).padStart(2, "0")}
        </span>

        <div style={{
          flex: 1, height: 2,
          background: t.progTrack,
          borderRadius: 2, overflow: "hidden", position: "relative",
          transition: "background 0.4s",
        }}>
          <div
            ref={progressFillRef}
            style={{
              position: "absolute", inset: 0,
              background: t.progFill,
              borderRadius: 2,
              transformOrigin: "left center",
              transform: `scaleX(${1 / TOTAL})`,
              transition: "background 0.4s",
            }}
          />
        </div>

        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: t.counter,
          fontSize: 14, minWidth: 28,
          transition: "color 0.4s",
        }}>
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* Dot indicators */}
      <div style={{
        position: "absolute", bottom: 80, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex", gap: 7,
        pointerEvents: "none",
      }}>
        {PANELS.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === activeIdx ? 22 : 6,
              height: 6, borderRadius: 4,
              background: i === activeIdx ? t.dotActive : t.dotInactive,
              transition: "width 0.35s ease, background 0.35s",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", right: 40, bottom: 40,
        zIndex: 20,
        color: t.hint,
        fontSize: 11,
        letterSpacing: "0.22em",
        fontFamily: "'Bebas Neue', sans-serif",
        writingMode: "vertical-rl",
        pointerEvents: "none",
        transition: "color 0.4s",
      }}>
        SCROLL TO EXPLORE ↓
      </div>

      {/* Slide label — top right */}
      <div style={{
        position: "absolute", top: 32, right: 48,
        zIndex: 20, pointerEvents: "none",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 13,
        letterSpacing: "0.25em",
        color: t.counter,
        transition: "color 0.4s",
      }}>
        {PANELS[activeIdx].tag} — {PANELS[activeIdx].num} / {String(TOTAL).padStart(2, "0")}
      </div>
    </section>
  );
}
