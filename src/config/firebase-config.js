// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyDTdSA5C_HjwzGza55Me6HhRc_t87k6Ov0",

  authDomain: "tracker-60cfb.firebaseapp.com",

  projectId: "tracker-60cfb",

  storageBucket: "tracker-60cfb.appspot.com",

  messagingSenderId: "431322543032",

  appId: "1:431322543032:web:1687fd9cae040970d4554d",

  measurementId: "G-HE02Y0FNP0"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
