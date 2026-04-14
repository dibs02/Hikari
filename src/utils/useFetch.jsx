import { useState, useEffect } from "react";

function useFetch() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function handleCall() {
      const data = await fetch("https://api.jikan.moe/v4/anime?limit=9");
      const json = await data.json();
      setList(json?.data);
    }

    handleCall();
  }, []);

  const filteredList = list.map(
    ({ images, title, status, episodes, popularity, genres, synopsis }) => ({
      images,
      title,
      status,
      episodes,
      popularity,
      genres,
      synopsis,
    }),
  );

  return filteredList;
}

export default useFetch;
