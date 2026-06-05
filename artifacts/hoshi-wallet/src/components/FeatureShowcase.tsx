import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

import img1 from "@assets/image_1780589377839.png";
import img2 from "@assets/image_1780589392895.png";
import img3 from "@assets/image_1780589409230.png";
import img4 from "@assets/image_1780589420005.png";
import img5 from "@assets/image_1780589437631.png";
import img6 from "@assets/image_1780589449046.png";
import img7 from "@assets/image_1780589462620.png";
import img8 from "@assets/image_1780589474166.png";

const PANELS = [
  { img: img1, num: "01", tag: "CORE FEATURE",  title: "SWAP TOKENS DIRECTLY IN THE APP",   desc: "Thousands of tokens, dozens of chains. HOSHI Wallet finds the best rate for you — no need to open a DEX or browser." },
  { img: img2, num: "02", tag: "ASSETS",         title: "1000+ TOKENS & COINS",              desc: "Bitcoin, Ethereum, Solana, and thousands more across 50+ blockchains. All in one wallet." },
  { img: img3, num: "03", tag: "TRANSFER",       title: "TRANSFER CRYPTO INSTANTLY",        desc: "Send and receive tokens across 50+ blockchains. Paste address or scan QR — seconds, not minutes." },
  { img: img4, num: "04", tag: "PREDICTION",     title: "PREDICT REAL-WORLD EVENTS",        desc: "Elections, sports, culture — place predictions directly from the app. Live odds, fast payouts." },
  { img: img5, num: "05", tag: "INTELLIGENCE",   title: "NEWS & SECTOR ANALYSIS BUILT-IN",  desc: "Real-time crypto news, sector money flow, fear & greed index — smarter moves, right inside the app." },
  { img: img6, num: "06", tag: "CUSTOMIZE",      title: "ADD ANY TOKEN YOU WANT",           desc: "Search thousands of tokens or add custom ones by contract address. Your wallet, your tokens — no limits." },
  { img: img7, num: "07", tag: "PORTFOLIO",      title: "ALL WALLETS, ONE SCREEN",          desc: "Every chain, every wallet, every token — in one place. Live balance updates. Share your portfolio with friends." },
  { img: img8, num: "08", tag: "DISCOVERY",      title: "DISCOVER TOKENS BEFORE THEY TREND", desc: "Our engine filters tokens with real market data — not just hype. One tap to add to your wallet." },
];

const TOTAL = PANELS.length;
const DURATION = 1.4;
const AUTOPLAY_MS = 9000;

