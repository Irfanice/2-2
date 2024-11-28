import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList";  // Your home page or SurahList component
import About from "./About"; // Import the About page component
import Header from "./Header"; // Import Header component to pass setIsMenuOpen

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state here

  return (
    <Router basename="/2-2">
      <Routes>
        {/* Route for SurahList/Home page */}
        <Route 
          path="/" 
          element={<>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> {/* Header with menu */}
            <SurahList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </>} 
        />

        {/* Route for the About page */}
        <Route 
          path="/about" 
          element={<About isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;