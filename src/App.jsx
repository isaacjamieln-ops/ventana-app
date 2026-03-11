import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';
import GameInfo from './components/GameInfo';
import GameDetail from './components/GameDetail';

import About from './components/About';
import Contact from './components/Contact';
import Rules from './components/Rules';
import Registration from './components/Registration';

import './styles/App.css';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameInfo />} />

        {/* Aquí estará mapa + foro */}
        <Route path="/game/:id" element={<GameDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/register" element={<Registration />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default App;