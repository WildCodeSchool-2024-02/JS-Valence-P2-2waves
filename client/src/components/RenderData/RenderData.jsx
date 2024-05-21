import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./RenderData.module.css";
import Playlists from "./SubComponents/Playlists";
import MediaPlayer from "./SubComponents/MediaPlayer";

function RenderData({ token, searchResult }) {
  const [asClicked, setAsClicked] = useState(false);

  function handleClickPlaylist() {
    setAsClicked((prevAsClicked) => !prevAsClicked);
  }

  return (
    <div className={classes.container}>
      {!asClicked ? (
        <Playlists token={token} />
      ) : (
        <MediaPlayer searchResult={searchResult} />
      )}
      <button
        type="button"
        onClick={handleClickPlaylist}
        style={{ height: "50px", width: "150px" }}
      >
        Render MediaPlayer
      </button>
    </div>
  );
}

RenderData.propTypes = {
  token: PropTypes.string.isRequired,
  searchResult: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default RenderData;
