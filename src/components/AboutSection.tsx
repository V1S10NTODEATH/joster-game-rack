import { Gamepad2, Globe, Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Gamepad2, color: "text-primary" },
    { icon: Globe, color: "text-secondary" },
    { icon: Users, color: "text-accent" },
    { icon: Sparkles, color: "text-primary" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        {features.map((Feature, i) => (
          <Feature.icon
            key={i}
            className={`absolute ${Feature.color} opacity-5 animate-float`}
            style={{
              width: "100px",
              height: "100px",
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl relative z-10 space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Joster Studios
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-semibold">Joster Studios</span> was founded on{" "}
            <span className="text-secondary font-semibold">May 18, 2025</span>, with a vision to create
            user-friendly games that bring fun and enjoyment to everyone.
          </p>
          
          <p className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            We design and develop games in both <span className="text-accent font-semibold">English and Thai</span>,
            focusing on intuitive gameplay, engaging visuals, and memorable experiences.
          </p>
          
          <p className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            Our team is passionate about innovation and dedicated to making gaming{" "}
            <span className="text-primary font-semibold">simple yet captivating</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
