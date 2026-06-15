import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   CSS Illustrations per security feature
───────────────────────────────────────────── */

function IllustNonCustodial() {
  return (
    <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Outer ring */}
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(225,243,17,0.15)" }} />
      <div style={{ position: "absolute", width: 240, height: 240, borderRadius: "50%", border: "1px dashed rgba(225,243,17,0.1)" }} />

      {/* Main key SVG */}
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" style={{ position: "relative", zIndex: 2 }}>
        {/* Key ring */}
        <circle cx="60" cy="64" r="36" stroke="#E1F311" strokeWidth="10" fill="none" />
        <circle cx="60" cy="64" r="18" fill="rgba(225,243,17,0.15)" stroke="rgba(225,243,17,0.4)" strokeWidth="2" />
        <circle cx="60" cy="64" r="6" fill="#E1F311" />
        {/* Key shaft */}
        <rect x="86" y="60" width="60" height="8" rx="4" fill="#E1F311" />
        {/* Key teeth */}
        <rect x="122" y="68" width="8" height="14" rx="3" fill="#E1F311" />
        <rect x="108" y="68" width="8" height="10" rx="3" fill="#E1F311" />
        <rect x="136" y="68" width="10" height="8" rx="3" fill="#E1F311" />
      </svg>

      {/* "YOUR KEYS" badge */}
      <div style={{
        position: "absolute", top: 16, right: 8,
        background: "rgba(225,243,17,0.12)", border: "1px solid rgba(225,243,17,0.3)",
        borderRadius: 8, padding: "6px 12px",
        color: "#E1F311", fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 14, letterSpacing: "0.15em",
      }}>YOUR KEYS</div>

      {/* "YOUR RULES" badge */}
      <div style={{
        position: "absolute", bottom: 16, left: 8,
        background: "rgba(225,243,17,0.12)", border: "1px solid rgba(225,243,17,0.3)",
        borderRadius: 8, padding: "6px 12px",
        color: "#E1F311", fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 14, letterSpacing: "0.15em",
      }}>YOUR RULES</div>

      {/* NO-CLOUD badge */}
      <div style={{
        position: "absolute", bottom: 60, right: 0,
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
          <path d="M8 22c-3.3 0-6-2.7-6-6 0-3 2.2-5.5 5.1-5.9C7.8 6.4 11.1 4 15 4c3.4 0 6.4 1.8 8.1 4.5.6-.2 1.2-.3 1.9-.3 3.3 0 6 2.7 6 6S28.3 20 25 20l-17 2z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          {/* Cross */}
          <line x1="4" y1="4" x2="34" y2="24" stroke="#E1F311" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="34" y1="4" x2="4" y2="24" stroke="#E1F311" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.12em" }}>NO CLOUD</span>
      </div>

      {/* Seed phrase dots */}
      <div style={{
        position: "absolute", bottom: 0, right: 20,
        display: "flex", gap: 4, flexWrap: "wrap", width: 120,
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{
            height: 16, width: i % 3 === 0 ? 52 : i % 3 === 1 ? 40 : 46,
            borderRadius: 4,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 7 }}>••••••</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IllustEncryption() {
  return (
    <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Hex grid background */}
      {[...Array(18)].map((_, i) => {
        const row = Math.floor(i / 6);
        const col = i % 6;
        return (
          <div key={i} style={{
            position: "absolute",
            left: col * 50 + (row % 2 === 0 ? 0 : 25) + 5,
            top: row * 44 + 20,
            width: 40, height: 46,
            border: "1px solid rgba(225,243,17,0.08)",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: i % 5 === 0 ? "rgba(225,243,17,0.06)" : "transparent",
          }} />
        );
      })}

      {/* Central shield */}
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
          <path d="M50 4L8 20v36c0 26 18 48 42 56 24-8 42-30 42-56V20L50 4z" fill="rgba(225,243,17,0.12)" stroke="#E1F311" strokeWidth="2.5"/>
          {/* Lock body */}
          <rect x="33" y="60" width="34" height="26" rx="5" fill="rgba(225,243,17,0.2)" stroke="#E1F311" strokeWidth="1.5"/>
          {/* Lock shackle */}
          <path d="M38 60V50a12 12 0 0 1 24 0v10" stroke="#E1F311" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* Keyhole */}
          <circle cx="50" cy="71" r="4" fill="#E1F311"/>
          <rect x="48" y="72" width="4" height="8" rx="2" fill="#E1F311"/>
        </svg>

        {/* AES badge */}
        <div style={{
          background: "#E1F311", borderRadius: 6, padding: "4px 14px",
          color: "#000", fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 16, letterSpacing: "0.2em", marginTop: 6,
        }}>AES-256</div>
      </div>

      {/* Binary streams */}
      {[
        { x: 20, y: 40, text: "01101100" },
        { x: 230, y: 60, text: "11010011" },
        { x: 20, y: 230, text: "10110101" },
        { x: 220, y: 250, text: "01001110" },
      ].map((item, i) => (
        <div key={i} style={{
          position: "absolute", left: item.x, top: item.y,
          fontFamily: "monospace", fontSize: 10,
          color: "rgba(225,243,17,0.3)", letterSpacing: "0.1em",
        }}>{item.text}</div>
      ))}

      {/* LOCAL ONLY badge */}
      <div style={{
        position: "absolute", top: 12, left: 10,
        background: "rgba(225,243,17,0.1)", border: "1px solid rgba(225,243,17,0.2)",
        borderRadius: 6, padding: "4px 10px",
        color: "#E1F311", fontSize: 9, fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: "0.15em",
      }}>LOCAL ONLY</div>
    </div>
  );
}

function IllustZeroKnowledge() {
  return (
    <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Outer rings */}
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", border: "1px dashed rgba(225,243,17,0.1)" }} />

      {/* Eye with slash */}
      <svg width="180" height="100" viewBox="0 0 180 100" fill="none" style={{ position: "relative", zIndex: 2 }}>
        {/* Eye outline */}
        <path d="M10 50C10 50 45 10 90 10C135 10 170 50 170 50C170 50 135 90 90 90C45 90 10 50 10 50Z" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="rgba(255,255,255,0.03)"/>
        {/* Iris */}
        <circle cx="90" cy="50" r="24" fill="rgba(225,243,17,0.1)" stroke="rgba(225,243,17,0.3)" strokeWidth="2"/>
        {/* Pupil */}
        <circle cx="90" cy="50" r="10" fill="rgba(225,243,17,0.2)" />
        {/* Big diagonal slash */}
        <line x1="20" y1="8" x2="160" y2="92" stroke="#E1F311" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>

      {/* "NOTHING STORED" */}
      <div style={{
        position: "absolute", bottom: 50, left: "50%", transform: "translateX(-50%)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 13, letterSpacing: "0.25em",
        color: "rgba(255,255,255,0.2)",
        whiteSpace: "nowrap",
      }}>NOTHING STORED</div>

      {/* Question mark bubbles */}
      {[
        { x: 18, y: 60, size: 28 },
        { x: 268, y: 80, size: 22 },
        { x: 40, y: 230, size: 18 },
        { x: 250, y: 200, size: 32 },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute", left: b.x, top: b.y,
          width: b.size, height: b.size, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(255,255,255,0.2)", fontSize: b.size * 0.5,
        }}>?</div>
      ))}

      {/* Data pills */}
      {["NAME", "BALANCE", "HISTORY"].map((label, i) => (
        <div key={label} style={{
          position: "absolute",
          left: [30, 160, 80][i],
          top: [195, 220, 250][i],
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20, padding: "3px 10px",
          fontSize: 9, color: "rgba(255,255,255,0.2)",
          fontFamily: "'Bebas Neue', sans-serif",
          letterSpacing: "0.1em",
          textDecoration: "line-through",
        }}>{label}</div>
      ))}
    </div>
  );
}

