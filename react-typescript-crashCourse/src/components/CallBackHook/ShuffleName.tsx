import {useState,useContext,useCallback}  from 'react'

import {shuffled} from "./utilites"
import {themeContext} from "../Context/ThemeContext"
import SearchName from './SearchName'
const nameList:string[]=[
    "josi",
 
    "kisu",
    "kisuneey",
    "kisuye",

    "natey",
    "meary"
]


const ShuffleName = () => {
    const [users,setUsers]=useState(nameList)
    const usetheme=useContext(themeContext);
    const handleChange=useCallback((text:string)=>{
        console.log(users[0])
        text!==""?setUsers(users.filter(value=>value.includes(text))):setUsers(nameList)
    },[users])

    return (
    <>
    <div >
        <SearchName handleChange={handleChange}></SearchName>
        <button style={{backgroundColor:usetheme.third.main}} onClick={()=>setUsers(shuffled(users))}>Shuffled Name</button>
        <ul>
        
            {users.map((value,index)=>{
                return(<li key={index}>{value}</li>)
            })}
        </ul>
     </div>
    </>

  )
}

export default ShuffleName 