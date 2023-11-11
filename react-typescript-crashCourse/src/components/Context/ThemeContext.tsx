import { createContext,  } from "react";
import { theme } from "./theme";
type ProviderProp={
    children:React.ReactNode;
}
const themeContext=createContext(theme);

 const themeContextProvider=({children,}:ProviderProp)=>{
    return <themeContext.Provider value={theme}>{children}</themeContext.Provider>
}


export {themeContextProvider,themeContext}