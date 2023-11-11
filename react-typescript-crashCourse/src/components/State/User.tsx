import React from 'react'
import {useEffect,useState,useContext,useRef} from "react"
import { UserContext } from '../Context/UserContext'
import { themeContext } from '../Context/ThemeContext'


type AuthUser={
    name:string,
    email:string,
    isAuth:boolean
}
type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const User = () => {
    const inputRef=useRef<HTMLInputElement>(null!)//never null asserction 
    const useUser=useContext(UserContext);
    const usetheme=useContext(themeContext);
    const btnRef=useRef<HTMLDivElement|null|undefined>()
    useEffect(()=>{
        inputRef.current.focus()
        console.log(inputRef.current?.value)

        //inputRef.current?.focus()// with out assceration
    },[])
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        useUser?.setUser({name:e.target.value,email:"josiyoniug@gmail.com"})
    }
    const handleRef=()=>{
        console.log(btnRef.current)
        btnRef.current?.style.color==="white"?btnRef.current.style.color="yellow":btnRef.current.style.color="white"
    }


  return (
<div>
   <input  type="text" style={{ backgroundColor:"white",color:"black", fontSize:"1rem" ,padding:"1rem" ,borderRadius:"66px" ,margin:"1rem"}}
   ref={inputRef} 
    value={useUser?.user?.name}
    onChange={(e)=>handleChange(e)}
   />     
    <button  style={{backgroundColor:usetheme.secondary.main}} onClick={()=>useUser?.user?.isAuth===undefined?useUser?.setUser({name:"josi",email:"josiyoniug@gmail.com",isAuth:true}):useUser.setUser(null)}>LoggIn</button>
    
    <div ref={btnRef} onClick={handleRef}>
        {useUser?.user?.isAuth?<span>{useUser.user?.name}{" ."}{useUser.user?.email}</span>:<span>Please click logg in!</span>}
        
    </div>

</div>
  )
}

export default User