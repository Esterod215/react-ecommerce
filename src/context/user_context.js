import React, { useContext, createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { loginWithRedirect, isAuthenticated, isLoading, logout, user } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider
      value={{ loginWithRedirect, isAuthenticated, logout, myUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
