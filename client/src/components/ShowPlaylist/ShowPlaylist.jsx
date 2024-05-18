import PropTypes from "prop-types";
import "./ShowPlaylist_Desk.css";

function ShowPlaylist({ playlists }) {
  return (
    <div className="ShowPlaylist">
      <h2>My Playlist</h2>
      <ul style={{display:'flex', gap:'20px'}}>
        {playlists.map(playlist => (
          <li key={playlist.id} style={{display:'flex', flexDirection:'column-reverse', color:'white', fontSize:'25px', textAlign:'center', marginTop:'20px'}}>
            <img src={playlist.images[0].url} alt={playlist.name} style={{width:'150px', height:'150px'}}/>
            <span style={{margin:'10px'}}>{playlist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ShowPlaylist.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default ShowPlaylist;
