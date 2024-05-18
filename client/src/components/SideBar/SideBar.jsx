import "./SideBar_Desk.css";
import { useState } from "react";
import RandomAlbum from "../RandomAlbum/RandomAlbum";
import MyLibrary from "../MyLibrary/MyLibrary";
import FavoriteSongs from "../FavoriteSongs/FavoriteSongs";
import PopUpAdd from "../PopUpAdd/PopUpAdd";

function SideBar() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShow = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="sidebar">
      <RandomAlbum />      
      <FavoriteSongs />
      <MyLibrary handleShow={handleShow} />
      {showPopup ? <PopUpAdd handleShow={handleShow} /> : null}
    </div>
  );
}

export default SideBar;
