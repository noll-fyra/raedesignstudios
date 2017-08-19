import React, { Component } from 'react'

class Section extends Component {

  render () {
    return (
      <div>
        <button onClick={() => this.props.handleSection(false)}>go back</button>
        {JSON.stringify(this.props.section)}
      </div>
    )
  }

}

export default Section
