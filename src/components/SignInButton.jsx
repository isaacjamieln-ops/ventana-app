import React from 'react';
import { signInWithGoogle } from '../firebase';

function SignInButton() {

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <button 
      className="btn btn-outline-light me-2"
      onClick={handleSignIn}
    >
      Iniciar sesión
    </button>
  );
}

export default SignInButton;