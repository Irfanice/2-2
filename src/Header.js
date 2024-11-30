import React from "react";
import "./styles.css";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header>
      <div className="header-container">
        <a href="/2-2">
          <div className="left">
            <h5>குர்ஆன்</h5>
            <h5>தமிழில்</h5>
          </div>
        </a>
        <div className="center">
          <input
            type="text"
            className="search-input"
            placeholder="Search Surahs..."
            // You can add logic for search if needed
          />
        </div>
        <div className="right">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
          >
            Menu
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`surahlist ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>{" "}
            {/* Add # for HashRouter */}
            <li>
              <a href="#/about">About</a>
            </li>{" "}
            {/* Add # for HashRouter */}
            <li>
              <a href="#/contact">Contact</a>
            </li>{" "}
            {/* Add # for HashRouter */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
