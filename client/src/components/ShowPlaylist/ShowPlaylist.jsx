import { Link } from "react-router-dom";
import "./ShowPlaylist_Desk.css";

function ShowPlaylist() {
  const songs = [
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" },
  ];

  return (
    <div className="ShowPlaylist">
      <h2>My Playlist</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <Link to={`/mediaplayer/${song.id}`}>{song.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowPlaylist;
