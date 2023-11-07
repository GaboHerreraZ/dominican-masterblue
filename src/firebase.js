// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjdzPsJbLsHqLuddrC-RxSZFvbfsYfpAw",
  authDomain: "dominicanmasterblue-bfeed.firebaseapp.com",
  projectId: "dominicanmasterblue-bfeed",
  storageBucket: "dominicanmasterblue-bfeed.appspot.com",
  messagingSenderId: "348569317344",
  appId: "1:348569317344:web:65e77ed9cdb41f04540585",
  measurementId: "G-ZJES04MRW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase initialized");
export const db = getFirestore();
