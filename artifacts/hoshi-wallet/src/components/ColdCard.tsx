import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import hoshiLogo from "@assets/LOGO_1781531503433.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ── Inline SVGs ── */
const ChipSVG = () => (
  <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="44" height="34" rx="6" fill="url(#chipGrad)" />
    <rect x="15" y="0" width="14" height="34" rx="2" fill="rgba(0,0,0,0.12)" />
    <rect x="0" y="10" width="44" height="14" rx="2" fill="rgba(0,0,0,0.12)" />
    <rect x="15" y="10" width="14" height="14" rx="3" fill="rgba(0,0,0,0.18)" />
    <defs>
      <linearGradient id="chipGrad" x1="0" y1="0" x2="44" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C8A84B" />
        <stop offset="0.4" stopColor="#F5D97A" />
        <stop offset="0.7" stopColor="#D4A843" />
        <stop offset="1" stopColor="#A07830" />
      </linearGradient>
    </defs>
  </svg>
);

const MastercardSVG = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size * 0.625} viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="15" r="13" fill="#EB001B" />
    <circle cx="30" cy="15" r="13" fill="#F79E1B" />
    <path d="M24 5.8a13 13 0 0 1 0 18.4A13 13 0 0 1 24 5.8Z" fill="#FF5F00" />
  </svg>
);

const NFCSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7a13 13 0 0 1 0 10" />
    <path d="M16.5 9.5a7 7 0 0 1 0 5" />
    <path d="M13 11.5a2.5 2.5 0 0 1 0 1" />
    <path d="M4 7v10" />
    <rect x="1" y="5" width="6" height="14" rx="1" />
  </svg>
);

/* ── Card variants ── */
interface CardProps {
  variant: "main" | "anime" | "meme";
  width?: number;
}

