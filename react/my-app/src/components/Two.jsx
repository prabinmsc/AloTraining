import React,{useState} from 'react'
import ButtonComponent from './ButtonComponent'

const Two = () => {

  const[count,setCount]=useState(0)

  const decrement = () => {
  setCount(prevCount => prevCount - 1)
};

  return (
    <div>
      <ButtonComponent content="select" color="gray" event={decrement} />
      <p>Count:{count}</p>
      
    </div>
  )
}

export default Two
