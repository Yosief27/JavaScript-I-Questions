import React from 'react'
import Login  from "./Login"
import {ProfileProp} from "./Profile"
type PrivateProp={
    isLoggin:boolean,
    Component:React.ComponentType<ProfileProp>
}
const Private = ({isLoggin,Component}:PrivateProp) => {
    if(isLoggin){return <Component name="josi" /> }else{return<Login/>}
} 
export default Private