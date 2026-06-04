import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "@assets/image_1780589285878.png";
import img2 from "@assets/image_1780589305863.png";
import img3 from "@assets/image_1780589315906.png";
import img4 from "@assets/image_1780589326913.png";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "NON-CUSTODIAL",
    desc: "Your private keys, your rules. No server ever touches your seed phrase. Full sovereignty, zero compromise.",
    img: img1
  },
  {
    title: "CUSTOM ENCRYPTION",
    desc: "Private keys encrypted with AES-256 and stored locally on your device. No cloud, no server, no third-party access — ever.",
    img: img2
  },
  {
    title: "ZERO KNOWLEDGE",
    desc: "We don't know your name, your balance, or what you do. By design, not by accident.",
    img: img3
  },
  {
    title: "BIOMETRIC LOCK",
    desc: "Face ID or fingerprint to unlock. Phone stolen? They still can't get in.",
    img: img4
  }
];

export default function Security() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pinning the section
    const rightPanels = gsap.utils.toArray('.sec-panel');
    
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${rightPanels.length * 100}%`,
      pin: true,
      scrub: 1,
    });

    // Horizontal scroll effect on right panels
    gsap.to(rightPanels, {
      xPercent: -100 * (rightPanels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${rightPanels.length * 100}%`,
        scrub: 1,
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="security" className="h-screen w-full flex overflow-hidden bg-white">
      
      {/* Left Pinned Content */}
      <div ref={leftRef} className="w-1/3 h-full relative flex flex-col justify-center px-12 border-r border-neutral-200">
        <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] leading-[0.85] text-foreground z-10 relative">
          SECURITY<br/>IS BUILT-IN
        </h2>
        
        {/* Ghost Text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-5 flex flex-col">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-9xl font-['Bebas_Neue'] whitespace-nowrap leading-none">
              DISCOVER / DISCOVER /
            </span>
          ))}
        </div>
      </div>

      {/* Right Scrolling Content */}
      <div ref={rightRef} className="w-2/3 h-full bg-[#0a0a0a] flex">
        {FEATURES.map((feat, idx) => (
          <div key={idx} className="sec-panel w-full h-full flex-shrink-0 flex items-center justify-center p-12">
            <div className="max-w-xl w-full">
              <div className="relative mb-12">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden transform -rotate-3 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                  {/* Duotone Red Filter via CSS */}
                  <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
                  <img 
                    src={feat.img} 
                    alt={feat.title} 
                    className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                  />
                </div>
                <div className="absolute -top-6 -right-6 text-9xl font-['Bebas_Neue'] text-neutral-800 opacity-30 select-none z-0">
                  /0{idx + 1}
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white mb-4 tracking-wider">
                {feat.title}
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                {feat.desc}
              </p>
              <a href="#" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors uppercase tracking-widest text-sm">
                DISCOVER / DISCOVER →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
