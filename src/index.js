import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/movie-search">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
