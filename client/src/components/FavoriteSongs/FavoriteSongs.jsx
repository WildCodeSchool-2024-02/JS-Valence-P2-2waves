
import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import "./FavoriteSongs_Desk.css"

export default function FavoriteSongs() {
  return (
    <div className="myfavorite">
      <h3>Favorites Songs</h3>
      <div className="line" />
      <div className="divadd"><MdAddCircleOutline className="add"/></div>
    </div>
  )
}