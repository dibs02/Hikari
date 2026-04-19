import { useCallback, useEffect, useState } from "react";

const PAGE_SIZE = 24;
const MAX_PAGES = 5;

function useFetch() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function handleCall() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?limit=${PAGE_SIZE}&page=${page}`,
        );

        if (!response.ok) {
          throw new Error("Could not load anime right now.");
        }

        const json = await response.json();

        if (ignore) return;

        const nextBatch =
          json?.data?.map(
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
          ) || [];

        setList((currentList) => [...currentList, ...nextBatch]);
        setHasMore(page < MAX_PAGES && nextBatch.length === PAGE_SIZE);
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
