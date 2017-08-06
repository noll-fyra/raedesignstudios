import React from 'react'
import PropTypes from 'prop-types'

const Card = ({image}) => (
  <div style={style.card}>
    <div style={style.cardText}>
      <div style={style.cardHeader}>HEADER</div>
      <div style={style.cardBody}>This is the body of the card</div>
    </div>
    <div style={style.cardImage(image)} className='cardImage' />
  </div>
)

const style = {
  card: {
    position: 'relative',
    width: '44vw',
    height: '23vw'
  },
  cardText: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeader: {},
  cardBody: {},
  cardImage: function (image) {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: '2',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired
}

export default Card
