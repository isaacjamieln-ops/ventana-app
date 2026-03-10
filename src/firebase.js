import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";

import { getDatabase } from "firebase/database";
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBp7uyQGenv7Tnw6SC5KqjTKz1MeDJ1IMo",
  authDomain: "ventana-app-nyls.firebaseapp.com",
  projectId: "ventana-app-nyls",
  storageBucket: "ventana-app-nyls.firebasestorage.app",
  messagingSenderId: "168101626192",
  appId: "1:168101626192:web:d1d47fdd6412ba4ab66c55",
  databaseURL: "https://ventana-app-nyls-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const useUserState = () => {
  const [user, loading, error] = useAuthState(auth);
  return { user, loading, error };
};

export { auth, database };