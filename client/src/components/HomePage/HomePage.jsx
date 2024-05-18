import "./HomePage.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-cycle
import { SideBar, SearchBar, ShowPlaylist, userID, EndPointPlaylist } from '../index';

function HomePage({ token }) {
  const [meID, setMeID] = useState('');
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchUserID = async () => {
      const id = await userID(token);
      setMeID(id);
    };

    fetchUserID();
  }, [token]);

  useEffect(() => {
    const fetchUserPlaylist = async () => {
      const response = await fetch(`${EndPointPlaylist}${meID}/playlists`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setPlaylists(data.items);
    };

    fetchUserPlaylist();
  }, [token, meID]);

  return (
    <div className="layout">
      <SearchBar />
      <div className="container">
        <SideBar />
        <div className="renderContainer" >
          <ShowPlaylist playlists={playlists}/>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  token: PropTypes.string.isRequired,
};

export default HomePage;
