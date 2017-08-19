import React, { Component } from 'react'
import SectionCard from './SectionCard'
import Section from './Section'
import constants from '../../constants/constants'

const sections = [
  {name: 'master schedule', id: 1},
  {name: 'gant chart', id: 2},
  {name: 'floor plans', id: 3},
  {name: 'photos', id: 4},
  {name: 'invoices', id: 5},
  {name: 'boards/inspiration', id: 6}
]

class Client extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sectionActive: false,
      sectionIndex: 0
    }
    this.handleSection = this.handleSection.bind(this)
  }

  handleSection (bool, index = 0) {
    this.setState({
      sectionActive: bool,
      sectionIndex: index
    })
  }

  render () {
    return (
      <div style={style.client}>
        {this.state.sectionActive
          ? <Section section={sections[this.state.sectionIndex]} handleSection={this.handleSection} />
          : sections.map((section, index) => {
            return <SectionCard key={section.id} index={index} section={section} handleSection={this.handleSection} />
          })
        }
      </div>
    )
  }
}

const style = {
  client: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    paddingLeft: `calc(${constants.paddingLeft} - ${constants.sectionMargin})`,
    paddingRight: constants.paddingRight
  }
}

export default Client
