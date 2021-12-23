import React, { useState, useContext, createContext } from "react";

export const TopPickerContext = createContext(null);

export const TopPickerProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [accountType, setAccountType] = useState(null);
  return (
    <TopPickerContext.Provider
      value={{
        currentUser,
        status,
        accountType,
        setAccountType,
        setStatus,
        setCurrentUser,
      }}
    >
      {children}
    </TopPickerContext.Provider>
  );
};
