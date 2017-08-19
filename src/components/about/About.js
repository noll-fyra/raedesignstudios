import React from 'react'
import constants from '../../constants/constants'

const About = () => (
  <div style={style.about}>
    <div style={style.aboutImage} />
    <div>
      <div style={style.descriptionContainer}>
        <div style={style.achievements}>
          notable things
        </div>
        <div style={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </div>
)

const style = {
  about: {
    paddingLeft: constants.paddingLeft,
    paddingRight: constants.paddingRight
  },
  aboutImage: {
    margin: '0 auto',
    width: `calc(100vw - ${constants.paddingLeft} - ${constants.paddingRight})`,
    height: `calc((100vw - ${constants.paddingLeft} - ${constants.paddingRight}) / 3)`,
    backgroundImage: 'url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?dpr=1&auto=format&fit=crop&w=1500&h=1190&q=80&cs=tinysrgb&crop=)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  descriptionContainer: {
    margin: '12px 0px',
    display: 'flex',
    flexFlow: 'row',
    width: '100%'
  },
  achievements: {
    width: '50%',
    fontFamily: 'Yrsa serif'
  },
  description: {
    width: '50%',
    fontFamily: 'Yrsa serif'
  }
}

export default About
