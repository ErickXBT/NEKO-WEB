import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ColdCard from "@/components/ColdCard";
import Security from "@/components/Security";
import FeatureShowcase from "@/components/FeatureShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import Roadmap from "@/components/Roadmap";
import Download from "@/components/Download";
import NotifyMe from "@/components/NotifyMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ColdCard />
      <Security />
      <FeatureShowcase />
      <FeatureGrid />
      <Roadmap />
      <Download />
      <NotifyMe />
      <FAQ />
      <Footer />
    </div>
  );
}
