import React from 'react'
import './Message.css'
import { Button } from 'react-bootstrap'

const Message = ({title,subtext,btntext,isButton,btnOnClick}) => {
  return (
    <div className='Message'>
      <p className='display-5 text-center'>{title}</p>
      <p className="lead">{subtext}</p>
      {isButton &&   <Button variant="primary" onClick={btnOnClick}>
      {btntext}
    </Button> }
    </div>
  )
}

export default Message