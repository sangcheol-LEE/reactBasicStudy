import React,{ useState } from 'react';
import styled from 'styled-components';

const Children = () => {

  const [form,setForm] = useState({
    id: '',
    password : '',
  }) 

  const {id,password} = form

  const handleChange = e => {
  const {name,value} = e.target

    const nextForm = {
      ...form, 
      [name] : value
    }
    setForm(nextForm)
  };

  const onClick = () => {
    alert(id + ": " + password)
    setForm({
      id: '',
      password: '',
    });
  }

  const onKeyPress = e => {
    if(e.key === "Enter") {
      onClick()
    }
  }

  return (
    <>
    <h1>박현미 짜증나게 하지마라</h1>

      <input 
        type="text"
        name="id"
        placeholder="id"
        value={id}
        onChange={handleChange}
      />

      <input 
        type="text"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      
      <button
        onClick={onClick}
      >확인</button> 

    </>
  )
}



export default Children;