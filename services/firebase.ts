// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7KYFA66HRs2Ziq5x_mLUUA_ynx-0GNGQ",
  authDomain: "fitlog-759de.firebaseapp.com",
  projectId: "fitlog-759de",
  storageBucket: "fitlog-759de.firebasestorage.app",
  messagingSenderId: "419022306980",
  appId: "1:419022306980:web:7191c421305aa7306f3031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
export const auth = getAuth(app);
// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
