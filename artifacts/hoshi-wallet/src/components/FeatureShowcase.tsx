import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "@assets/image_1780589377839.png";
import img2 from "@assets/image_1780589392895.png";
import img3 from "@assets/image_1780589409230.png";
import img4 from "@assets/image_1780589420005.png";
import img5 from "@assets/image_1780589437631.png";
import img6 from "@assets/image_1780589449046.png";
import img7 from "@assets/image_1780589462620.png";
import img8 from "@assets/image_1780589474166.png";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  { img: img1, num: "01", tag: "CORE FEATURE",  title: "SWAP TOKENS DIRECTLY IN THE APP",    desc: "Thousands of tokens, dozens of chains. HOSHI Wallet finds the best rate for you — no need to open a DEX or browser." },
  { img: img2, num: "02", tag: "ASSETS",         title: "1000+ TOKENS & COINS",               desc: "Bitcoin, Ethereum, Solana, and thousands more across 50+ blockchains. All in one wallet." },
  { img: img3, num: "03", tag: "TRANSFER",       title: "TRANSFER CRYPTO INSTANTLY",          desc: "Send and receive tokens across 50+ blockchains. Paste address or scan QR — seconds, not minutes." },
  { img: img4, num: "04", tag: "PREDICTION",     title: "PREDICT REAL-WORLD EVENTS",          desc: "Elections, sports, culture — place predictions directly from the app. Live odds, fast payouts." },
  { img: img5, num: "05", tag: "INTELLIGENCE",   title: "NEWS & SECTOR ANALYSIS BUILT-IN",   desc: "Real-time crypto news, sector money flow, fear & greed index — smarter moves, right inside the app." },
  { img: img6, num: "06", tag: "CUSTOMIZE",      title: "ADD ANY TOKEN YOU WANT",             desc: "Search thousands of tokens or add custom ones by contract address. Your wallet, your tokens — no limits." },
  { img: img7, num: "07", tag: "PORTFOLIO",      title: "ALL WALLETS, ONE SCREEN",            desc: "Every chain, every wallet, every token — in one place. Live balance updates. Share your portfolio." },
  { img: img8, num: "08", tag: "DISCOVERY",      title: "DISCOVER TOKENS BEFORE THEY TREND", desc: "Our engine filters tokens with real market data — not just hype. One tap to add to your wallet." },
];

const TOTAL = PANELS.length;

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".feat-slide-panel");

    /* Pin section + scrub horizontal slide — same pattern as Security */
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
      style={{ background: "#080808" }}
    >
      {/* ── Slide track ── */}
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {PANELS.map((panel, i) => (
          <div
            key={i}
            className="feat-slide-panel"
            style={{
              width: "100%",
              height: "100%",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Red radial glow */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 0,
              background: "radial-gradient(ellipse 55% 65% at 72% 50%, rgba(220,38,38,0.13) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Dot grid */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 0, opacity: 0.04,
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }} />

            {/* Ghost number */}
            <div style={{
              position: "absolute", left: "-1vw", bottom: "-8vh", zIndex: 1,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "28vw", lineHeight: 1,
              color: "rgba(255,255,255,0.03)",
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
              padding: "0 6vw",
              gap: "4vw",
            }}>
              {/* LEFT: text */}
              <div style={{ flex: "0 0 46%", maxWidth: "46%" }}>
                {/* Tag */}
                <p style={{
                  color: "#DC2626",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(11px, 1.05vw, 15px)",
                  letterSpacing: "0.3em",
                  marginBottom: "1.2rem",
                  display: "flex", alignItems: "center", gap: "0.6rem",
                }}>
                  <span style={{ display: "inline-block", width: 28, height: 2, background: "#DC2626" }} />
                  {panel.tag}
                </p>

                {/* Ghost slide number */}
                <p style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 56px)",
                  color: "rgba(255,255,255,0.1)",
                  lineHeight: 1, marginBottom: "0.1rem",
                }}>/{panel.num}</p>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(30px, 4.8vw, 70px)",
                  color: "#ffffff",
                  lineHeight: 1.0,
                  marginBottom: "1.6rem",
                }}>
                  {panel.title}
                </h2>

                {/* Red rule */}
                <div style={{ width: 52, height: 2, background: "#DC2626", marginBottom: "1.6rem" }} />

                {/* Description */}
                <p style={{
                  fontSize: "clamp(14px, 1.1vw, 17px)",
                  color: "rgba(255,255,255,0.58)",
                  lineHeight: 1.85,
                  maxWidth: 420,
                }}>
                  {panel.desc}
                </p>
              </div>

              {/* RIGHT: phone image */}
              <div style={{
                flex: "1 1 54%",
                display: "flex", alignItems: "center", justifyContent: "center",
                height: "100%",
              }}>
                <div style={{ position: "relative" }}>
                  {/* Glow behind phone */}
                  <div style={{
                    position: "absolute", inset: "-25%",
                    background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 65%)",
                    filter: "blur(50px)",
                    zIndex: 0,
                  }} />
                  <img
                    src={panel.img}
                    alt={panel.title}
                    style={{
                      position: "relative", zIndex: 1,
                      height: "min(70vh, 540px)", width: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 48px 80px rgba(0,0,0,0.85))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom UI ── */}

      {/* Progress counter + bar */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex", alignItems: "center", gap: 14,
        width: "min(480px, 60vw)",
        pointerEvents: "none",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "rgba(255,255,255,0.4)",
          fontSize: 14, minWidth: 28, textAlign: "right",
        }}>
          {String(activeIdx + 1).padStart(2, "0")}
        </span>

        {/* Track */}
        <div style={{
          flex: 1, height: 2,
          background: "rgba(255,255,255,0.12)",
          borderRadius: 2, overflow: "hidden", position: "relative",
        }}>
          <div
            ref={progressFillRef}
            style={{
              position: "absolute", inset: 0,
              background: "#DC2626", borderRadius: 2,
              transformOrigin: "left center",
              transform: `scaleX(${1 / TOTAL})`,
            }}
          />
        </div>

        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "rgba(255,255,255,0.4)",
          fontSize: 14, minWidth: 28,
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
              background: i === activeIdx ? "#DC2626" : "rgba(255,255,255,0.18)",
              transition: "width 0.35s ease, background 0.25s",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", right: 40, bottom: 40,
        zIndex: 20,
        color: "rgba(255,255,255,0.25)",
        fontSize: 11,
        letterSpacing: "0.22em",
        fontFamily: "'Bebas Neue', sans-serif",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        pointerEvents: "none",
      }}>
        SCROLL TO EXPLORE ↓
      </div>
    </section>
  );
}
