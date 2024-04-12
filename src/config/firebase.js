
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBMHD4vQ6IwmYWKhqoNriu_hY0LPv2fj0c",
    authDomain: "embed-ai-12e3a.firebaseapp.com",
    projectId: "embed-ai-12e3a",
    storageBucket: "embed-ai-12e3a.appspot.com",
    messagingSenderId: "284682794155",
    appId: "1:284682794155:web:3cc66c7e6123bb6933f3ee",
    measurementId: "G-NP107T60FK",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app); 