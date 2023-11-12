import React from 'react'
type InputProps=React.ComponentProps<"input">


const Input = (props:InputProps) => {
  return (
   <input type={props.type} onChange={e=>console.log(e.target.value)}></input> 
  )
}

export default Input