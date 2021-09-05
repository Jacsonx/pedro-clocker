// Import the functions you need from the SDKs you need
import dotenv from "dotenv";
dotenv.config();

import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey:  process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
});

export { app };