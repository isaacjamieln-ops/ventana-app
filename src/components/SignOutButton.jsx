// src/components/SignOutButton.jsx
import React from 'react';
import { signOutUser } from '../firebase';

function SignOutButton({ user }) {
  const handleClick = async () => {
    try {
      await signOutUser();
    } catch (error) {  // ← Aquí estaba el error: faltaba "catch"
      alert('Error al cerrar sesión: ' + error.message);
    }
  };

  return (
    <div className="d-flex align-items-center text-white">
      {user?.photoURL && (
        <img 
          src={user.photoURL} 
          alt={user.displayName || 'Usuario'}
          className="rounded-circle me-2"
          style={{ width: '32px', height: '32px', objectFit: 'cover' }}
        />
      )}
      <span className="me-3 d-none d-md-inline">
        {user?.displayName || user?.email || 'Usuario'}
      </span>
      <button 
        className="btn btn-outline-light btn-sm"
        onClick={handleClick}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default SignOutButton;