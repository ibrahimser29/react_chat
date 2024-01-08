import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8XzwgqcMkD-IRi_b4fwODNj5DSOmeNuc",
  authDomain: "react-chat-d5203.firebaseapp.com",
  projectId: "react-chat-d5203",
  storageBucket: "react-chat-d5203.appspot.com",
  messagingSenderId: "884147704957",
  appId: "1:884147704957:web:a1bddd35af20842a0acd14"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

