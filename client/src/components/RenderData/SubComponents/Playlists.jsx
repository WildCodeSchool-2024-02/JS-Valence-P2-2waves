import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import classes from "./CSS/Playlists.module.css";
import GetUserID from "../../../services/Spotify/userID";

function Playlists({ token }) {
  const [playlists, setPlaylists] = useState([]);

  const userID = GetUserID(token);

  const EndPointPlaylist = `https://api.spotify.com/v1/users/`;

  useEffect(() => {
    const fetchUserPlaylist = async () => {
      const response = await fetch(`${EndPointPlaylist}${userID}/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setPlaylists(data.items);
    };

    if (token && userID) {
      fetchUserPlaylist();
    }
  }, [token, userID, EndPointPlaylist]);

  return (
    <div className={classes.container}>
      <h1>Playlists</h1>
      <div className={classes.playlistGrid}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className={classes.card}>
            <img
              src={playlist.images[0]?.url}
              alt={playlist.name}
              className={classes.playlistImage}
            />
            <h3>{playlist.name}</h3>
            <p>{playlist.tracks.total} songs</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Playlists.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Playlists;
