import React,{useState} from 'react'

import ButtonComponent from '../components/ButtonComponent'

const One = () => {
   const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <ButtonComponent content="click" color="red" event={increment}/>
      <p>count:{count}</p>
    </div>
  )
}

export default One
