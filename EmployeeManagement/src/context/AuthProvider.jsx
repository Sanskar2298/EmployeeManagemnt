import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   
    if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }

    
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
