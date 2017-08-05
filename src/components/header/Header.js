import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types';

const Header = () => (
  <div style={style.header}>
    <div style={style.logo}>
      <Link to='/'>RAE Design Studios</Link>
    </div>
    <div>
      <ul style={style.navList}>
        <li style={style.navLink}><NavLink exact to='/' activeStyle={style.activeLink}>Work</NavLink></li>
        <li style={style.navLink}><NavLink to='/about' activeStyle={style.activeLink}>About</NavLink></li>
        <li style={style.navLink}><NavLink to='/signin' activeStyle={style.activeLink}>Sign In</NavLink></li>
      </ul>
    </div>
  </div>
)

const style = {
  header: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    padding: '2.5vw 5vw'
  },
  logo: {
    fontSize: '2em'
  },
  navList: {
    display: 'flex',
    flexFlow: 'row'
  },
  navLink: {
    marginLeft: '12px'
  },
  activeLink: {
    color: 'red'
  }
}
// Header.propTypes = {
//   : PropTypes.
// };

export default Header
