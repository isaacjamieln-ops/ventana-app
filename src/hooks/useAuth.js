// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Configurando listener de autenticación...');
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Estado de autenticación cambiado:', user ? `Usuario: ${user.email}` : 'No usuario');
      setUser(user);
      setLoading(false);
    }, (error) => {
      console.error('Error en onAuthStateChanged:', error);
      setLoading(false);
    });

    return () => {
      console.log('Limpiando listener de autenticación');
      unsubscribe();
    };
  }, []);

  return { user, loading };
}