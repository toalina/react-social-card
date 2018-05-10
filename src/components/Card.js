import React from 'react'
import Logo from './Logo'
import Headline from './Headline'
import CreditBox from './CreditBox'
import Message from './Message'

const Card = props => (
  <div className='card'>
    <section className='main'>
      <Logo logo={props.logoUrl} />
      <Headline headline={props.headline} />
      <CreditBox
        name={props.name}
        creditImageUrl={props.creditImageUrl}
      />
    </section>
    <Message
      title={props.headline}
      message={props.message}
      url={props.url}
      urlDisplayName={props.urlDisplayName}
    />
  </div>
)

export default Card
