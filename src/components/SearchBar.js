import React from "react";

import "../styles/SearchBar.css";

//individual search bar to handle search queries and changes
function SearchBar({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchBar;
