import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

class Home extends Component {
  componentDidMount () {
    this.props.handleHomeActive(true)
  }

  componentWillUnmount () {
    this.props.handleHomeActive(false)
  }

  render () {
    return (
      <div style={style.home}>
        <div style={style.hero}>
          <Header />
          <div style={style.heroCopy}>
            We even interior design the exterior
            <div style={style.seeOurWork}><Link to='/work'>See our work >>></Link></div>
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  home: {
    position: 'relative'
  },
  hero: {
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1430651717504-ebb9e3e6795e?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  heroCopy: {
    position: 'absolute',
    top: '40vh',
    width: '100%',
    display: 'flex',
    flexFlow:'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3em'
  },
  seeOurWork:{
    padding: '8px',
    border: '2px solid black',
    fontSize: '0.5em'
  }
}
export default Home
