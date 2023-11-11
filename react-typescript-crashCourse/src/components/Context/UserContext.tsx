import { createContext,useState } from "react";
type UserProp={
    children:React.ReactNode;
}
type AuthUser={
    name:string,
    email:string,
isAuth? :boolean
}
type UserContextType={
    user:AuthUser|null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser|null>>
}
export const UserContext=createContext<UserContextType|null>(null)

export const UserContextProvider=({children}:UserProp)=>{
    const [user,setUser]=useState<AuthUser|null>(null)

    return (<UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>)
}