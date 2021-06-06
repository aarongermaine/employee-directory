import React from "react";

import SearchBar from "./SearchBar.js";

import "../styles/Navbar.css";

// navbar with search function
function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBar handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}

export default Nav;
