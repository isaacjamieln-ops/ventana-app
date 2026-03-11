import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';       
import 'bootstrap/dist/js/bootstrap.bundle.min.js';   // 👈 ESTA ES LA LINEA QUE FALTA

import 'bootstrap-icons/font/bootstrap-icons.css';    // 👈 vuelve a activarla
import './styles/App.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento con id "root". Verifica tu index.html');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);