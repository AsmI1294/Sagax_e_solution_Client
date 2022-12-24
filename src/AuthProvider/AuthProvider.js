import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const emailRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsub();
    };
  }, []);
  const userInfo = { user, emailRegister };
  return (
    <div>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
