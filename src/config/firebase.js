
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// database
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDKUilBs41tf8qdrHaAEWNYxh9b3vOdxRE",
  authDomain: "make-todolist.firebaseapp.com",
  projectId: "make-todolist",
  storageBucket: "make-todolist.appspot.com",
  messagingSenderId: "936679252179",
  appId: "1:936679252179:web:19ea92edfc474f7e997426",
  measurementId: "G-HXZZC4CW0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export {auth, provider, db}