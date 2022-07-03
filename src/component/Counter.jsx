import React, {useState} from 'react';


const Counter = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <h1>{count}</h1>

    </div>
  );
};

export default Counter;