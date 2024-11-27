import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList"; // Home page or SurahList component
import About from "./About"; // About page component
import Header from "./Header"; // Header component
import Footer from "./Footer"; // Footer component

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing the menu

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route
          path="/"
          element={<SurahList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
