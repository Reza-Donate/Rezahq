import React, { createContext, useContext } from "react";
import { useWindowSize } from "../../utils/UseWindowSize";

const Context = createContext();
const AppContext = ({ children }) => {
const width = useWindowSize()
  return (
    <Context.Provider value={{width }}>{children}</Context.Provider>
  );
};
export const Store = () => useContext(Context);
export default AppContext;
