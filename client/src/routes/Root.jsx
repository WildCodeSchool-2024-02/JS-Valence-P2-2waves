import { useEffect, useState } from "react";
import classes from "./Root.module.css";
import NavBar from "../components/FixedLayout/NavBar";
import SideBar from "../components/FixedLayout/SideBar/SiderBar";
import Login from "../components/Login/Login";
import RenderData from "../components/RenderData/RenderData";
import Footer from "../components/Footer/Footer";
import { getTokenFromUrl } from "../services/Spotify/auth";
import useSearchAPI from "../services/Spotify/useSearchAPI";

function Root() {
  const [token, setToken] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const { search } = useSearchAPI(token);

  const handleSearchSubmit = async (searchTerm) => {
    if (searchTerm.trim()) {
      const result = await search(searchTerm);
      if (result) {
        setSearchResult(result);
      } else {
        console.error("Token may have expired. Please log in again.");
      }
    }
  };

  useEffect(() => {
    const hash = getTokenFromUrl();
    if (hash.access_token) {
      setToken(hash.access_token);
      localStorage.setItem("spotifyAuthToken", hash.access_token);
    }
  }, []);

  return (
    <>
      {token ? (
        <main className={classes.layout}>
          <NavBar token={token} onSearchSubmit={handleSearchSubmit} />
          <div className={classes.mainContainer}>
            <SideBar />
            <RenderData token={token} searchResult={searchResult} />
          </div>
        </main>
      ) : (
        <Login />
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Root;
