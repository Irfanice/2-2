import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList";  // Your home page or SurahList component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Directly navigate to the SurahList or Home page */}
        <Route path="/" element={<SurahList />} />
      </Routes>
    </Router>
  );
};

export default App;
