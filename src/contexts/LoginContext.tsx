"use client";

import { createContext, useContext, useState } from "react";

const LoginContext = createContext({
  isOpen: false,
  openLogin: () => {},
  closeLogin: () => {},
});

export const LoginProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const openLogin = () => setIsOpen(true);
  const closeLogin = () => setIsOpen(false);

  return (
    <LoginContext.Provider value={{ isOpen, openLogin, closeLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
