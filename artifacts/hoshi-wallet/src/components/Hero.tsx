import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import phone1Img from "@assets/Gemini_Generated_Image_72b8k72b8k72b8k7-Photoroom_1781536277221.png";
import phone2Img from "@assets/Gemini_Generated_Image_fr1ccxfr1ccxfr1c-Photoroom_1781537028345.png";
import phone3Img from "@assets/Gemini_Generated_Image_k3316nk3316nk331-Photoroom_1781537028346.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-left > *", { x: -60, opacity: 0, duration: 0.9, stagger: 0.12 })
      .from(".hero-phone-1", { x: -40, opacity: 0, scale: 0.9, duration: 1.0 }, "-=0.6")
      .from(".hero-phone-2", { y: 40, opacity: 0, scale: 0.9, duration: 1.0 }, "-=0.8")
      .from(".hero-phone-3", { x: 40, opacity: 0, scale: 0.9, duration: 1.0 }, "-=0.8")
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* LEFT — text */}
          <div className="hero-left flex flex-col items-start gap-6 lg:max-w-[48%]">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              ONE WALLET. EVERY CHAIN. EVERYTHING DEFI.
            </span>

            {/* Headline */}
            <h1
              className="font-['Bebas_Neue'] text-foreground leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
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
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                data-testid="btn-create-wallet"
                className="px-8 py-4 rounded-full bg-primary text-[#0a0a0a] font-bold text-base hover:bg-[#c8d90f] transition-colors"
              >
                CREATE WALLET
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-4 hero-stats">
              {[
                { label: "Chains Supported", value: "50+" },
                { label: "Built-in Swap", value: "YES" },
                { label: "Non-Custodial", value: "100%" },
                { label: "Prediction Market", value: "LIVE" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-['Bebas_Neue'] text-3xl text-foreground leading-none">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-semibold tracking-wide mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — three staggered phones */}
          <div className="flex-shrink-0 flex items-end justify-center lg:max-w-[50%] w-full">
            <div className="relative flex items-end justify-center" style={{ height: "480px", width: "100%" }}>

              {/* Glow blob */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
              </div>

              {/* Phone 1 — left, slightly back */}
              <div
                className="hero-phone-1 absolute bottom-0"
                style={{ left: "0%", zIndex: 1, transform: "rotate(-6deg) translateY(20px)" }}
              >
                <img
                  src={phone1Img}
                  alt="NEKO Wallet Connect"
                  className="w-40 md:w-48 lg:w-52 object-contain drop-shadow-xl select-none"
                  draggable={false}
                />
              </div>

              {/* Phone 2 — center, front and taller */}
              <div
                className="hero-phone-2 absolute bottom-0"
                style={{ left: "50%", transform: "translateX(-50%)", zIndex: 3 }}
              >
                <img
                  src={phone2Img}
                  alt="NEKO Wallet Dashboard"
                  className="w-52 md:w-60 lg:w-64 object-contain drop-shadow-2xl select-none"
                  draggable={false}
                />
              </div>

              {/* Phone 3 — right, slightly back */}
              <div
                className="hero-phone-3 absolute bottom-0"
                style={{ right: "0%", zIndex: 1, transform: "rotate(6deg) translateY(20px)" }}
              >
                <img
                  src={phone3Img}
                  alt="NEKO Card"
                  className="w-40 md:w-48 lg:w-52 object-contain drop-shadow-xl select-none"
                  draggable={false}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
