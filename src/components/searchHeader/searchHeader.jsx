import React, { Component } from "react";

class SearchHeader extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-logo">
            <i class="fab fa-youtube"></i>
            <span className="logo-title">Youtube</span>
          </div>
          <input
            className="navbar-input"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button className="navbar-searchBtn">
            <i class="fas fa-search"></i>
          </button>
        </nav>
      </>
    );
  }
}

export default SearchHeader;
