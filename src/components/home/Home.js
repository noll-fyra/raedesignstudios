import React, { Component } from 'react'
import Card from '../card/Card'

const imageArray = [
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop='
]

class Home extends Component {

  render () {
    const cards = imageArray.map((image, index) => {
      return <li key={index} style={style.cardItem}><Card image={image} /></li>
    })
    return (
      <div style={style.home}>
        <ul style={style.cardList}>
          {cards}
        </ul>
      </div>
    )
  }
}

const style = {
  home: {
    padding: '24px',
    display: 'flex',
    alignItems: 'center'
  },
  cardItem: {
    margin: '12px'
  },
  cardList: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

export default Home
