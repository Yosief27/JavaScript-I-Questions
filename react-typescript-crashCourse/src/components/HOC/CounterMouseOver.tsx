import React from 'react'
import HigherOrderCounter from  "./HigherOrderCounter"
export type CounterMouseOverProp={
    increment:()=>void,
    name:string
}
function CounterMouseOver({increment,name}:CounterMouseOverProp) {
  return (
    <div>
        <button onMouseOver={increment}>{name}</button>
    </div>
  )
}

export default HigherOrderCounter(CounterMouseOver) 