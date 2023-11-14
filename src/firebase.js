import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkX-tqwEBVioGGMv3tlBqBGBnTlxLi250",
  authDomain: "phone-auth-b2bde.firebaseapp.com",
  projectId: "phone-auth-b2bde",
  storageBucket: "phone-auth-b2bde.appspot.com",
  messagingSenderId: "894224373914",
  appId: "1:894224373914:web:bf09d022c6923c5e896723",
  measurementId: "G-W2WKRBJP2H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
export default app;
