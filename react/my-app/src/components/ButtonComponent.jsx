import React from 'react'

const ButtonComponent = (props) => {
  return (
    <div>
        <button style={{backgroundColor:props.color, padding:"20px 30px"}}  onClick={props.event}>{props.content}</button>
      
    </div>
  )
}

export default ButtonComponent
