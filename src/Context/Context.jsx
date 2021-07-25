import React, { createContext, useState } from "react";
export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [cartObj, setCartObj] = useState({
    products: [],
  });
  return (
    <Context.Provider value={{ cartObj, setCartObj }}>
      {children}
    </Context.Provider>
  );
};
