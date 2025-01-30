// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace these with your Firebase config values
  apiKey: "FIREBASE_CONFIG_REMOVED",
  authDomain: "techno-be-with-you.firebaseapp.com",
  projectId: "techno-be-with-you",
  storageBucket: "techno-be-with-you.firebasestorage.app",
  messagingSenderId: "1080910348193",
  appId: "FIREBASE_CONFIG_REMOVED",
  measurementId: "G-QKF1N05T5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);