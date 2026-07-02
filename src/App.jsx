import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";
import { imgBackground } from "./assets/images";

export default function App() {
  return (
    <div
      className="relative min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: "#1a0b2e" }}
    >
      {/* Full-page background texture */}
      <img
        src={imgBackground}
        alt=""
        aria-hidden
        className="fixed inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none z-0"
      />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />

      </div>
    </div>
  );
}
