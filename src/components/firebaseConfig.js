// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLyQGXU6bb-9xn8sLeGNeaBXrcMyccvjw",
  authDomain: "ecomm-lcdld.firebaseapp.com",
  projectId: "ecomm-lcdld",
  storageBucket: "ecomm-lcdld.appspot.com",
  messagingSenderId: "80144916530",
  appId: "1:80144916530:web:27fd4a5e505e71d19c1c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);