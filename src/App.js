import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SurahList from './SurahList'; // Your home page component
import About from './About'; // About page component
import Header from './Header'; // Header component for navigation
import Footer from './Footer'; // Footer component

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state here

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route
          path="/"
          element={<SurahList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
