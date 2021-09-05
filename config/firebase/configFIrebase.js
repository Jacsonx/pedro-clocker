// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3r9cxrKiJTZHO7rcnKZj95eQP-50ZmYU",
  authDomain: "clocker-pedro.firebaseapp.com",
  databaseURL: "https://clocker-pedro-default-rtdb.firebaseio.com",
  projectId: "clocker-pedro",
  storageBucket: "clocker-pedro.appspot.com",
  messagingSenderId: "388936032764",
  appId: "1:388936032764:web:8692a54cbbd3e0a2429279",
  measurementId: "G-F12JT851MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};
