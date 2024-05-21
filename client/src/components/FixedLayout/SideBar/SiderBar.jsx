import { useState } from "react";
import classes from "./SideBar.module.css"
import TopArtist from "./SubComponents/TopArtist"
import MyPlayists from "./SubComponents/MyPlaylists"
import FavoritesSongs from "./SubComponents/FavoritesSong"
import PopUpAdd from "./SubComponents/PopUpAdd";


function SideBar() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShow = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={classes.sideBar}>
      <TopArtist />
      <MyPlayists handleShow={handleShow} />
      {showPopup ? <PopUpAdd handleShow={handleShow} /> : null}
      <FavoritesSongs />
    </div>
  );
}

export default SideBar;