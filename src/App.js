import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList"; // Home page or SurahList component
import About from "./About"; // About page component
import Header from "./Header"; // Header component

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing the menu

  return (
    <Router>
      {/* Header is common across all pages */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Routes for different pages */}
      <Routes>
        {/* Route for SurahList/Home page */}
        <Route path="/" element={<SurahList />} />

        {/* Route for the About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
