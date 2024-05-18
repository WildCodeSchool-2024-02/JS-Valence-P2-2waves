import { useState, useEffect } from "react";
import "./App.css";
import { HomePage, Login, getTokenFromUrl } from "./components/index";

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

  return (
    <div className="App">{token ? <HomePage token={token} /> : <Login />}</div>
  );
}

export default App;
