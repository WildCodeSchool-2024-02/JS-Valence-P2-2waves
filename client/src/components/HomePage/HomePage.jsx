import "./HomePage.css";
import SideBar from "../SideBar/SideBar";
import SearchBar from "../SearchBar/SearchBar";
import ShowPlaylist from "../ShowPlaylist/ShowPlaylist";

function HomePage() {
  return (
    <div className="layout">
      <SearchBar />
      <div className="container">
        <SideBar />
        <div className="outlet">
          <ShowPlaylist />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
