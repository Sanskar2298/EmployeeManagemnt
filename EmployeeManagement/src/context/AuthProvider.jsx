import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Only set localStorage once if not already present
    if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }

    // Then get data from localStorage
    const { employees} = getLocalStorage() || {};
    setUserData( employees);

  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
