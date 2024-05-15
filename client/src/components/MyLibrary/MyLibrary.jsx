import "./MyLibrary_Desk.css";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";




function MyLibrary() {
  return (
    <div className="mylibrary">
      <h3>My Library</h3>
      <div className="line" />
      <div className="divadd"><MdAddCircleOutline className="add"/></div>
    </div>
  );
}

export default MyLibrary;