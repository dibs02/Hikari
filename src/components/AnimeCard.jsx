const AnimeCard = ({
  title,
  status,
  episodes,
  image,
  synopsis,
  genre,
  popularity,
}) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-700 bg-black shadow-[6px_6px_0_rgba(39,39,42,0.95)]">
      <div className="p-6">
        <div className="flex gap-5">
          <img
            src={image}
            alt={title}
            className="h-32 w-24 rounded-xl border border-zinc-800 bg-zinc-950 object-cover"
          />

          <div className="flex min-w-0 flex-1 flex-col font-mono">
            <h3 className="line-clamp-2 text-base leading-tight tracking-tighter font-bold text-zinc-200">
              {title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-4 font-mono">
              <div className="rounded-md border border-zinc-600 bg-black pt-1 pb-1.5 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-semibold text-white">
                  {status}
                </p>
              </div>

              <div className="rounded-md border border-zinc-800 bg-zinc-200 py-1 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-bold text-black">{episodes}</p>
              </div>

              <div className="rounded-md border border-zinc-800 bg-zinc-200 py-1 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-bold text-black">
                  {popularity}
                </p>
              </div>

              <div className="rounded-md border border-zinc-600 bg-black pt-1 pb-1.5 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-semibold text-white">{genre}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 h-px bg-zinc-800" />

        <p className="text-sm leading-6 font-semibold text-zinc-400">
          {synopsis}
        </p>
      </div>
    </article>
  );
};

export default AnimeCard;
