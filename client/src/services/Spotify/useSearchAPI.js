import { useState } from "react";

function useSearchAPI(token) {
  const [searchResult, setSearchResult] = useState([]);

  const search = async (query, type = "track") => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setSearchResult(data.tracks.items);
      return data.tracks.items;
    } catch (error) {
      console.error("Error during search:", error);
      return null;
    }
  };

  return { search, searchResult };
}

export default useSearchAPI;
