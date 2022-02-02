import React,{ useState, useMemo } from "react";

const getAverage = numbers => {
    console.log('계산 중...')
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length 
}


const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(()=> getAverage(list),[list])
    
    

    return (
        <>
          <input value={number} onChange={onChange}/>
          <button onClick={onInsert}>add</button>
          <ul>
              {list.map((value, num) => (
                  <li key={num}>{value}</li>
              ))}
          </ul>
          <h1>average value : {avg}</h1>
        </>

    )
}

export default Average