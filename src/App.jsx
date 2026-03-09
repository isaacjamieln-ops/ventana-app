import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Rules from './components/Rules';
import GameInfo from './components/GameInfo';
import GameDetail from './components/GameDetail'; // Nuevo componente
import Registration from './components/Registration';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/games" element={<GameInfo />} />
          <Route path="/game/:id" element={<GameDetail />} /> {/* Nueva ruta con parámetro */}
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;