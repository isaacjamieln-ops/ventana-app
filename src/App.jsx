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

import Photos from "./components/Photos";
import PhotosGallery from "./components/PhotosGallery";

import { useUserState } from './firebase';
import InstallPWA from "./components/InstallPWA";

import './styles/App.css';


function App() {

  const { user } = useUserState();

  return (

    <div className="App text-white">

      <Navbar />

      <InstallPWA />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/games" element={<GameInfo />} />

        <Route path="/game/:id" element={<GameDetail />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/rules" element={<Rules />} />

        <Route path="/register" element={<Registration />} />

        <Route
          path="/fotos/:id"
          element={<Photos user={user} />}
        />

        <Route
          path="/photos"
          element={<PhotosGallery />}
        />

        {/* REDIRECCIÓN FINAL */}

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </div>

  );

}

export default App;