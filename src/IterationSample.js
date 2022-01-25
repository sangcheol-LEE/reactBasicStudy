import React,{ useState } from 'react'


const IterationSample = () => {

    const [names, setNames] = useState([
        {id:1, text: "SnowMan"},
        {id:2, text: "Ice"},
        {id:3, text: "Snow"},
        {id:4, text: "Wind"}
    ])

    const [inputText, setInputText] = useState('')

    const [nextId, setNextId] = useState(5)

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>)

    const handleChange = e => {setInputText(e.target.value)}

    const handleClick = () => {
        const nextNames = names.concat({
            id:nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }


    return(
        <>
            <input 
                value={inputText}
                onChange={handleChange}
            />
            <button
                onClick={handleClick}
            >add</button>
            <ul>{nameList}</ul>
        </>
    )
};

export default IterationSample