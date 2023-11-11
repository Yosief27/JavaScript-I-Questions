import React from 'react'
import { useState,useEffect } from 'react';
export const LoggIn= () => {
 const [isLoggIn,setIsLoggIn]=useState(false);
 const handleClick=()=>{
    setIsLoggIn(prev=>prev===false?true:false)
 } 
  
  return (
    <div>
      <button onClick={handleClick} style={{backgroundColor:"red"}}>Login</button>
    <button onClick={handleClick} style={{backgroundColor:"aquamarine"}}>Login</button>
      <div>User is {isLoggIn?"logged In!":"loogged Out!"}</div>
    </div> 
     )
}