function HoshiCard({ variant, width = 380 }: CardProps) {
  const h = Math.round(width / 1.586);

  const styles: Record<string, React.CSSProperties> = {
    main: {
      background: "linear-gradient(135deg, #141414 0%, #1c1c1c 50%, #0a0a0a 100%)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    anime: {
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1040 60%, #12082e 100%)",
      border: "1px solid rgba(120,80,220,0.35)",
    },
    meme: {
      background: "linear-gradient(135deg, #0a1a0a 0%, #0f2010 60%, #061206 100%)",
      border: "1px solid rgba(80,200,80,0.3)",
    },
  };

  const accentColors: Record<string, string> = {
    main: "#DC2626",
    anime: "#8B5CF6",
    meme: "#22C55E",
  };
  const accent = accentColors[variant];

  return (
    <div
      style={{
        width,
        height: h,
        borderRadius: 20,
        padding: 28,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: `0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)`,
        ...styles[variant],
      }}
    >
      {/* Background pattern */}
      {variant === "anime" && (
        <>
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, opacity: 0.07,
            backgroundImage: `
              radial-gradient(circle at 80% 20%, ${accent} 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, #EC4899 0%, transparent 50%)
            `,
          }} />
          {/* Sakura-ish circles */}
          {[
            { top: "10%", left: "70%", size: 60 },
            { top: "50%", left: "85%", size: 40 },
            { top: "70%", left: "60%", size: 30 },
          ].map((c, i) => (
            <div key={i} style={{
              position: "absolute", zIndex: 0,
              top: c.top, left: c.left,
              width: c.size, height: c.size,
              borderRadius: "50%",
              border: `1px solid rgba(139,92,246,0.25)`,
              pointerEvents: "none",
            }} />
          ))}
        </>
      )}
      {variant === "meme" && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.06,
          backgroundImage: `
            radial-gradient(circle at 75% 25%, ${accent} 0%, transparent 55%),
            radial-gradient(circle at 25% 75%, #84CC16 0%, transparent 55%)
          `,
        }} />
      )}
      {variant === "main" && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(220,38,38,0.12) 0%, transparent 55%),
            radial-gradient(circle at 15% 85%, rgba(220,38,38,0.08) 0%, transparent 50%)
          `,
        }} />
      )}

      {/* Holographic shimmer stripe */}
      <div style={{
        position: "absolute",
        top: -20, right: -40, bottom: -20,
        width: 90,
        background: `linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)`,
        transform: "skewX(-10deg)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* ── Row 1: Logo + badge ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={hoshiLogo} alt="HOSHI" style={{ width: 28, height: 28, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: 22, letterSpacing: "0.1em" }}>
            HOSHI
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
          {variant === "main" && (
            <span style={{
              background: "#DC2626", color: "#fff",
              fontSize: 9, fontWeight: 800,
              padding: "3px 8px", borderRadius: 4,
              letterSpacing: "0.15em",
            }}>IN DEV</span>
          )}
          {variant === "anime" && (
            <span style={{
              background: accentColors.anime, color: "#fff",
              fontSize: 9, fontWeight: 800,
              padding: "3px 8px", borderRadius: 4,
              letterSpacing: "0.15em",
            }}>ANIME EDITION</span>
          )}
          {variant === "meme" && (
            <span style={{
              background: accentColors.meme, color: "#000",
              fontSize: 9, fontWeight: 800,
              padding: "3px 8px", borderRadius: 4,
              letterSpacing: "0.15em",
            }}>MEME EDITION</span>
          )}
          <div style={{ color: "rgba(255,255,255,0.4)" }}>
            <NFCSvg />
          </div>
        </div>
      </div>

      {/* ── Row 2: Chip ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <ChipSVG />
      </div>

      {/* ── Row 3: Card number + network ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.15em", marginBottom: 6, fontFamily: "monospace" }}>
            CARD NUMBER
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, letterSpacing: "0.25em", fontFamily: "monospace" }}>
            •••• &nbsp;•••• &nbsp;•••• &nbsp;
            <span style={{ color: accent }}>
              {variant === "main" ? "0x4B" : variant === "anime" ? "AN1M" : "M3M3"}
            </span>
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, letterSpacing: "0.2em", marginTop: 6, fontFamily: "'Bebas Neue', sans-serif" }}>
            {variant === "main" ? "NEKO WALLET / COLDCARD" : variant === "anime" ? "LIMITED EDITION — 2025" : "MEME LORDS ONLY — 2025"}
          </p>
        </div>
        <MastercardSVG size={52} />
      </div>
    </div>
  );
}

/* ── Section ── */
export default function ColdCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hoshi-card-title", {
      scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      y: 60, opacity: 0, duration: 0.9, ease: "power3.out",
    });

    gsap.from(".hoshi-card-desc", {
      scrollTrigger: { trigger: containerRef.current, start: "top 65%" },
      y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out",
    });

    /* Cards: fan in from below */
    gsap.fromTo(".card-left",
      { y: 160, opacity: 0, rotate: -2 },
      { y: 0, opacity: 1, rotate: -14, duration: 1.1, ease: "back.out(1.5)",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }, delay: 0.1 }
    );
    gsap.fromTo(".card-center",
      { y: 180, opacity: 0, rotate: 0 },
      { y: 0, opacity: 1, rotate: -3, duration: 1.2, ease: "back.out(1.4)",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }, delay: 0.25 }
    );
    gsap.fromTo(".card-right",
      { y: 160, opacity: 0, rotate: 2 },
      { y: 0, opacity: 1, rotate: 13, duration: 1.1, ease: "back.out(1.5)",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }, delay: 0.4 }
    );

    /* Hover lift — left */
    const leftEl = document.querySelector<HTMLElement>(".card-left");
    const centerEl = document.querySelector<HTMLElement>(".card-center");
    const rightEl = document.querySelector<HTMLElement>(".card-right");

    [
      { el: leftEl, rot: -14 },
      { el: centerEl, rot: -3 },
      { el: rightEl, rot: 13 },
    ].forEach(({ el, rot }) => {
      if (!el) return;
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { y: -20, rotate: rot * 0.3, scale: 1.04, duration: 0.4, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { y: 0, rotate: rot, scale: 1, duration: 0.5, ease: "back.out(1.5)" });
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 md:py-40 bg-white overflow-hidden relative">

      {/* Subtle grid bg */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.025,
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Title block */}
        <div className="hoshi-card-title mb-4">
          <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest inline-block mb-5">
            IN DEVELOPMENT
          </span>
          <h2 className="text-6xl md:text-[clamp(56px,8vw,110px)] font-['Bebas_Neue'] text-foreground leading-[0.88]">
            NEKO WALLET<br/>
            <span style={{ color: "#DC2626" }}>/</span> NEKO CARD
          </h2>
        </div>

        {/* Card fan */}
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: 820,
          margin: "0 auto",
          height: 340,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: 40,
        }}>
          {/* Left card — Anime Edition */}
          <div
            className="card-left"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) rotate(-14deg)",
              transformOrigin: "bottom center",
              marginLeft: -280,
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <HoshiCard variant="anime" width={300} />
          </div>

          {/* Center card — Main */}
          <div
            className="card-center"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) rotate(-3deg)",
              transformOrigin: "bottom center",
              zIndex: 30,
              cursor: "pointer",
            }}
          >
            <HoshiCard variant="main" width={350} />
          </div>

          {/* Right card — Meme Edition */}
          <div
            className="card-right"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) rotate(13deg)",
              transformOrigin: "bottom center",
              marginLeft: 280,
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <HoshiCard variant="meme" width={300} />
          </div>
        </div>

        {/* Description */}
        <p className="hoshi-card-desc mt-20 text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
          A physical Visa/Mastercard linked directly to your HOSHI Wallet — spend crypto anywhere, pay in any currency, with collectible limited-edition designs.
        </p>

        {/* Feature pills */}
        <div className="hoshi-card-desc flex flex-wrap justify-center gap-3 mt-8">
          {["NFC TAP TO PAY", "50+ BLOCKCHAINS", "VISA / MASTERCARD", "LIMITED EDITIONS", "NON-CUSTODIAL"].map((feat) => (
            <span
              key={feat}
              className="text-xs font-bold tracking-widest px-4 py-2 border border-neutral-200 text-neutral-500 rounded-full uppercase"
            >
              {feat}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
