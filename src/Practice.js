import React,{useState} from "react";


const Practice = () => {

    const [texts, setTexts] = useState([
        {id:1, text: "comment 1"},
        {id:2, text: "comment 2"},
        {id:3, text: "comment 3"},
        {id:4, text: "comment 4"},
    ])

    const [comment, setComment] = useState('');
    
    const [idNum, setIdNum] = useState(5);

    const text = texts.map(info => <li key={info.id}>{info.text}</li>)

    const onChange = (e) => {
        setComment(e.target.value)
    }

    const onClick = () => {
        const nextComment = texts.concat({
            id: idNum, text: comment
        })
        setTexts(nextComment);
        setIdNum(idNum + 1);
        setComment('')
    }

    return (
        <>
            <input 
                value={comment}
                onChange={onChange}
            />
            <button
                onClick={onClick}
            >add</button>
            <ul>{text}</ul>
        </>
    )
}

export default Practice