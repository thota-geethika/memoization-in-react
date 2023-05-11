import React, { useMemo } from 'react'
import Child from '../Child/Child';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(1);

    const handleOnClick = ()=>{
        setCount(count+1)
    }

    const hello = useMemo(()=>{
        let i=0;
        while(i<2000000000) i++;
        return count+"heyy";
    },[count])

    const funny = useMemo(()=>{
      return "hahahahheheheh";
    },[])

    const handleOnClickTwo = ()=>{
        setCountTwo(countTwo+1)
    }

  return (
    <div>
      <h1>Heading</h1>
      <button onClick={handleOnClick}>Add: {count}</button>
      <h4>{hello}</h4>
      <button onClick={handleOnClickTwo}>Add2: {countTwo}</button>
      <Child funny = {funny}/>
    </div>
  )
}

export default Counter
