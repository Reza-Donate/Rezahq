import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-ut4sGfu8FdtrBCSCLqKdFWk2Lxr4Jsk",
  authDomain: "reza-efc33.firebaseapp.com",
  projectId: "reza-efc33",
  storageBucket: "reza-efc33.appspot.com",
  messagingSenderId: "1061976222340",
  appId: "1:1061976222340:web:a46c05923190eda0a0f0d1",
  measurementId: "G-V2SRQ0LYHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
