import React, { createContext, useContext } from 'react';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const AuthContext = createContext<ReturnType<typeof useFirebaseAuth> | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useFirebaseAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
