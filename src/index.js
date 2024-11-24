import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./styles.css";
import SurahList from "./SurahList";
import About from "./About";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<SurahList />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
