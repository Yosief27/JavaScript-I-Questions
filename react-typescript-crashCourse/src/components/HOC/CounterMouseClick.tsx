import React from 'react'
import HigherOrderCounter from  "./HigherOrderCounter"
export type CounterMouseClickProp={
increment:()=>void;
name:string
}
function CounterMouseClick({increment,name}:CounterMouseClickProp) {
  return (
    <div>
        <button onClick={increment}>{name}</button>
    </div>
  )
}

export default HigherOrderCounter(CounterMouseClick) 