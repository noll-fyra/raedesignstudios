import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../header/Header'
import Home from '../home/Home'
import Work from '../work/Work'
import Project from '../work/Project'
import About from '../about/About'
import SignIn from '../signin/SignIn'
import Client from '../client/Client'
// import Section from '../client/Section'
import Footer from '../footer/Footer'
import { auth } from '../../utilities/firebase'
import constants from '../../constants/constants'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hideFooter: false,
      user: null
    }
    this.handleHideFooter = this.handleHideFooter.bind(this)
  }

  componentDidMount () {
    auth.onAuthStateChanged(user => {
      if (user) {
    // User is signed in.
        this.setState({ user: user })
      } else {
    // User is signed out.
        this.setState({ user: null })
      }
    })
  }

  handleHideFooter (bool) {
    this.setState({
      hideFooter: bool
    })
  }
  render () {
    return (
      <Router>
        <div style={style.app}>
          <Header user={this.state.user} />
          <Route exact path='/' render={() => <Home handleHideFooter={this.handleHideFooter} />} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/work/:name' component={Project} />
          <Route path='/about' component={About} />
          <Route path='/signin' render={() => <SignIn auth={auth} user={this.state.user} handleHideFooter={this.handleHideFooter} />} />
          <Route exact path='/client' component={Client} />
          {/* <Route path='/client/:name/:id' component={Section} /> */}
          {!this.state.hideFooter && <Footer /> }
        </div>
      </Router>
    )
  }
}

const style = {
  app: {
    paddingTop: constants.headerHeight
  }
}

export default App
