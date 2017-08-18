import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { auth } from '../../utilities/firebase'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isClient: true,
      error: false,
      message: ''
    }
    this.handleIsClient = this.handleIsClient.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  componentDidMount () {
    this.props.handleHideFooter(true)
  }

  componentWillUnmount () {
    this.props.handleHideFooter(false)
  }

  handleIsClient (bool) {
    this.setState({ isClient: bool })
  }

  handleChange (e, category) {
    let obj = {}
    obj[category] = e.target.value
    obj['error'] = false
    this.setState(obj)
  }

  handleSignIn () {
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
      console.log(error)
      this.setState({
        error: true,
        message: error.message
      })
    })
  }

  render () {
    return (
      <div style={style.signinContainer}>
        {this.props.user ? <Redirect to='/client' /> : (
          <div style={style.signin}>
            <div style={style.field}>
              <div style={style.name} />
              <div style={this.state.isClient ? {...style.clientAdmin, ...style.isClient} : style.clientAdmin} onClick={() => this.handleIsClient(true)}>Client</div>
              <div style={this.state.isClient ? style.clientAdmin : {...style.clientAdmin, ...style.isClient}} onClick={() => this.handleIsClient(false)}>Admin</div>
            </div>
            <div style={style.field}>
              <div style={style.name}>Email</div>
              <div>
                <input
                  type='email'
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e, 'email')}
                  style={style.input}
                />
              </div>
            </div>
            <div style={style.field}>
              <div style={style.name}>Password</div>
              <div>
                <input
                  type='password'
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e, 'password')}
                  style={style.input}
                />
              </div>
            </div>
            <div style={style.field}>
              <div style={style.name} />
              <div style={{...style.input, ...style.button}} onClick={this.handleSignIn}>
            Sign in
          </div>
            </div>
            {this.state.error &&
              <div style={style.field}>
                <div style={style.name} />
                <div style={style.error}>
                  {this.state.message}
                </div>
              </div>
            }
          </div>
        )}
      </div>
    )
  }
}

SignIn.propTypes = {
  auth: PropTypes.func.isRequired,
  user: PropTypes.object,
  handleHideFooter: PropTypes.func.isRequired
}

const style = {
  signinContainer: {
    padding: '0 5vw'
  },
  signin: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  field: {
    display: 'flex',
    flexFlow: 'row',
    margin: '4px'
  },
  clientAdmin: {
    width: '180px',
    border: '1px solid lightGrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.25em',
    padding: '4px',
    color: 'lightGrey',
    cursor: 'pointer'
  },
  isClient: {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none'
  },
  name: {
    width: '120px',
    fontSize: '1.25em',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    width: '360px',
    fontSize: '1.25em',
    padding: '8px'
  },
  button: {
    color: 'red',
    border: '2px solid black',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    width: '360px',
    color: 'red',
    padding: '4px',
    fontSize: '1.25em'
  }
}

export default SignIn
