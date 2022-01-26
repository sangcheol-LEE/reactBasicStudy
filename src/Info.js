import React,{useState, useEffect} from "react";


const Info = () => {

    const [name, setName] = useState('');
    const [nickName ,setNickName] = useState('');

    // useEffect(() => {
    //     console.log('렌더링 완료')
    //     console.log({
    //         name,
    //         nickName
    //     })
    // })

    // useEffect(() => {
    //     console.log("마운트 될 때")
    // },[])

    // useEffect(()=> {
    //     console.log('name state change')
    // },[name])

    useEffect(() => {
        console.log('effect')
        console.log("name : ",name)
        return () => {
            console.log("cleanUp")
            console.log("Name : ", name)
        }
    },[name])

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeNickName = e => {
        setNickName(e.target.value)
    }

    return (
        <>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickName} onChange={onChangeNickName}/>
        </div>
        <div>
            <b>이름: </b> {name}
        </div>
        <div>
            <b>닉네임: </b> {nickName}
        </div>

        </>

    )
}

export default Info