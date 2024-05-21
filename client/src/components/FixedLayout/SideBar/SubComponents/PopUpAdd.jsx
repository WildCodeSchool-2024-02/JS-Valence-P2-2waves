import { IoMdCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import classes from "./CSS/PopUpAdd.module.css";

export default function PopUpAdd({ handleShow }) {
  return (
    <div className={classes.centerAdd}>
      <IoMdCloseCircleOutline
        className={classes.close}
        onClick={handleShow}
        style={{
          position: "absolute",
          right: "16px",
          color: "red",
          cursor: "pointer",
        }}
      />
      <h3 style={{ marginBottom: "10px", width: "140px" }}>New Playlist :</h3>
      <form>
        <input
          type="text"
          placeholder="Search Music..."
          aria-label="Search input"
        />
      </form>
      <div
        className={classes.divadd2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          type="button"
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "none",
            color: "white",
            cursor: "pointer",
            backgroundColor: "#353535",
          }}
        >
          Add New Playlist
        </button>
      </div>
    </div>
  );
}

PopUpAdd.propTypes = {
  handleShow: PropTypes.func.isRequired,
};
