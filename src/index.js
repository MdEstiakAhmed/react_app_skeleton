import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utils/reportWebVitals';
import App from './app/App';
import './assets/styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();