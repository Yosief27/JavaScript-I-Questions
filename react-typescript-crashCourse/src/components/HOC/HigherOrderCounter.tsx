import React,{useState} from 'react'
import {CounterMouseOverProp} from "./CounterMouseOver"

import {CounterMouseClickProp} from "./CounterMouseClick"
type HigherOrderCounterProps={
    OriginalComponent:React.ComponentType<CounterMouseOverProp|CounterMouseClickProp>;
}
const HigherOrderCounter = (OriginalComponent:HigherOrderCounterProps) => {
  type NewComponentType={
    name:string
  }
  const NewComponent=(props:NewComponentType)=>{

  const [counter,setCounter]=useState(0)
  const incrementCounter=()=>{
    setCounter(counter+1)
  }
  return (

    <div>
        {counter}
        <OriginalComponent increment={incrementCounter } {...props} ></OriginalComponent>
    </div>
  )

  }
  return NewComponent 
}

export default HigherOrderCounter