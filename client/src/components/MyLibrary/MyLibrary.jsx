import "./MyLibrary_Desk.css";
import PropTypes from "prop-types";
import { MdAddCircleOutline } from "react-icons/md";

function MyLibrary({ handleShow }) {
  return (
    <div className="mylibrary">
      <div className="containers">
        <h3>My Library</h3>
        <div className="divadd">
          <MdAddCircleOutline className="add" onClick={handleShow} />
        </div>
      </div>
      <hr />
    </div>
  );
}

MyLibrary.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default MyLibrary;
