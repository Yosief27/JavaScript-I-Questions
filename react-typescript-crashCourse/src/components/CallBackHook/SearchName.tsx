import React from 'react'
import {memo} from "react"
type SearchNameProp={
    handleChange:(text:string)=>void
}
const SearchName = ({handleChange}:SearchNameProp) => {
    console.log("render search name")
  return (
   <input style={{margin:"1rem",padding:"1rem",backgroundColor:"white" ,color:"black", borderRadius:"2rem"}}  type="text" onChange={(e)=>handleChange(e.target.value)}/> 
  )
}

export default memo(SearchName)