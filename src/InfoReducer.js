import React,{useReducer} from 'react';


function reducer(state,action) {
  return {
    ...state,
    [action.name] : action.value
  }
}

const InfoReducer = () => {

    const [state, dispatch] = useReducer(reducer, {
     name:'',
     nickname:''
   })

   const {name,nickname} = state;

   const onChange = e => {
     dispatch(e.target)
   }

  return (
    <>
      <input name="name" placeholder="name"  value={name} onChange={onChange}/>
      <input name="nickname" placeholder="nickname" value={nickname} onChange={onChange}/>
      <br/>
      <b>name : </b>{name}
      <br/>
      <b>nickname : </b>{nickname}
    </>
  )
}


export default InfoReducer;