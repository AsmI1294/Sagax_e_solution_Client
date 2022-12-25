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
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("white");
  const dark = { backgroundColor: "#343a40", color: "white" }; //theme
  const providerGoogle = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();

  //email Register
  const emailRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };
  const gitLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGit);
  };

  //set user onAuthStateChange
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    loading,
    theme,
    setTheme,
    dark,
  };
  return (
    <div>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
