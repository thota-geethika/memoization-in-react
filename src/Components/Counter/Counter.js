import React from 'react'
import Child from '../Child/Child';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleOnClick = ()=>{
        setCount(count+1);
    }
  return (
    <div>
      <h1>Heading</h1>
      {count}
      <button onClick={handleOnClick}>Add</button>
      <Child/>
    </div>
  )
}

export default Counter
