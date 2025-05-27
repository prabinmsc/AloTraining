import React,{useState} from 'react'
import ButtonComponent from './ButtonComponent'

const Three = () => {
  const [count, setCount]= useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <ButtonComponent content="increment" color=" rgb(103, 214, 254)"  event={increment}/>
      <ButtonComponent content="decrement" color=" #4891d2" event={decrement} />
      <h1>COUNT: {count}</h1>
    </div>
  )
}

export default Three
