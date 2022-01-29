import React,{ useReducer } from "react";


function reducer(state,action) {
    switch(action.type) {
        case 'UP' :
            return {value : state.value + 1}
        case "DOWN" :
            return {value : state.value - 1}
        default :
            return state
    }

}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value : 0})

   
    return (
    <>
        <h1>현미의 방구 횟수 : {state.value}번</h1>
        <button onClick={() => dispatch({type : 'UP'})}>UP</button>
        <button onClick={() => dispatch({type : 'DOWN'})}>Down</button>
    </>
    )
 
}

export default Counter