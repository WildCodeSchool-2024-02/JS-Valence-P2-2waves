import React, { useState } from 'react'
import "./PopUpAdd_Des.css"
import "./PopUpAdd_Mob.css"
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function PopUpAdd() {
    const [showPopup, setShowPopup] = useState(false);
    

  return (
    <div  className="centerAdd">
      <IoMdCloseCircleOutline className="close" style={{position:"absolute",right:"16px",color:"red",cursor:"pointer"}} />
      <h3>My Library</h3>
      <div className="line" />
      <input className="addInput" type="text" placeholder="Enter Name Playlist"/>
      <div className="divadd"><MdAddCircleOutline className="add"/></div>
      </div>
  )
}
