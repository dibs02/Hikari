const AnimeCard = ({
  title,
  status,
  episodes,
  images,
  synopsis,
  genres,
  popularity,
}) => {
  const truncatedStatus = status.split(" ")[0];
  const truncatedTitle = title
    .split(" ")
    .slice(0, 3)
    .join(" ")
    .replace(/:/g, "");

  const word = episodes === 1 ? "EPISODE" : "EPISODES";
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-700 bg-black shadow-[6px_6px_0_rgba(39,39,42,0.95)]">
      <div className="p-6">
        <div className="flex gap-5">
          <img
            src={images?.webp?.image_url}
            alt={truncatedTitle}
            className="h-32 w-24 rounded-xl border border-zinc-800 bg-zinc-950 object-cover"
          />

          <div className="flex min-w-0 flex-1 flex-col font-mono">
            <h3 className="line-clamp-2 text-base leading-tight tracking-tighter font-bold text-zinc-200">
              {truncatedTitle}
            </h3>

            <div className="mt-4 flex flex-wrap gap-4 font-mono">
              <div className="rounded-md border border-zinc-600 bg-black pt-1 pb-1.5 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-semibold text-white">
                  {truncatedStatus}
                </p>
              </div>

              <div className="rounded-md border border-zinc-800 bg-zinc-200 py-1 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-bold text-black">
                  {episodes} {word}
                </p>
              </div>

              <div className="rounded-md border border-zinc-800 bg-zinc-200 py-1 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-bold text-black">
                  {popularity} VOTES
                </p>
              </div>

              <div className="rounded-md border border-zinc-600 bg-black pt-1 pb-1.5 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-semibold text-white">
                  {genres[0]?.name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 h-px bg-zinc-800" />

        <p className="text-sm leading-6 font-semibold text-zinc-400 line-clamp-6">
          {synopsis}
        </p>
      </div>
    </article>
  );
};

export default AnimeCard;
