import React from "react";
import { Navigate } from "react-router-dom";

import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUserContext();
  if (isAuthenticated) return children;
  return <Navigate to="/" />;
};

export default PrivateRoute;
