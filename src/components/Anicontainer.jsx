import AnimeCard from "./AnimeCard";

const animeCards = [
  {
    title: "Attack on Titan",
    status: "FINISHED",
    episodes: "87 EPISODES",
    genre: "ACTION",
    popularity: "657 VOTES",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    synopsis:
      "Humanity's last survivors take refuge behind towering walls while a relentless war against giant Titans reveals darker truths about the world outside.",
  },
  {
    title: "Demon Slayer",
    status: "ONGOING",
    episodes: "55 EPISODES",
    genre: "ACTION",
    popularity: "657 VOTES",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
    synopsis:
      "Tanjiro's journey to save his sister pushes him through brutal battles, elite training, and a haunting world filled with demons and swordsmen.",
  },
  {
    title: "Jujutsu Kaisen",
    status: "ONGOING",
    episodes: "47 EPISODES",
    genre: "ACTION",
    popularity: "657 VOTES",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    synopsis:
      "A high schooler becomes host to an ancient curse and is pulled into the dangerous underground of jujutsu sorcerers and cursed spirits.",
  },
  {
    title: "Fullmetal Alchemist",
    status: "FINISHED",
    episodes: "64 EPISODES",
    genre: "ACTION",
    popularity: "657 VOTES",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    synopsis:
      "Two brothers chase redemption through alchemy, military conspiracies, and impossible sacrifices after a forbidden ritual changes their lives forever.",
  },
  {
    title: "One Piece",
    status: "ONGOING",
    episodes: "1100 EPISODES",
    genre: "ACTION",
    popularity: "657 VOTES",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    synopsis:
      "Monkey D. Luffy sails across a chaotic ocean of pirates, kingdoms, and legends while chasing the dream of becoming King of the Pirates.",
  },
  {
    title: "Chainsaw Man",
    status: "ONGOING",
    episodes: "12 EPISODES",
    genre: "ACTION",
    popularity: "657 VOTES",
    image:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=600&q=80",
    synopsis:
      "A debt-ridden teenager fuses with his devil companion and is thrown into violent public safety missions where survival always comes at a cost.",
  },
];

const Anicontainer = () => {
  return (
    <section className="bg-black px-6 pb-20 pt-2 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-base text-zinc-400 tracking-tight">
            Showing <span className="font-bold text-white">105 </span>animes
          </h2>
          <p className="text-sm text-zinc-400">
            Based on <span className="font-bold text-white">MAL </span> rankings
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {animeCards.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anicontainer;
