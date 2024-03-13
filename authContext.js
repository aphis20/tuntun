// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Create a provider component to wrap your app and provide the context
export const AuthProvider = ({ children }) => {
  // State to manage authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const login = () => {
    // Perform login logic here, such as setting tokens, etc.
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    // Perform logout logic here, such as clearing tokens, etc.
    setIsLoggedIn(false);
  };

  // Provide the context value to children components
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the authentication context
export const useAuth = () => useContext(AuthContext);
