import React from 'react'

const Message = props => (
  <section className='message'>
    <h4 className='message-headline'>
      {props.title}
    </h4>
    <p className='message-body'>
      {props.message}
    </p>
    <a href={props.url} className='message-url'>
      {props.urlDisplayName}
    </a>
  </section>
)

export default Message
