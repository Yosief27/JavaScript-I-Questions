import React from 'react'
import {useReducer,useContext} from    "react"
import{actionType} from  "./actionType"
import {themeContext} from "../Context/ThemeContext" 
    type stateType={count:number}
    type ActionType={
        type:"increment"|"decrement",//string can be an easy or we can do "incre.."|"decrement" which is strick mode type
       payload:number
    }
    const initialState:stateType={count:0};
    function reducer(state:stateType,action:ActionType){
        switch(action.type){
            case actionType.increment:
                return {count:state.count+action.payload}
        case  actionType.decrement:
                return {count:state.count-action.payload}
        default:
            return state
       
        }

    }
const Counter = () => {
    const usetheme=useContext(themeContext)
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>Counter:{state.count}
    
        <button style={{backgroundColor:usetheme.primary.main ,color:usetheme.primary.text}} onClick={()=>dispatch({type:actionType.increment,payload:10})}>Increment by 10</button> 
        <button style={{backgroundColor:usetheme.secondary.main,color:usetheme.secondary.text}} onClick={()=>dispatch({type:actionType.decrement,payload:10})}>Decrement by 10</button> 

    
    
    </>

  )
}

export default Counter