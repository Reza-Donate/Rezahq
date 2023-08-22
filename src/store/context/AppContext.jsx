import React, { createContext, useContext } from "react";
import { useWindowSize } from "../../utils/UseWindowSize";

const Context = createContext();
const AppContext = ({ children }) => {
 const [state , setState] = useState(false)
  const width = useWindowSize()
  const handleClick = () => {
    setState(prev=>!prev)
  
  }
  return <Context.Provider value={{handleClick, state, width}}>{children}</Context.Provider>;

};
export const Store = () => useContext(Context);
export default AppContext;
