import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './LanguageProvider.jsx';
import './fonts.js';
import './App.css'; // tu CSS principal

// React renderiza App dentro del div con id "root" en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
