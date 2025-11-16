import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GamesRack from "@/components/GamesRack";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <GamesRack />
      <FeaturesSection />
    </div>
  );
};

export default Index;
