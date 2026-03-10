import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import GameInfo from './components/GameInfo';
import GameMessages from './components/GameMessages';

import About from './components/About';
import Contact from './components/Contact';
import Rules from './components/Rules';
import ForoGeneral from './components/ForoGeneral';
import Registration from './components/Registration';

import './styles/App.css';

function App() {
  return (
    <div className="App">

      <Navbar />

    <Routes>
  <Route path="/" element={<Home />} />
  
  {/* GameInfo será la ventana principal de Partidos */}
  <Route path="/games" element={<GameInfo />} />

  <Route path="/game/:id" element={<GameDetail />} />
  
  {/* Opcional: detalles de mensajes */}
  <Route path="/game/:id/mensajes" element={<GameMessages />} />

  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/rules" element={<Rules />} />
  <Route path="/foro" element={<ForoGeneral />} />
  <Route path="/register" element={<Registration />} />

  <Route path="*" element={<Navigate to="/" />} />
</Routes>

    </div>
  );
}

export default App;