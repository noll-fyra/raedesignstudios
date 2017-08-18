import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'

const imageArray = [
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop='
]

class Work extends Component {

  render () {
    const cards = imageArray.map((image, index) => {
      return <li key={index} style={style.cardItem}>
        <Link to={`/work/${image}`}>
          <Card image={image} />
        </Link>
      </li>
    })
    return (
      <div style={style.work}>
        <ul style={style.cardList}>
          {cards}
        </ul>
      </div>
    )
  }
}

const style = {
  work: {
    padding: '0 4vw',
    display: 'flex',
    alignItems: 'center'
  },
  cardItem: {
    margin: '0vw 1vw 2vw 1vw'
  },
  cardList: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

export default Work
