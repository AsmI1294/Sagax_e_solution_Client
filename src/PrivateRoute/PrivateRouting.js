import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const PrivateRouting = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);
  if (loading == false) {
    if (user != undefined) {
      return children;
    } else {
      return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      );
    }
  } else {
    return <div className="text-center display-1">Loading...</div>;
  }
};

export default PrivateRouting;
