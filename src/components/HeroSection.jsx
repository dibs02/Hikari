const stats = [
  { value: "25K+", label: "Anime Entries" },
  { value: "8.2K", label: "Characters" },
  { value: "1.4K", label: "Studios" },
  { value: "90", label: "Seasons" },
];

const HeroSection = () => {
  return (
    <section className="bg-black px-4 pb-10 pt-12 text-white sm:px-6 sm:pb-12 sm:pt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <img
            className="mb-5 h-16 w-16 rounded-3xl object-cover shadow-[0_20px_60px_rgba(255,255,255,0.08)] sm:mb-6 sm:h-20 sm:w-20"
            src="https://static.vecteezy.com/system/resources/thumbnails/057/507/977/small_2x/anime-character-design-free-vector.jpg"
            alt="Hikari logo"
          />
          <h1 className="text-3xl leading-none font-black tracking-tight sm:text-4xl lg:text-5xl">
            Discover Anime in
            <span className="mt-2 block text-red-500">One Place</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            Browse trending shows, track fan-favorite characters, and explore
            rankings built from the anime community&apos;s latest attention.
          </p>
        </div>
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-7"
            >
              <p className="text-2xl font-black tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-zinc-400 sm:mt-3 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
