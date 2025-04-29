// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Импортируйте функцию для аутентификации
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRDLeki7vRizpajlyKOj3QXF0d4K9QxrQ",
  authDomain: "workout-programs-76a3c.firebaseapp.com",
  projectId: "workout-programs-76a3c",
  storageBucket: "workout-programs-76a3c.firebasestorage.app",
  messagingSenderId: "884755869682",
  appId: "1:884755869682:web:2cfe922b100c04a07c456b",
  measurementId: "G-VHFY6FR97P"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
