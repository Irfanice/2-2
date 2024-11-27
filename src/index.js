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
