import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../header/Header'
import Home from '../home/Home'
// import Work from '../work/Work'
import About from '../about/About'
import SignIn from '../signin/SignIn'
import Footer from '../footer/Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          {/* <Route path='/work' component={Home} /> */}
          <Route path='/about' component={About} />
          <Route path='/signin' component={SignIn} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
