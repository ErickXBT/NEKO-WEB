import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import nekoLogoPath from "@assets/LOGO_1781531503433.jpg";
import { Link } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src={nekoLogoPath} alt="NEKO Wallet" className="h-8 w-auto" />
          <span className="font-['Bebas_Neue'] text-2xl tracking-wider text-foreground">NEKO WALLET</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">HOME</Link>
          <Link href="#security" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">SECURITY</Link>
          <Link href="#features" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">FEATURES</Link>
          <Link href="#token" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">$NEKO</Link>
          <Link href="#support" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">SUPPORT</Link>
        </div>

        <div className="hidden md:flex items-center">
          <button
            className="bg-primary hover:bg-[#c8d90f] text-[#0a0a0a] font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all"
            data-testid="btn-download"
          >
            DOWNLOAD <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-8 pt-16">
            <img src={nekoLogoPath} alt="NEKO Wallet" className="h-12 w-auto mb-4" />
            <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-['Bebas_Neue']">HOME</Link>
            <Link href="#security" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-['Bebas_Neue']">SECURITY</Link>
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-['Bebas_Neue']">FEATURES</Link>
            <Link href="#token" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-['Bebas_Neue']">$NEKO TOKEN</Link>
            <Link href="#support" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-['Bebas_Neue']">SUPPORT</Link>
            <button className="bg-primary text-[#0a0a0a] font-bold px-8 py-3 rounded-full flex items-center gap-2 mt-4">
              DOWNLOAD <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
