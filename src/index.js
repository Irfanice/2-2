import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Specific styles for the index (global styles or overrides)
import './styles.css'; // Import your global styles
import SurahList from './SurahList'; // Main page component

ReactDOM.render(
  <React.StrictMode>
    <SurahList />
  </React.StrictMode>,
  document.getElementById('root') // This is where your app will be displayed in the HTML
);
