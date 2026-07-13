import React from 'react'
import {useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);


    const handleClick =()=>{
        setCount(prev=>prev+1)
        console.log(count)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleClick}>Increment</button>

    </div>
  )

}

export default Counter
