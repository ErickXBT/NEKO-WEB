import { useState } from "react";
import { ArrowRight } from "lucide-react";

const MARQUEE_TEXT = "NOTIFY ME \u00A0 NOTIFY ME \u00A0 NOTIFY ME \u00A0 NOTIFY ME \u00A0 NOTIFY ME \u00A0 NOTIFY ME \u00A0 NOTIFY ME \u00A0 NOTIFY ME \u00A0 ";

export default function NotifyMe() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Row 1: Filled red text */}
      <div className="relative overflow-hidden mb-[-0.3em]">
        <div
          className="flex whitespace-nowrap font-['Bebas_Neue'] text-primary leading-none select-none"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", animation: "marquee-left 18s linear infinite" }}
        >
          <span>{MARQUEE_TEXT}</span>
          <span aria-hidden>{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* Row 2: Outline text (opposite direction) */}
      <div className="relative overflow-hidden">
        <div
          className="flex whitespace-nowrap font-['Bebas_Neue'] leading-none select-none"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            animation: "marquee-right 18s linear infinite",
            WebkitTextStroke: "2px #DC2626",
            color: "transparent",
          }}
        >
          <span>{MARQUEE_TEXT}</span>
          <span aria-hidden>{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* Email input overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ pointerEvents: "none" }}
      >
        <form
          className="flex items-center gap-0 rounded-full overflow-hidden shadow-2xl"
          style={{ pointerEvents: "auto", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-4 bg-transparent outline-none text-foreground font-medium text-sm w-56 md:w-72"
            data-testid="input-notify-email"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-red-700 text-white w-12 h-12 flex items-center justify-center rounded-full m-1 transition-colors flex-shrink-0"
            data-testid="btn-notify-submit"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
