import React,{useState} from 'react'

const EventPracticeFunc = () => {

  const [text, setText] = useState({
    id:"",
    password:""
  })

  const {id, password} = text;

  const onChange = (e) => {
    const newText = { 
      ...text,
      [e.target.name] : e.target.value
    }
    setText(newText);
  }

  const onClick = () => {
    alert(`id는 ${id}이고, password는 ${password}입니다.`)
    setText({
      id:'',
      password:''
    })
    console.log("초기화면입니다.")
  }

  return (
    <>
    <input 
      type="text"
      name="id"
      placeholder="id"
      value={id}
      onChange={onChange}
    />
    
    <input 
      type="password"
      name="password"
      placeholder="password"
      value={password}
      onChange={onChange}

    />

    <button
      onClick={onClick}
    >Yes</button>
    </>

  )
}

export default EventPracticeFunc