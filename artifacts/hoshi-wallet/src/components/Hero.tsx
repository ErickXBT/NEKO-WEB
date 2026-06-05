import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import imgCenter from "@assets/image_1780589377839.png";
import imgLeft from "@assets/image_1780589462620.png";
import imgRight from "@assets/image_1780589409230.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-phone-center", { y: 120, opacity: 0, duration: 1 })
      .from(".hero-phone-left", { x: -80, y: 80, opacity: 0, duration: 1 }, "-=0.7")
      .from(".hero-phone-right", { x: 80, y: 80, opacity: 0, duration: 1 }, "-=0.9")
      .from(".hero-title", { y: 60, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.6")
      .from(".hero-fade", { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      id="home"
    >
      {/* Decorative Red Square */}
      <div className="absolute top-36 left-10 w-4 h-4 bg-primary hero-fade" />

      {/* Right tagline */}
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 max-w-[180px] text-right text-muted-foreground text-xs font-medium leading-relaxed hidden md:block hero-fade">
        Swap, earn, predict, track portfolio — everything in one app.
        50+ blockchains, self-custody, keys only on your device
      </div>

      <div className="w-full flex flex-col items-center px-4">
        {/* Phone cluster */}
        <div className="relative w-full max-w-3xl flex justify-center items-end" style={{ height: "56vh" }}>

          {/* Left Phone */}
          <div className="absolute bottom-0 hero-phone-left"
            style={{ left: "5%", width: "27%", maxWidth: 260, zIndex: 10, transform: "rotate(-14deg)", transformOrigin: "bottom right" }}>
            <img src={imgLeft} alt="Portfolio View" className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]" />
          </div>

          {/* Right Phone */}
          <div className="absolute bottom-0 hero-phone-right"
            style={{ right: "5%", width: "27%", maxWidth: 260, zIndex: 10, transform: "rotate(14deg)", transformOrigin: "bottom left" }}>
            <img src={imgRight} alt="Transfer View" className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]" />
          </div>

          {/* Center Phone */}
          <div className="absolute bottom-0 hero-phone-center"
            style={{ left: "50%", transform: "translateX(-50%)", width: "33%", maxWidth: 300, zIndex: 20 }}>
            <img src={imgCenter} alt="Swap View" className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]" />
          </div>

        </div>

        {/* Text block */}
        <div className="w-full text-center mt-8 z-30">
          <h1 className="font-['Bebas_Neue'] leading-none tracking-tight text-foreground hero-title"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
            HOSHI SWAP
          </h1>
          <p className="font-bold tracking-widest text-muted-foreground mt-2 hero-title"
            style={{ fontSize: "clamp(0.7rem, 2.2vw, 1.3rem)" }}>
            ALL-IN-ONE WALLET FOR 50+ BLOCKCHAINS
          </p>

          {/* Download buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 hero-fade">
            <button
              data-testid="btn-google-play"
              className="px-7 py-3 rounded-full border-2 border-foreground font-bold text-sm hover:bg-foreground hover:text-white transition-colors">
              GOOGLE PLAY
            </button>
            <button
              data-testid="btn-app-store"
              className="px-7 py-3 rounded-full border-2 border-foreground font-bold text-sm hover:bg-foreground hover:text-white transition-colors">
              APP STORE
            </button>
            <button
              data-testid="btn-chrome-ext"
              className="px-7 py-3 rounded-full border-2 border-foreground font-bold text-sm hover:bg-foreground hover:text-white transition-colors">
              CHROME EXT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
