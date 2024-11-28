import React from 'react';
import './styles.css';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header>
      <div className="header-container">
        <div className="left">
          <h1>குர்ஆன்</h1>
        </div>
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
        <div className={`surahlist ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="/2-2">Home</a></li>
            <li><a href="/2-2/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;