import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MasterSchedule from './MasterSchedule'
import constants from '../../constants/constants'
import capitalizeWords from '../../utilities/format'

class Section extends Component {

  chooseSection (type) {
    switch (type) {
      case 'master schedule':
        return <MasterSchedule />
      default:
        return <div>default</div>
    }
  }
  render () {
    return (
      <div style={style.section}>
        <div style={style.title}>
          <span onClick={() => this.props.handleSection(false)} style={{color: 'lightGrey', cursor: 'pointer'}}>&lt;&lt; &nbsp;</span>
          {capitalizeWords(this.props.section.name)}
        </div>
        {this.chooseSection(this.props.section.type)}
      </div>
    )
  }
}

Section.propTypes = {
  section: PropTypes.object.isRequired
}

const style = {
  section: {
    width: '100%',
    height: '100%',
    paddingLeft: constants.sectionMargin
  },
  title: {
    height: constants.headerHeight / 2,
    fontSize: '2em',
    fontWeight: 700
  }
}

export default Section
