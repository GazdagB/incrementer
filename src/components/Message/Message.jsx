import React from 'react'
import './Message.css'

const Message = ({title,subtext}) => {
  return (
    <div className='Message'>
      <p className='display-5 text-center'>{title}</p>
      <p className="lead">{subtext}</p>
    </div>
  )
}

export default Message