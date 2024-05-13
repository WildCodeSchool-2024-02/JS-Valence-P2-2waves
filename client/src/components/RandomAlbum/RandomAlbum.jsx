import "./RandomAlbum_Desk.css";

function RandomAlbum() {
  return (
    <div className="randomAlbum">
      <h3>Albums For You</h3>
      <div className="line" />
      <div className="item1">
        <div className="itemPhoto">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/13/15/04/music-sheet-1327003_1280.jpg"
            alt=""
          />
        </div>
        <p>slow music</p>
      </div>
      <div className="item1">
        <div className="itemPhoto">
          <img
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=3860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <p>music for sleeping</p>
      </div>
      <div className="item1">
        <div className="itemPhoto">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <p>music for coding</p>
      </div>
    </div>
  );
}

export default RandomAlbum;
