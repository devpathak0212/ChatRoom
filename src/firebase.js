// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7cCm2XA_A25Qoh8YGYN0wk1XdJ8QImok",
  authDomain: "auth-firebase-c81a1.firebaseapp.com",
  projectId: "auth-firebase-c81a1",
  storageBucket: "auth-firebase-c81a1.appspot.com",
  messagingSenderId: "1082872431057",
  appId: "1:1082872431057:web:76713e879fe6775e0ce0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Authetication in Firebase
export const auth = getAuth(app)
export const db = getFirestore(app)
