import React, { createContext, useContext } from "react";
const Context = createContext();
const AppContext = ({ children }) => {
  // const hideCountryMenuClick = () => {
  //   setCountry(false);
  // };

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
export const Store = () => useContext(Context);
export default AppContext;
