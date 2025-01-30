// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace these with your Firebase config values
  apiKey: "AIzaSyDniD6k2BjJaC6qS0Bd0hixnpWlwtUjBvM",
  authDomain: "techno-be-with-you.firebaseapp.com",
  projectId: "techno-be-with-you",
  storageBucket: "techno-be-with-you.firebasestorage.app",
  messagingSenderId: "1080910348193",
  appId: "1:1080910348193:web:43f118c6d16ddb37be55e0",
  measurementId: "G-QKF1N05T5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);