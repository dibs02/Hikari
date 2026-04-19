import { useEffect, useRef } from "react";
import AniCard from "./Anicard";
import useFetch from "../utils/useFetch";

const Anicontainer = () => {
  const { list, loading, error, hasMore, loadMore, page, maxPages } =
    useFetch();
  const loadTriggerRef = useRef(null);

  useEffect(() => {
    const trigger = loadTriggerRef.current;

    if (!trigger || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore, loading, list.length]);

  return (
    <section className="bg-black px-6 pb-4 pt-2 text-white">
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
            <AniCard key={anime.mal_id} {...anime} />
          ))}
        </div>
        {error ? (
          <p className="mt-8 text-center text-sm text-red-400">{error}</p>
        ) : null}
        {loading ? (
          <p className="mt-8 text-center text-sm tracking-wide text-zinc-400">
            Loading more anime...
          </p>
        ) : null}
        {!hasMore && list.length > 0 ? (
          <p className="mt-12 text-center text-sm tracking-wide text-zinc-500">
            Reached the end of the list after {page} of {maxPages} batches.
          </p>
        ) : null}
        <div ref={loadTriggerRef} className="h-1 w-full" />
      </div>
    </section>
  );
};

export default Anicontainer;
