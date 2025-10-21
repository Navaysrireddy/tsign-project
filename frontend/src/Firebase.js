// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpJU-FkqCn1M4Ytce8A3xOrJQzvly0lus",
  authDomain: "t-sign-bdcc6.firebaseapp.com",
  projectId: "t-sign-bdcc6",
  storageBucket: "t-sign-bdcc6.firebasestorage.app",
  messagingSenderId: "459450838175",
  appId: "1:459450838175:web:107940fcd7555f198b86aa",
  measurementId: "G-28NCJE3YT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
// src/Firebase.js