function IllustBiometric() {
  const cx = 160;
  const cy = 160;
  const rings = [30, 52, 72, 90, 108, 124, 140];

  return (
    <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Fingerprint rings */}
      <svg width="320" height="320" viewBox="0 0 320 320" fill="none" style={{ position: "absolute" }}>
        {rings.map((r, i) => (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx={r} ry={r * 1.18}
            stroke={`rgba(225,243,17,${0.08 + i * 0.04})`}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={i % 2 === 0 ? "none" : `${r * 0.4} ${r * 0.08}`}
          />
        ))}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="6" fill="#E1F311" />

        {/* Vertical scan line */}
        <line x1={cx} y1={cy - 145} x2={cx} y2={cy + 145} stroke="rgba(225,243,17,0.15)" strokeWidth="1" strokeDasharray="4 4"/>

        {/* Corner scan brackets */}
        {[
          { x: cx - 140, y: cy - 120 }, { x: cx + 100, y: cy - 120 },
          { x: cx - 140, y: cy + 80 }, { x: cx + 100, y: cy + 80 },
        ].map((corner, i) => (
          <g key={i}>
            <line
              x1={corner.x + (i % 2 === 0 ? 0 : 40)} y1={corner.y}
              x2={corner.x + (i % 2 === 0 ? 20 : 0)} y2={corner.y}
              stroke="rgba(225,243,17,0.5)" strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1={corner.x + (i % 2 === 0 ? 0 : 40)} y1={corner.y}
              x2={corner.x + (i % 2 === 0 ? 0 : 40)} y2={corner.y + (i < 2 ? 20 : -20)}
              stroke="rgba(225,243,17,0.5)" strokeWidth="2.5" strokeLinecap="round"
            />
          </g>
        ))}

        {/* Horizontal animated scan bar */}
        <rect x={cx - 140} y={cy - 8} width={240} height={16} rx="4" fill="rgba(225,243,17,0.07)" />
        <rect x={cx - 140} y={cy - 1} width={240} height={2} rx="1" fill="rgba(225,243,17,0.5)" />
      </svg>

      {/* AUTHENTICATED badge */}
      <div style={{
        position: "absolute", bottom: 38, left: "50%", transform: "translateX(-50%)",
        background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)",
        borderRadius: 8, padding: "6px 18px",
        display: "flex", alignItems: "center", gap: 7,
        whiteSpace: "nowrap",
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
        <span style={{ color: "#22C55E", fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.2em" }}>AUTHENTICATED</span>
      </div>

      {/* Face ID dots grid (top) */}
      <div style={{
        position: "absolute", top: 34, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 5, flexWrap: "wrap", width: 80, justifyContent: "center",
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(225,243,17,0.3)" }} />
        ))}
      </div>
    </div>
  );
}

const ILLUST = [IllustNonCustodial, IllustEncryption, IllustZeroKnowledge, IllustBiometric];

/* ─────────────────────────────────────────────
   Slide data — all panels dark
───────────────────────────────────────────── */
const PANELS = [
  {
    num: "01",
    title: "NON-CUSTODIAL",
    sub: "FULL OWNERSHIP",
    desc: "Your private keys, your rules. No server ever touches your seed phrase. Full sovereignty, zero compromise.",
    bg: "#0a0a0a",
    accent: "#E1F311",
  },
  {
    num: "02",
    title: "CUSTOM ENCRYPTION",
    sub: "AES-256 LOCAL",
    desc: "Private keys encrypted with AES-256 and stored locally on your device. No cloud, no server, no third-party access — ever.",
    bg: "#110606",
    accent: "#E1F311",
  },
  {
    num: "03",
    title: "ZERO KNOWLEDGE",
    sub: "TOTAL PRIVACY",
    desc: "We don't know your name, your balance, or what you do. By design, not by accident.",
    bg: "#0a0a0a",
    accent: "#E1F311",
  },
  {
    num: "04",
    title: "BIOMETRIC LOCK",
    sub: "FACE ID & FINGERPRINT",
    desc: "Face ID or fingerprint to unlock. Phone stolen? They still can't get in. Your body is the key.",
    bg: "#060a06",
    accent: "#22C55E",
  },
] as const;

const TOTAL = PANELS.length;

export default function Security() {
  const sectionRef      = useRef<HTMLDivElement>(null);
  const progressRef     = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".sec-full-panel");

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
          if (progressRef.current) {
            gsap.set(progressRef.current, {
              scaleX: (idx + 1) / panels.length,
              transformOrigin: "left center",
            });
          }
        },
      },
    });
  }, { scope: sectionRef });

  const panel = PANELS[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="security"
      className="h-screen w-full overflow-hidden relative"
      style={{ background: PANELS[0].bg }}
    >
      {/* ── Full-width slide track ── */}
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {PANELS.map((p, i) => {
          const Illust = ILLUST[i];
          return (
            <div
              key={i}
              className="sec-full-panel"
              style={{
                width: "100%", height: "100%",
                flexShrink: 0, position: "relative",
                overflow: "hidden",
                background: p.bg,
              }}
            >
              {/* Dot grid */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                opacity: 0.025, pointerEvents: "none",
              }} />

              {/* Ghost number */}
              <div style={{
                position: "absolute", left: "-1vw", bottom: "-8vh",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28vw", lineHeight: 1,
                color: "rgba(255,255,255,0.025)",
                pointerEvents: "none", userSelect: "none",
                whiteSpace: "nowrap",
              }}>/{p.num}</div>

              {/* Slide content */}
              <div style={{
                position: "relative", zIndex: 2,
                width: "100%", height: "100%",
                display: "flex", alignItems: "center",
                padding: "0 6vw", gap: "4vw",
              }}>
                {/* LEFT — text */}
                <div style={{ flex: "0 0 46%", maxWidth: "46%" }}>
                  {/* Section label */}
                  <p style={{
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(11px, 1vw, 14px)",
                    letterSpacing: "0.3em",
                    marginBottom: "1rem",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{ width: 28, height: 1, background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                    SECURITY IS BUILT-IN
                  </p>

                  {/* Slide num + sub-label */}
                  <p style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(11px, 1vw, 14px)",
                    color: p.accent,
                    letterSpacing: "0.25em",
                    marginBottom: "0.4rem",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{ width: 28, height: 2, background: p.accent, display: "inline-block" }} />
                    {p.sub} — /{p.num}
                  </p>

                  {/* Title */}
                  <h2 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(40px, 6.5vw, 96px)",
                    color: "#ffffff",
                    lineHeight: 0.92,
                    marginBottom: "1.8rem",
                  }}>
                    {p.title}
                  </h2>

                  {/* Rule */}
                  <div style={{ width: 48, height: 2, background: p.accent, marginBottom: "1.6rem" }} />

                  {/* Desc */}
                  <p style={{
                    fontSize: "clamp(14px, 1.1vw, 17px)",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.85, maxWidth: 420,
                    marginBottom: "2.4rem",
                  }}>
                    {p.desc}
                  </p>

                  {/* "DISCOVER →" link */}
                  <a href="#" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    color: p.accent,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 13, letterSpacing: "0.3em",
                    textDecoration: "none",
                    borderBottom: `1px solid ${p.accent}40`,
                    paddingBottom: 4,
                  }}>
                    LEARN MORE →
                  </a>
                </div>

                {/* RIGHT — illustration */}
                <div style={{
                  flex: "1 1 54%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  height: "100%", position: "relative",
                }}>
                  {/* Glow */}
                  <div style={{
                    position: "absolute",
                    width: "55%", height: "55%",
                    background: `radial-gradient(circle, ${p.accent}22 0%, transparent 70%)`,
                    filter: "blur(70px)",
                    pointerEvents: "none",
                  }} />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <Illust />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom UI ── */}

      {/* Progress bar */}
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
          color: "rgba(255,255,255,0.3)", fontSize: 14, minWidth: 28, textAlign: "right",
        }}>
          {String(activeIdx + 1).padStart(2, "0")}
        </span>
        <div style={{
          flex: 1, height: 2,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 2, overflow: "hidden", position: "relative",
        }}>
          <div
            ref={progressRef}
            style={{
              position: "absolute", inset: 0,
              background: panel.accent,
              borderRadius: 2,
              transformOrigin: "left center",
              transform: `scaleX(${1 / TOTAL})`,
              transition: "background 0.4s",
            }}
          />
        </div>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "rgba(255,255,255,0.3)", fontSize: 14, minWidth: 28,
        }}>
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* Dot indicators */}
      <div style={{
        position: "absolute", bottom: 80, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20, display: "flex", gap: 7, pointerEvents: "none",
      }}>
        {PANELS.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === activeIdx ? 22 : 6,
              height: 6, borderRadius: 4,
              background: i === activeIdx
                ? PANELS[i].accent
                : "rgba(255,255,255,0.15)",
              transition: "width 0.35s ease, background 0.35s",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", right: 40, bottom: 40,
        zIndex: 20, pointerEvents: "none",
        color: "rgba(255,255,255,0.15)",
        fontSize: 11, letterSpacing: "0.22em",
        fontFamily: "'Bebas Neue', sans-serif",
        writingMode: "vertical-rl",
      }}>
        SCROLL TO EXPLORE ↓
      </div>

      {/* Slide label top-right */}
      <div style={{
        position: "absolute", top: 32, right: 48,
        zIndex: 20, pointerEvents: "none",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 13, letterSpacing: "0.25em",
        color: "rgba(255,255,255,0.2)",
        transition: "color 0.4s",
      }}>
        {panel.sub} — {panel.num} / {String(TOTAL).padStart(2, "0")}
      </div>
    </section>
  );
}
