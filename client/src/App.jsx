import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import { getTokenFromUrl } from "./Spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    if (hash.access_token) {
      setToken(hash.access_token);
      localStorage.setItem("spotifyAuthToken", hash.access_token);
    }
  }, []);

  return <div className="App">{token ? <HomePage /> : <Login />}</div>;
}

export default App;
