import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../../utilities/firebase'
import constants from '../../constants/constants'

const Header = ({user}) => (
  <div style={style.header}>
    <div style={style.logo}>
      <Link to='/'>RAE Design Studios</Link>
    </div>
    <div>
      <ul style={style.navList}>
        <li style={style.navLink}><NavLink to='/work' activeStyle={style.activeLink}>Work</NavLink></li>
        <li style={style.navLink}><NavLink to='/about' activeStyle={style.activeLink}>About</NavLink></li>
        {user &&
          <li style={style.navLink}><NavLink to='/client' activeStyle={style.activeLink}>Client</NavLink></li>
        }
        {user
          ? <li style={style.navLink}><Link to='/' onClick={() => auth.signOut()}>Sign Out</Link></li>
          : <li style={style.navLink}><NavLink to='/signin' activeStyle={style.activeLink}><div style={style.signIn}>Sign In</div></NavLink></li>
        }
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  user: PropTypes.object
}

const style = {
  header: {
    width: '100vw',
    height: constants.headerHeight,
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: constants.paddingLeft,
    paddingRight: constants.paddingRight,
    position: 'fixed',
    zIndex: 10,
    top: 0
  },
  logo: {
    fontSize: '2em'
  },
  navList: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center'
  },
  navLink: {
    marginLeft: '12px'
  },
  activeLink: {
    color: 'red'
  },
  signIn: {
    padding: constants.paddingBox,
    border: '2px solid black'
  }
}

export default Header
