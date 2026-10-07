import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Admin from './Admin';
import './globals.css';

const isAdmin = window.location.pathname.endsWith('/admin.html') || window.location.hash === '#admin';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>{isAdmin ? <Admin /> : <Home />}</React.StrictMode>,
);
