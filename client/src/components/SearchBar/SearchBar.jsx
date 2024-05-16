import "./SearchBar_Mob.css";
import "./SearchBar_Desk.css";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

function SearchBar() {
  return (
    <nav className="container">
      {/* <div className="Icons-menu">
        <TfiLayoutMenuSeparated className="Icons" />
      </div> */}
      <div>
        <img className="Logo" src={logo} alt="" />
      </div>

      <div className="SearchBar">
        <FiSearch className="Icons" />
        <p>Search</p>
      </div>
      {/* <div className="Icons-fleche">
        <span>
          <IoIosArrowDown className="Icons" />
        </span>
      </div> */}
      <div>
        <img
          className="Profil"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </nav>
  );
}

export default SearchBar;
