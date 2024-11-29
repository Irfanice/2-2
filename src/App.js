import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import SurahList from "./SurahList"; // Your home page or SurahList component
import About from "./About"; // Import the About page component
import Contact from "./Contact"; // Import the Contact page component
import Header from "./Header"; // Import Header component to pass setIsMenuOpen
import Footer from "./Footer"; // Import Footer component

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state here

  return (
    <Router>
      {/* Wrap the entire app in HashRouter */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> {/* Header with menu */}
      <Routes>
        {/* Route for SurahList/Home page */}
        <Route 
          path="/" 
          element={<SurahList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} 
        />

        {/* Route for the About page */}
        <Route 
          path="/about" 
          element={<About isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} 
        />

        {/* Route for the Contact page */}
        <Route 
          path="/contact" 
          element={<Contact isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} 
        />
      </Routes>
      <Footer /> {/* Footer is common across all pages */}
    </Router>
  );
};

export default App;
