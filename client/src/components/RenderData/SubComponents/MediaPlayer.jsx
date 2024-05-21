import PropTypes from "prop-types";
import classes from "./CSS/MediaPlayer.module.css";
import SearchResult from "./SearchResult";

function MediaPlayer({ searchResult }) {
  return (
    <div className={classes.container}>
      <SearchResult searchResult={searchResult} />
    </div>
  );
}

MediaPlayer.propTypes = {
  searchResult: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MediaPlayer;
