<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList"; // Your home component
import About from "./About"; // About component
import Header from "./Header"; // Header component
import Footer from "./Footer"; // Footer component
import "./styles.css"; // General styles

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SurahList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles
import App from './App'; // Main App component that contains routes
import { BrowserRouter as Router } from 'react-router-dom'; // Routing library

// Rendering the App inside the 'root' div in index.html
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
>>>>>>> Try
