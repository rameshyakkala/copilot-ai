
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set the backend API URL from environment variable for all components
if (!process.env.REACT_APP_CODESPACE_URL) {
  // Try to infer the codespace URL from window.location if not set
  const { hostname } = window.location;
  const apiUrl = `${window.location.protocol}//${hostname.replace('-3000', '-8000')}.app.github.dev`;
  process.env.REACT_APP_CODESPACE_URL = apiUrl;
  // Log for debugging
  console.log('Inferred REACT_APP_CODESPACE_URL:', apiUrl);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
