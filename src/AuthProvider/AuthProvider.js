import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const providerGoogle = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();

  //email Register
  const emailRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    return signOut(auth);
  };
  //login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google Login
  const googleLogin = () => {
    return signInWithPopup(auth, providerGoogle);
  };
  const gitLogin = () => {
    return signInWithPopup(auth, providerGit);
  };

  //set user onAuthStateChange
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsub();
    };
  }, []);
  const userInfo = {
    user,
    emailRegister,
    logOut,
    logIn,
    googleLogin,
    gitLogin,
  };
  return (
    <div>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
