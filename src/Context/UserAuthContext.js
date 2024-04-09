import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logIn(email, password) {
    setIsLoggedIn(true);
    toast.success("Login successful!");
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    setIsLoggedIn(true);
    toast.success("Sign-up successful!");
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    setIsLoggedIn(false);
    toast.success("Logout!");
    return signOut(auth);
  }

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' });
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth', currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const [number, setNumber] = useState("")


  return (
    <userAuthContext.Provider value={{ number, setNumber, isLoggedIn, user, logIn, signUp, logOut, setUpRecaptcha }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}