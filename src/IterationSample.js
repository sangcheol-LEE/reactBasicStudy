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

    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=> handleRemove(name.id)}>{name.text}</li>)

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

    const handleRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames)
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