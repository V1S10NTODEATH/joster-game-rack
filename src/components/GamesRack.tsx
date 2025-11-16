import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const games = [
  {
    id: 1,
    title: "Coming Soon",
    description: "Our first game is currently in development. Stay tuned for an amazing gaming experience!",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Game Project 2",
    description: "Another exciting project in the works. We're crafting something special for you!",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Mystery Game",
    description: "A mysterious adventure awaits. More details coming soon!",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Future Release",
    description: "We're working on multiple projects to bring you the best gaming experiences.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
  },
];

const GamesRack = () => {
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);

  return (
    <section className="min-h-screen py-20 px-4">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        Game Portfolio
      </h2>

      {/* Game Shelf */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-game-shelf rounded-2xl p-8 shelf-shadow">
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {games.map((game, index) => (
                <div
                  key={game.id}
                  className="group cursor-pointer animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedGame(game)}
                >
                  <div className="relative w-64 h-96 rounded-lg overflow-hidden border-2 border-border transition-all duration-300 hover:border-primary hover:scale-105 hover:game-glow">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-foreground">{game.title}</h3>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional shelves effect */}
        <div className="flex justify-center gap-4 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-20 h-2 bg-muted rounded-full" />
          ))}
        </div>
      </div>

      {/* Game Details Modal */}
      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {selectedGame?.title}
            </DialogTitle>
            <DialogDescription className="text-base mt-4">
              {selectedGame?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedGame && (
            <div className="mt-4">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GamesRack;