export default function FeatureShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  /* Animate to a slide index */
  const goTo = useCallback((idx: number) => {
    if (animating) return;
    const next = (idx + TOTAL) % TOTAL;
    setAnimating(true);

    /* Slide track */
    gsap.to(trackRef.current, {
      x: `-${next * 100}%`,
      duration: DURATION,
      ease: "power3.inOut",
      onComplete: () => {
        setActive(next);
        setAnimating(false);
      },
    });

    /* Progress bar fill */
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: (next + 1) / TOTAL,
        duration: DURATION,
        ease: "power3.inOut",
        transformOrigin: "left center",
      });
    }
  }, [animating]);

  /* Autoplay */
  const scheduleNext = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => {
      setActive(cur => {
        const next = (cur + 1) % TOTAL;
        if (!animating) {
          gsap.to(trackRef.current, {
            x: `-${next * 100}%`,
            duration: DURATION,
            ease: "power3.inOut",
          });
          if (progressRef.current) {
            gsap.to(progressRef.current, {
              scaleX: (next + 1) / TOTAL,
              duration: DURATION,
              ease: "power3.inOut",
              transformOrigin: "left center",
            });
          }
        }
        return next;
      });
      scheduleNext();
    }, AUTOPLAY_MS);
  }, [animating]);

  useEffect(() => {
    /* Set initial progress */
    if (progressRef.current) {
      gsap.set(progressRef.current, { scaleX: 1 / TOTAL, transformOrigin: "left center" });
    }
    scheduleNext();
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  }, []);

  /* Keyboard nav */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { goTo(active + 1); scheduleNext(); }
      if (e.key === "ArrowLeft")  { goTo(active - 1); scheduleNext(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, goTo, scheduleNext]);

  const handleNav = (dir: 1 | -1) => {
    goTo(active + dir);
    scheduleNext();
  };

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", background: "#080808" }}
    >
      {/* ── Slide track ── */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: `${TOTAL * 100}%`,
          height: "100%",
          willChange: "transform",
        }}
      >
        {PANELS.map((panel, i) => (
          <div
            key={i}
            style={{
              width: `${100 / TOTAL}%`,
              flexShrink: 0,
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Radial red glow bg */}
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
              position: "absolute", left: "-2vw", bottom: "-8vh", zIndex: 1,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "28vw", lineHeight: 1,
              color: "rgba(255,255,255,0.03)",
              pointerEvents: "none", userSelect: "none",
              whiteSpace: "nowrap",
            }}>
              /{panel.num}
            </div>

            {/* Content layout */}
            <div style={{
              position: "relative", zIndex: 2,
              width: "100%", height: "100%",
              display: "flex", alignItems: "center",
              padding: "0 6vw",
              gap: "4vw",
            }}>
              {/* LEFT — text */}
              <div style={{ flex: "0 0 46%", maxWidth: "46%" }}>
                {/* Tag */}
                <p style={{
                  color: "#DC2626",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(12px, 1.1vw, 16px)",
                  letterSpacing: "0.3em",
                  marginBottom: "1.25rem",
                  display: "flex", alignItems: "center", gap: "0.6rem",
                }}>
                  <span style={{ display: "inline-block", width: 28, height: 2, background: "#DC2626" }} />
                  {panel.tag}
                </p>

                {/* Ghost slide number */}
                <p style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(32px, 4vw, 60px)",
                  color: "rgba(255,255,255,0.12)",
                  lineHeight: 1, marginBottom: "0.15rem",
                }}>/{panel.num}</p>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(32px, 5vw, 72px)",
                  color: "#ffffff",
                  lineHeight: 1.0,
                  marginBottom: "1.75rem",
                }}>
                  {panel.title}
                </h2>

                {/* Red rule */}
                <div style={{ width: 56, height: 2, background: "#DC2626", marginBottom: "1.75rem" }} />

                {/* Desc */}
                <p style={{
                  fontSize: "clamp(14px, 1.15vw, 18px)",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  maxWidth: 440,
                }}>
                  {panel.desc}
                </p>
              </div>

              {/* RIGHT — phone image */}
              <div style={{
                flex: "1 1 54%",
                display: "flex", alignItems: "center", justifyContent: "center",
                height: "100%",
              }}>
                <div style={{ position: "relative" }}>
                  {/* Glow behind phone */}
                  <div style={{
                    position: "absolute", inset: "-25%",
                    background: "radial-gradient(circle, rgba(220,38,38,0.22) 0%, transparent 65%)",
                    filter: "blur(48px)",
                    zIndex: 0,
                  }} />
                  <img
                    src={panel.img}
                    alt={panel.title}
                    style={{
                      position: "relative", zIndex: 1,
                      height: "min(72vh, 560px)", width: "auto",
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

      {/* ── Prev button ── */}
      <NavBtn
        side="left"
        onClick={() => handleNav(-1)}
        label="Previous slide"
      />

      {/* ── Next button ── */}
      <NavBtn
        side="right"
        onClick={() => handleNav(1)}
        label="Next slide"
      />

      {/* ── Bottom pagination bar ── */}
      <div style={{
        position: "absolute", bottom: 44, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex", alignItems: "center", gap: 16,
        width: "min(480px, 60vw)",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: 15, minWidth: 28, textAlign: "right",
        }}>
          {String(active + 1).padStart(2, "0")}
        </span>

        {/* Progress bar track */}
        <div style={{
          flex: 1, height: 2,
          background: "rgba(255,255,255,0.12)",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}>
          <div
            ref={progressRef}
            style={{
              position: "absolute", inset: 0,
              background: "#DC2626",
              borderRadius: 2,
              transformOrigin: "left center",
            }}
          />
        </div>

        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: 15, minWidth: 28,
        }}>
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* ── Dot indicators ── */}
      <div style={{
        position: "absolute", bottom: 80, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex", gap: 8,
      }}>
        {PANELS.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); scheduleNext(); }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === active ? 24 : 6,
              height: 6,
              borderRadius: 4,
              background: i === active ? "#DC2626" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.4s ease, background 0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Nav button sub-component ── */
function NavBtn({
  side, onClick, label,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        bottom: 36,
        [side]: 40,
        zIndex: 20,
        width: 52, height: 52,
        borderRadius: "50%",
        background: hover ? "rgba(220,38,38,0.22)" : "rgba(255,255,255,0.07)",
        border: `1px solid ${hover ? "#DC2626" : "rgba(255,255,255,0.14)"}`,
        backdropFilter: "blur(12px)",
        color: "#fff",
        fontSize: 18,
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.28s, border-color 0.28s",
      }}
    >
      {side === "left" ? "←" : "→"}
    </button>
  );
}
