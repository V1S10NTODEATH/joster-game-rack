import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
      
      <div className="relative z-10 text-center space-y-8 animate-slide-in-down">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            JOSTER STUDIOS
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            User-friendly games in English & Thai
          </p>
        </div>
        
        <div className="flex gap-4 justify-center items-center flex-wrap text-sm md:text-base">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            🎮 Fun Gameplay
          </span>
          <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
            🌍 Bilingual Support
          </span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
            ✨ Innovative Design
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce-arrow">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
