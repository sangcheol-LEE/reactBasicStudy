import React,{useReducer} from "react";

function reducer (state, action) {
    return {
        ...state,
        [action.name] : action.value
    }
}

const Counter = () => {

    const [state,dispatch] = useReducer(reducer, {
        name:'',
        nickname:''
    })
    const {name, nickname} = state;
    const onChange = e =>{dispatch(e.target)}
    return (
    <>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <h1>name : {name}</h1>
        <h1>nickname : {nickname}</h1>

    </>
    )
 
}

export default Counter