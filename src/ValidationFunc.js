import React,{ useState } from 'react'
import './Validation.css';

const ValidationFunc = () => {

  const [info,setInfo] = useState({
    password: '',
    clicked: false,
    validation : false
  })
  
  const {password, clicked, validation} = info;

  const handleChange = e => {
    const newInfo = {
      ...info,
      password: e.target.value
    }
    setInfo(newInfo)
  }

  const handleButtonClick = () => {
    const newClick = {
      ...info,
      clicked: true,
      validation: password === "0000"
    }
    setInfo(newClick)
  }

  return (
    
    <div>
      <input 
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validation ? "success" : 'failure') : ""}
      />
      <button
        onClick={handleButtonClick}
      >check</button>

    </div>
  )
}

export default ValidationFunc