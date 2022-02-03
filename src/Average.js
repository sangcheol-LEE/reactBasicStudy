import React,{ useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
    console.log('계산 중...')
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length 
}


const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e  => {
        setNumber(e.target.value);
    },[]) // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(()=> {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number, list]) // number 혹은 list가 바뀌었을 때만 함수생성

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