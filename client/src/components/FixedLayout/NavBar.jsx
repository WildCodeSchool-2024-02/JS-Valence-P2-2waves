import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./NavBar.module.css";
import { logo, user } from "../../assets/images/index";

function NavBar({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <div className={classes.navbar}>
      <div>
        <img className={classes.logo} src={logo} alt="2waves logo" />
      </div>
      <div>
        <form onSubmit={handleSearchSubmit}>
          <button type="submit" aria-label="search">
            Search
          </button>
          <input
            type="text"
            placeholder="Search Music..."
            aria-label="Search input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
      </div>
      <div className={classes.user_account}>
        <p>Christopher</p>
        <img className={classes.user} src={user} alt="user" />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default NavBar;
