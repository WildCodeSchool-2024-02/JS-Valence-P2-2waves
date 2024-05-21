import PropTypes from "prop-types";
import classes from "./CSS/SearchResult.module.css";

function SearchResult({ searchResult }) {
  if (!searchResult || searchResult.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <div className={classes.resultGrid}>
        {searchResult.map((item) => (
          <div key={item.id} className={classes.card}>
            <img
              src={item.album.images[0].url}
              alt={item.name}
              className={classes.resultImage}
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  searchResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      album: PropTypes.shape({
        images: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default SearchResult;
