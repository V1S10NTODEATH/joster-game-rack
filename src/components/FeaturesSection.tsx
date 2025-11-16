import { Smartphone, Globe2, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "User-Friendly UI",
    description: "Intuitive interfaces designed for players of all skill levels",
    color: "from-primary to-primary/50",
  },
  {
    icon: Globe2,
    title: "Bilingual Support",
    description: "Full support for both English and Thai languages",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Zap,
    title: "Fun & Engaging",
    description: "Captivating gameplay that keeps you coming back for more",
    color: "from-accent to-accent/50",
  },
  {
    icon: Heart,
    title: "Innovative Mechanics",
    description: "Fresh ideas and creative approaches to game design",
    color: "from-primary to-secondary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
          What Makes Us Special
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary hover:scale-105 hover:game-glow">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
