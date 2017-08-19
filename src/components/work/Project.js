import React, { Component } from 'react'

class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project: {}
    }
  }
  render () {
    return (
      <div>
        {this.state.project.name || this.props.match.params.name}
      </div>
    )
  }

}

export default Project
