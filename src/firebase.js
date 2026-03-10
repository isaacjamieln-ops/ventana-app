// src/firebase.js

// Importa lo necesario de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { useState, useEffect } from "react";


// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBp7uyQGenv7Tnw6SC5KqjTKz1MeDJ1IMo",
  authDomain: "ventana-app-nyls.firebaseapp.com",
  databaseURL: "https://ventana-app-nyls-default-rtdb.firebaseio.com",
  projectId: "ventana-app-nyls",
  storageBucket: "ventana-app-nyls.appspot.com",
  messagingSenderId: "168101626192",
  appId: "1:168101626192:web:d1d47fdd6412ba4ab66c55"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Database
const database = getDatabase(app);

// Funciones de autenticación
const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider);
};

const signOutUser = async () => {
  await signOut(auth);
};

// Hook para obtener estado del usuario
const useUserState = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
};

// Funciones de mensajes
const sendMessage = async (user, text, gameId) => {
  if (!user || !text) return;

  const messagesRef = ref(database, `games/${gameId}/messages`);
  await push(messagesRef, {
    text,
    user: {
      uid: user.uid,
      name: user.displayName || user.email,
      photoURL: user.photoURL || null
    },
    timestamp: Date.now()
  });
};

const listenMessages = (gameId, callback) => {
  const messagesRef = ref(database, `games/${gameId}/messages`);
  return onValue(messagesRef, snapshot => {
    const data = snapshot.val() || {};
    const messages = Object.entries(data).map(([id, value]) => ({
      id,
      ...value
    }));
    callback(messages);
  });
};

// Exporta todo
export {
  auth,
  database,
  signInWithGoogle,
  signOutUser,
  useUserState,
  sendMessage,
  listenMessages
};