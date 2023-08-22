import React, { createContext, useContext, useState } from "react";

const Context = createContext();
const AppContext = ({ children }) => {
 const [state , setState] = useState(false)

  const handleClick = () => {
    setState(prev=>!prev)
  
  }
  return <Context.Provider value={{handleClick, state}}>{children}</Context.Provider>;
};
export const Store = () => useContext(Context);
export default AppContext;
