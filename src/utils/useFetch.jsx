import { useCallback, useEffect, useRef, useState } from "react";

const PAGE_SIZE = 24;
const MAX_PAGES = 5;

function useFetch() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const nextApiPageRef = useRef(1);
  const bufferedItemsRef = useRef([]);

  useEffect(() => {
    let ignore = false;

    async function handleCall() {
      setLoading(true);
      setError("");

      try {
        let reachedApiEnd = false;
        let collectedItems = [...bufferedItemsRef.current];

        while (
          collectedItems.length < PAGE_SIZE &&
          nextApiPageRef.current <= MAX_PAGES
        ) {
          const response = await fetch(
            `https://api.jikan.moe/v4/anime?limit=${PAGE_SIZE}&page=${nextApiPageRef.current}`,
          );

          if (!response.ok) {
            throw new Error("Could not load anime right now.");
          }

          const json = await response.json();

          if (ignore) return;

          const rawBatch = json?.data || [];

          const filteredBatch = rawBatch
            .filter(({ mal_id }) => mal_id !== 43)
            .map(
              ({
                mal_id,
                url,
                images,
                title,
                title_english,
                status,
                episodes,
                popularity,
                genres,
                synopsis,
              }) => ({
                mal_id,
                url,
                images,
                title,
                title_english,
                status,
                episodes,
                popularity,
                genres,
                synopsis,
              }),
            );

          collectedItems = [...collectedItems, ...filteredBatch];
          nextApiPageRef.current += 1;

          if (rawBatch.length < PAGE_SIZE) {
            reachedApiEnd = true;
            break;
          }
        }

        const nextBatch = collectedItems.slice(0, PAGE_SIZE);
        bufferedItemsRef.current = collectedItems.slice(PAGE_SIZE);

        setList((currentList) => [...currentList, ...nextBatch]);
        setHasMore(
          bufferedItemsRef.current.length > 0 ||
            (!reachedApiEnd && nextApiPageRef.current <= MAX_PAGES),
        );
      } catch (fetchError) {
        if (!ignore) {
          setError(fetchError.message || "Something went wrong while loading.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    handleCall();

    return () => {
      ignore = true;
    };
  }, [page]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setPage((currentPage) => currentPage + 1);
  }, [hasMore, loading]);

  return {
    list,
    loading,
    error,
    hasMore,
    loadMore,
    page,
    maxPages: MAX_PAGES,
  };
}

export default useFetch;
