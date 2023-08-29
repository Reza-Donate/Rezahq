import React, { createContext, useContext, useState } from "react";
const Context = createContext();
const AppContext = ({ children }) => {
 const [state , setState] = useState(false)
 const [gender, setGender] = useState(false)

  const handleClick = (name) => {
    console.log(name)
  if (name === 'Select your Country' ){
    setState(prev=>!prev)
    setGender(false)
  }
  else{
    setGender(prev =>!prev)
    setState(false)
  }
  }
  const genderClick = ()=> {
  setGender(prev =>!prev)
}
  return <Context.Provider value={{handleClick, state, genderClick, gender}}>{children}</Context.Provider>;
};
export const Store = () => useContext(Context);
export default AppContext;
