import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import nekoLogo from "@assets/LOGO_1781531503433.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ── Chip SVG ── */
const ChipSVG = () => (
  <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="38" rx="7" fill="url(#chipGrad2)" />
    <rect x="16" y="0" width="16" height="38" rx="2" fill="rgba(0,0,0,0.10)" />
    <rect x="0" y="11" width="48" height="16" rx="2" fill="rgba(0,0,0,0.10)" />
    <rect x="16" y="11" width="16" height="16" rx="4" fill="rgba(0,0,0,0.15)" />
    <line x1="16" y1="0" x2="16" y2="38" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    <line x1="32" y1="0" x2="32" y2="38" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    <line x1="0" y1="11" x2="48" y2="11" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    <line x1="0" y1="27" x2="48" y2="27" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    <defs>
      <linearGradient id="chipGrad2" x1="0" y1="0" x2="48" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4A843" />
        <stop offset="0.35" stopColor="#F5D97A" />
        <stop offset="0.65" stopColor="#C8A84B" />
        <stop offset="1" stopColor="#A07830" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── Mastercard SVG ── */
const MastercardSVG = ({ size = 52 }: { size?: number }) => (
  <svg width={size} height={size * 0.625} viewBox="0 0 52 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19" cy="16" r="14" fill="#EB001B" />
    <circle cx="33" cy="16" r="14" fill="#F79E1B" />
    <path d="M26 4.8a14 14 0 0 1 0 22.4A14 14 0 0 1 26 4.8Z" fill="#FF5F00" />
  </svg>
);

/* ── Card variants ── */
interface CardProps {
  variant: "main" | "anime" | "meme";
  width?: number;
}

const CARD_CONFIGS = {
  main: {
    bg: "linear-gradient(135deg, #E8F520 0%, #D4E00E 45%, #C2CE0A 100%)",
    shadowColor: "rgba(225,243,17,0.35)",
    textDark: "#0a0a0a",
    textMid: "rgba(0,0,0,0.55)",
    textLight: "rgba(0,0,0,0.38)",
    logoBoxBg: "#0a0a0a",
    cardNum: "4242  2625  4318  4889",
    cardHolder: "YOUR NAME",
    subtitle: "CRYPTO MASTERCARD",
    shimmer: "rgba(255,255,255,0.18)",
  },
  anime: {
    bg: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #5b21b6 100%)",
    shadowColor: "rgba(139,92,246,0.4)",
    textDark: "#ffffff",
    textMid: "rgba(255,255,255,0.7)",
    textLight: "rgba(255,255,255,0.45)",
    logoBoxBg: "rgba(255,255,255,0.15)",
    cardNum: "4242  2625  4318  AN1M",
    cardHolder: "YOUR NAME",
    subtitle: "ANIME EDITION",
    shimmer: "rgba(255,255,255,0.12)",
  },
  meme: {
    bg: "linear-gradient(135deg, #4ade80 0%, #16a34a 50%, #15803d 100%)",
    shadowColor: "rgba(34,197,94,0.4)",
    textDark: "#ffffff",
    textMid: "rgba(255,255,255,0.7)",
    textLight: "rgba(255,255,255,0.45)",
    logoBoxBg: "rgba(0,0,0,0.25)",
    cardNum: "4242  2625  4318  M3M3",
    cardHolder: "YOUR NAME",
    subtitle: "MEME EDITION",
    shimmer: "rgba(255,255,255,0.12)",
  },
};

function NekoCard({ variant, width = 380 }: CardProps) {
  const h = Math.round(width / 1.586);
  const cfg = CARD_CONFIGS[variant];
  const pad = Math.round(width * 0.072);
  const isMain = variant === "main";

  return (
    <div
      style={{
        width,
        height: h,
        borderRadius: Math.round(width * 0.055),
        padding: pad,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: cfg.bg,
        boxShadow: `0 28px 70px ${cfg.shadowColor}, 0 8px 24px rgba(0,0,0,0.25)`,
      }}
    >
      {/* Ghost cat watermark */}
      <img
        src={nekoLogo}
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "52%",
          height: "80%",
          objectFit: "contain",
          opacity: isMain ? 0.10 : 0.08,
          pointerEvents: "none",
          mixBlendMode: isMain ? "multiply" : "overlay",
          filter: isMain ? "brightness(0)" : "brightness(10)",
        }}
      />

      {/* Holographic shimmer stripe */}
      <div style={{
        position: "absolute",
        top: 0, right: "18%", bottom: 0,
        width: "30%",
        background: `linear-gradient(110deg, transparent 20%, ${cfg.shimmer} 50%, transparent 80%)`,
        transform: "skewX(-8deg)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* ── Row 1: Brand + Logo box ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: cfg.textDark,
            fontSize: Math.round(width * 0.085),
            letterSpacing: "0.04em",
            lineHeight: 1,
            marginBottom: 3,
          }}>
            NEKO
          </div>
          <div style={{
            color: cfg.textMid,
            fontSize: Math.round(width * 0.028),
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {cfg.subtitle}
          </div>
        </div>

        {/* Logo box */}
        <div style={{
          width: Math.round(width * 0.13),
          height: Math.round(width * 0.13),
          borderRadius: Math.round(width * 0.025),
          background: cfg.logoBoxBg,
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <img
            src={nekoLogo}
            alt="NEKO"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* ── Row 2: Chip ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <ChipSVG />
      </div>

      {/* ── Row 3: Card number ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{
          color: cfg.textDark,
          fontSize: Math.round(width * 0.052),
          letterSpacing: "0.22em",
          fontFamily: "'Courier New', monospace",
          fontWeight: 700,
          margin: 0,
        }}>
          {cfg.cardNum}
        </p>
      </div>

      {/* ── Row 4: Card holder + Mastercard ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{
            color: cfg.textLight,
            fontSize: Math.round(width * 0.026),
            letterSpacing: "0.14em",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 3,
          }}>
            CARD HOLDER
          </p>
          <p style={{
            color: cfg.textDark,
            fontSize: Math.round(width * 0.038),
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "'Bebas Neue', sans-serif",
          }}>
            {cfg.cardHolder}
          </p>
        </div>

        <MastercardSVG size={Math.round(width * 0.14)} />
      </div>
    </div>
  );
}

/* ── Section ── */
export default function ColdCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".neko-card-title", {
      scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      y: 60, opacity: 0, duration: 0.9, ease: "power3.out",
    });

    gsap.from(".neko-card-desc", {
      scrollTrigger: { trigger: containerRef.current, start: "top 65%" },
      y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out",
    });

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
    <section ref={containerRef} className="py-28 md:py-40 bg-background overflow-hidden relative">

      <div style={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.025,
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <div className="container mx-auto px-4 text-center relative z-10">

        <div className="neko-card-title mb-4">
          <span className="bg-primary text-foreground text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest inline-block mb-5">
            IN DEVELOPMENT
          </span>
          <h2 className="text-6xl md:text-[clamp(56px,8vw,110px)] font-['Bebas_Neue'] text-foreground leading-[0.88]">
            NEKO WALLET<br/>
            <span style={{ color: "#E1F311" }}>/</span> NEKO CARD
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
          <div className="card-left" style={{
            position: "absolute", left: "50%",
            transform: "translateX(-50%) rotate(-14deg)",
            transformOrigin: "bottom center",
            marginLeft: -280, zIndex: 10, cursor: "pointer",
          }}>
            <NekoCard variant="anime" width={300} />
          </div>

          <div className="card-center" style={{
            position: "absolute", left: "50%",
            transform: "translateX(-50%) rotate(-3deg)",
            transformOrigin: "bottom center",
            zIndex: 30, cursor: "pointer",
          }}>
            <NekoCard variant="main" width={350} />
          </div>

          <div className="card-right" style={{
            position: "absolute", left: "50%",
            transform: "translateX(-50%) rotate(13deg)",
            transformOrigin: "bottom center",
            marginLeft: 280, zIndex: 10, cursor: "pointer",
          }}>
            <NekoCard variant="meme" width={300} />
          </div>
        </div>

        <p className="neko-card-desc mt-20 text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
          A physical Visa/Mastercard linked directly to your NEKO Wallet — spend crypto anywhere, pay in any currency, with collectible limited-edition designs.
        </p>

        <div className="neko-card-desc flex flex-wrap justify-center gap-3 mt-8">
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
