import { MdAddCircleOutline } from "react-icons/md";
import PropTypes from "prop-types";
import classes from "./CSS/MyPlaylists.module.css";

function MyPlaylists({ handleShow }) {
  return (
    <div className={classes.mylibrary}>
      <div className={classes.containers} style={{ width: "180px", gap: "0" }}>
        <h3>My Playlists</h3>
        <div className={classes.divadd}>
          <MdAddCircleOutline className={classes.add} onClick={handleShow} />
        </div>
      </div>
    </div>
  );
}

MyPlaylists.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default MyPlaylists;
