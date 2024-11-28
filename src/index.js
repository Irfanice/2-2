import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new React 18 root API
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route for React Router v6
import './styles.css'; // Import your global styles
import SurahList from './SurahList'; // Import your SurahList component

// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Default route for your SurahList page */}
        <Route path="/" element={<SurahList />} />
        {/* You can add more routes here if needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
