import "../SearchBar/SearchBar_Mob.css";
import "./ShowPlaylist_Mob.css";
import { MdPlaylistPlay } from "react-icons/md";
import { TbCircleNumber1 } from "react-icons/tb";
import { IoPlay } from "react-icons/io5";
// import { IoIosSearch } from "react-icons/io";

function ShowPlaylist() {
  return (
    <body>
      <div className="Container-Playlist">
        <div className="Container-Icone-Title">
          <MdPlaylistPlay className="Icone" />
          <h2 className="Title-Slow-Music">Slow Music</h2>
        </div>

        <div className="Container-Title-Music-Artist">
          <TbCircleNumber1 className="Icone" />
          <p className="Title-Music-Artist">
            My Heart Will Go <br />
            on Celine Dion
          </p>
          <IoPlay className="Icone" />
        </div>
      </div>
    </body>
  );
}

export default ShowPlaylist;
