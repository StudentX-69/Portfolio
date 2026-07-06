import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div
      className="relative min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: "#1a0b2e" }}
    >
      {/* Full-page background texture */}

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
