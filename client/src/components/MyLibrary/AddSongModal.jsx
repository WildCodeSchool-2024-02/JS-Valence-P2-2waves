import React from 'react'

export default function AddSongModal() {
  return (
    <div>
    <div  className="centerAdd">
      <IoMdCloseCircleOutline className="close" style={{position:"absolute",right:"16px",color:"red",cursor:"pointer"}} />
      <h3>My Library</h3>
      <div className="line" />
      <input className="addInput" type="text" placeholder="Enter Name Playlist"/>
      <div className="divadd"><MdAddCircleOutline className="add"/></div>
      </div>
    </div>
  )
}
