import React, { Component } from 'react'
import SectionCard from './SectionCard'
import Section from './Section'
import constants from '../../constants/constants'

const sections = [
  {name: 'master schedule', id: 1, type: 'master schedule'},
  {name: 'gant chart', id: 2, type: 'gant chart'},
  {name: 'floor plans', id: 3, type: 'floor plans'},
  {name: 'photos', id: 4, type: 'photos'},
  {name: 'invoices', id: 5, type: 'invoices'},
  {name: 'boards/inspiration', id: 6, type: 'boards/inspiration'}
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
