import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mockupImg from "@assets/MOCKUP_2_1781552313941.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-left > *", { x: -60, opacity: 0, duration: 0.9, stagger: 0.12 })
      .from(".hero-mockup", { x: 80, opacity: 0, scale: 0.92, duration: 1.1 }, "-=0.7")
      .from(".hero-stats", { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      id="home"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full pt-24 pb-12">
        <div className="flex flex-col items-center text-center gap-8">

          {/* TOP — text */}
          <div className="hero-left flex flex-col items-center gap-6 max-w-3xl">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              ONE WALLET. EVERY CHAIN. EVERYTHING DEFI.
            </span>

            {/* Headline */}
            <h1
              className="font-['Bebas_Neue'] text-foreground leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
            >
              YOUR CRYPTO.<br />
              YOUR KEYS.<br />
              <span className="text-primary">YOUR RULES.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground font-medium text-base md:text-lg max-w-lg leading-relaxed">
              Swap, trade, and manage assets across 50+ blockchains — all in one non-custodial wallet built for serious DeFi users.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <a
                href="https://nekoapp.fun/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="btn-create-wallet"
                className="px-8 py-4 rounded-full bg-primary text-[#0a0a0a] font-bold text-base hover:bg-[#c8d90f] transition-colors"
              >
                CREATE WALLET
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mt-4 hero-stats">
              {[
                { label: "Chains Supported", value: "50+" },
                { label: "Built-in Swap", value: "YES" },
                { label: "Non-Custodial", value: "100%" },
                { label: "Prediction Market", value: "LIVE" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="font-['Bebas_Neue'] text-3xl text-foreground leading-none">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-semibold tracking-wide mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM — combined mockup image */}
          <div className="hero-mockup flex items-center justify-center w-full">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              </div>
              <img
                src={mockupImg}
                alt="NEKO Wallet App Mockup"
                className="relative w-full max-w-[874px] mx-auto object-contain drop-shadow-2xl select-none"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
