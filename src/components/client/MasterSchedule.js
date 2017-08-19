import React, { Component } from 'react'
import constants from '../../constants/constants'
import capitalizeWords from '../../utilities/format'

class MasterSchedule extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 0
    }
    this.handleTab = this.handleTab.bind(this)
  }

  handleTab (index) {
    this.setState({ tab: index })
  }
  render () {
    return (
      <div style={style.masterSchedule}>
        <div style={style.scheduleContent}>{constants.tabs[this.state.tab]}</div>
        <ul style={style.tabList}>
          {constants.tabs.map((tab, index) => {
            return <li style={style.tab} onClick={() => { this.handleTab(index) }}><div>{capitalizeWords(tab)}</div></li>
          })}
        </ul>
      </div>
    )
  }
}

const style = {
  masterSchedule: {
    width: '100%',
    height: '100%'
  },
  scheduleContent: {
    width: '100%',
    height: '70vh',
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabList: {
    width: '100%',
    height: `calc(20vh - ${constants.headerHeight})`,
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between'
  },
  tab: {
    width: `${100 / constants.tabs.length}%`,
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 12px'
  }

}

export default MasterSchedule
