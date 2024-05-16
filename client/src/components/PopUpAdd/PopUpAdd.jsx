import PropTypes from "prop-types";
import "./PopUpAdd_Desk.css";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function PopUpAdd({ handleShow }) {
  return (
    <div className="centerAdd">
      <IoMdCloseCircleOutline
        className="close"
        onClick={handleShow}
        style={{
          position: "absolute",
          right: "16px",
          color: "red",
          cursor: "pointer",
        }}
      />
      <h3>New Playlist :</h3>
      <hr />
      <form>
        <input
          type="text"
          placeholder="Search Music..."
          aria-label="Search input"
        />
      </form>
      <div className="divadd2">
        <MdAddCircleOutline className="add" />
      </div>
    </div>
  );
}

PopUpAdd.propTypes = {
  handleShow: PropTypes.func.isRequired,
};
