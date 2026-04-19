import AniCard from "./Anicard";
import useFetch from "../utils/useFetch";

const Anicontainer = () => {
  const list = useFetch();
  console.log(list);

  return (
    <section className="bg-black px-6 pb-20 pt-2 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 flex items-center justify-between">
          <h2 className="text-base text-zinc-400 tracking-wide">
            Showing{" "}
            <span className="font-bold text-white text-lg">{list.length} </span>
            animes
          </h2>
          <p className="text-base text-zinc-400 tracking-wide">
            Based on <span className="font-bold text-lg text-white">MAL </span>{" "}
            rankings
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((anime) => (
            <AniCard key={anime.title} {...anime} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anicontainer;
