import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiX, SiTelegram, SiDiscord, SiInstagram } from "react-icons/si";
import nekoLogoPath from "@assets/LOGO_1781531503433.jpg";
import { Link } from "wouter";

export default function Footer() {
  const [supportEmail, setSupportEmail] = useState("");

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* CONTACT */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">CONTACT</h4>
            <address className="not-italic text-neutral-400 text-sm leading-relaxed mb-4">
              Jl. Crypto Block No. 1,<br />
              DeFi District,<br />
              Web3 Republic
            </address>
            <a href="mailto:support@nekowallet.com" className="text-sm text-neutral-300 font-semibold underline underline-offset-2 hover:text-primary transition-colors">
              support@nekowallet.com
            </a>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">PRODUCT</h4>
            <ul className="space-y-4 text-neutral-400 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Android App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">iOS App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chrome Extension</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Airdrop</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">$NEKO Roadmap</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">SUPPORT</h4>
            <ul className="space-y-4 text-neutral-400 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="mailto:support@nekowallet.com" className="hover:text-primary transition-colors">support@nekowallet.com</a></li>
            </ul>
          </div>

          {/* HAVE A PROBLEM? */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">HAVE A PROBLEM?</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-primary transition-colors"
                data-testid="input-footer-email"
              />
              <button
                type="submit"
                className="w-full bg-neutral-700 hover:bg-primary text-white hover:text-[#0a0a0a] font-bold py-3 rounded-lg text-sm tracking-widest transition-colors"
                data-testid="btn-footer-send"
              >
                SEND
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Big NEKO WALLET wordmark */}
      <div className="relative overflow-hidden border-t border-neutral-800">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-end justify-between py-6">
          <h2
            className="font-['Bebas_Neue'] text-white leading-none select-none whitespace-nowrap"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          >
            // NEKO WALLET
          </h2>

          <div className="flex flex-col items-end gap-4 pb-2 flex-shrink-0 ml-8">
            <div>
              <p className="text-neutral-500 text-xs font-bold tracking-widest mb-3 text-right">FOLLOW US</p>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors" data-testid="link-instagram">
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors" data-testid="link-tiktok">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/></svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors" data-testid="link-x">
                  <SiX className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Telegram" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors" data-testid="link-telegram">
                  <SiTelegram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-neutral-600 text-xs text-right">
              © 2026 NEKO Wallet. Powered by Web3.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
