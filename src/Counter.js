import React,{useState, useReducer} from "react";

function all (state, action) {
    switch(action.type) {
        case "PLUS" :
            return {value : state.value + 1}
        case "MINUS" :
            return {value : state.value - 1}
        case "DOUBLE" :
            return {value: state.value * state.value}
        case "DIVIDE" :
            return {value: state.value / state.value}
        case "RESET" :
            return {value: 0}
        case "default":
            return state;
    }
}




const Counter = () => {

    const [state,dispatch] = useReducer(all, {value : 0})

    return (
       <>
            <h1>조금 신기한 계산기: {state.value}</h1>
            <button onClick={() => dispatch({type:'PLUS'})}>+</button>
            <button onClick={() => dispatch({type:'MINUS'})}>-</button>
            <button onClick={() => dispatch({type:'DOUBLE'})}>*</button>
            <button onClick={() => dispatch({type:'DIVIDE'})}>/</button>
            <button onClick={() => dispatch({type:'RESET'})}>RESET</button>

       </>
    )
 
}

export default Counter