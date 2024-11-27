import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SurahList from './SurahList'; // Your SurahList component
import About from './About'; // About page component
import Header from './Header'; // Header component
import Footer from './Footer'; // Footer component

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route
          path="/"
          element={<SurahList />} // Ensure SurahList is correctly rendered
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
