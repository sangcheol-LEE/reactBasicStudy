import React,{useState} from 'react';
import styled from 'styled-components';

const LoginPractice = () => {

  const [form,setForm] = useState({
    id: '',
    password: ''
  })

  const {id,password} = form; 
  const handleChange = e => {
    const nextForm = {
      ...form, // 기존의 form 자리에 form 내용을 복사한 후
      [e.target.name] : e.target.value // 원하는 값을 덮어 씌운다.
    }
    setForm(nextForm)

}

  const handleClick = () => {
    alert(`아이디는 ${id}이고 password는 ${password}입니다.`) 
    setForm({
      id: "",
      password: "",
    })
  }

  const handleOnKeyPress = e => {
    if(e.key === "Enter") {
      handleClick()
    }
  }

  return (
    <Form>
    <h1>IanStagram</h1>
    <LoginForm>
      <InputForm 
        type="text"
        name="id"
        placeholder="ID"
        value={id}
        autoFocus
        onChange={handleChange}
      />

      <InputForm
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={password}
        onChange={handleChange}
        onKeyPress={handleOnKeyPress}

      />

      <LoginButton
        onClick={handleClick}
      >로그인</LoginButton>
    </LoginForm>
    </Form>
  )
}

const Form = styled.section`
  display: flex;
  align-items: center;
  flex-direction:column;
  margin: 100px 0px;
  h1 {
    font-size: 50px;
  }


`;
const LoginForm = styled.article`
  display: flex;
  flex-direction:column;
  width: 500px;
  
`;
const InputForm = styled.input `
  padding: 10px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button `
  padding: 10px;
  background-color: #CE93D8;
  border:none;
  &:hover {
    cursor: pointer;
  }

`;

export default LoginPractice