import React, { Component } from 'react'
import '../styles/App.css'
import cards from '../cardData'
import Card from './Card'
import headshot from '../self.jpg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ul>
          {
            (cards.length > 0)
            ? cards.map((card, i) => {
              return (
                <Card
                  logoUrl={headshot}
                  headline={card.headline}
                  name={card.name}
                  creditImageUrl={headshot}
                  message={card.mesage}
                  url={card.url}
                  urlDisplayName={card.urlDisplayName}
                  />
              )
            })
            : (
              <li>
                Nothing to see here
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default App
