// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSBiBa-1egFR9jVK0HGsqt2Nceh85Bea8",
  authDomain: "g-resume-parser.firebaseapp.com",
  projectId: "g-resume-parser",
  storageBucket: "g-resume-parser.appspot.com",
  messagingSenderId: "538346631587",
  appId: "1:538346631587:web:4cc57d630983813b826a16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);
