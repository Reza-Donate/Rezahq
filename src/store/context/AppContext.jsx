import React, { createContext, useContext, useState } from "react";

const Context = createContext();
const AppContext = ({ children }) => {
  const [m, setM] = useState("");
  const handleClick = () => {
    setM("Hello");
  };
  return (
    <Context.Provider value={{ handleClick, m }}>{children}</Context.Provider>
  );
};
export const Store = () => useContext(Context);
export default AppContext;
