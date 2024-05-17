import "./SearchBar_Desk.css";
import { logo, user } from "../../assets/images/svg";

function SearchBar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="2waves logo" />
      </div>
      <div>
        <form>
          <button type="submit" aria-label="search">
            Search
          </button>
          <input
            type="text"
            placeholder="Search Music..."
            aria-label="Search input"
          />
        </form>
      </div>
      <div className="user_account">
        <p>Christopher</p>
        <img className="logo" src={user} alt="user" />
      </div>
    </div>
  );
}

export default SearchBar;
