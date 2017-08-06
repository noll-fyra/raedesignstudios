import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../header/Header'
import Home from '../home/Home'
import Work from '../work/Work'
import About from '../about/About'
import SignIn from '../signin/SignIn'
import Footer from '../footer/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      homeActive: false
    }
    this.handleHomeActive = this.handleHomeActive.bind(this)
  }

  handleHomeActive (bool) {
    this.setState({
      homeActive: bool
    })
  }
  render () {
    return (
      <Router>
        <div>
          {!this.state.homeActive && <Header /> }
          <Route exact path='/' render={() => <Home handleHomeActive={this.handleHomeActive} />} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={SignIn} />
          {!this.state.homeActive && <Footer /> }
        </div>
      </Router>
    )
  }
}

export default App
