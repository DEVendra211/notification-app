// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVgfSFMXoE2Jb7KDfmszuFy6YEab1BOlA",
  authDomain: "message-658fb.firebaseapp.com",
  projectId: "message-658fb",
  storageBucket: "message-658fb.appspot.com",
  messagingSenderId: "645580932810",
  appId: "1:645580932810:web:9ed95e24e2455ed0b59633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


