import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
