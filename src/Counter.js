import React,{ useReducer } from "react";

function reducer (state, action) {
    switch(action.type) {
        case "UP" :
            return {kk: state.kk + 1}
        case "DOWN" : 
            return {kk: state.kk - 1}
        default :
            return  state.value
    }
}


const Counter = () => {
    
    const defaultValue = {kk : 0}
    const [state, dispatch] = useReducer(reducer,defaultValue)

    return (
    <>
    <h1>counter : {state.kk}</h1>
    <button onClick={() => dispatch({type:"UP"})}>up</button>
    <button onClick={() => dispatch({type:"DOWN"})}>down</button>
    </>
    )
 
}



export default Counter