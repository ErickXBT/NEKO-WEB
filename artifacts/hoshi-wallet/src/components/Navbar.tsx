import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import nekoLogoPath from "@assets/LOGO_1781531503433.jpg";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "FEATURES", href: "#features" },
  { label: "SECURITY", href: "#security" },
  { label: "ROADMAP", href: "#roadmap" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a] border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 z-50"
        >
          <img src={nekoLogoPath} alt="NEKO Wallet" className="h-8 w-auto" />
          <span className="font-['Bebas_Neue'] text-2xl tracking-wider text-foreground">NEKO WALLET</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-semibold tracking-wide hover:text-primary transition-colors text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo("#home")}
            className="bg-primary hover:bg-[#c8d90f] text-[#0a0a0a] font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all"
            data-testid="btn-download"
          >
            NEKO WALLET <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-8 pt-16">
            <img src={nekoLogoPath} alt="NEKO Wallet" className="h-12 w-auto mb-4" />
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => { scrollTo(link.href); setMobileMenuOpen(false); }}
                className="text-2xl font-['Bebas_Neue'] text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo("#home"); setMobileMenuOpen(false); }}
              className="bg-primary text-[#0a0a0a] font-bold px-8 py-3 rounded-full flex items-center gap-2 mt-4"
            >
              NEKO WALLET <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
