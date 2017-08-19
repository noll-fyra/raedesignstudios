import React from 'react'
import PropTypes from 'prop-types'
import constants from '../../constants/constants'
import capitalizeWords from '../../utilities/format'

const SectionCard = ({section, index, handleSection}) => (
  <div style={style.section} onClick={() => handleSection(true, index)}>
    <div style={style.name}>{capitalizeWords(section.name)}</div>
  </div>
)

const style = {
  section: {
    width: `calc((100vw - ${constants.paddingLeft} - 2 * ${constants.sectionMargin} - ${constants.paddingRight}) / 3)`,
    height: `calc((100vh - 80px - 2 * ${constants.sectionMargin}) / 2)`,
    marginLeft: constants.sectionMargin,
    marginBottom: constants.sectionMargin,
    border: '1px solid red',
    display: 'flex',
    alignItems: 'flex-end'
  },
  name: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

SectionCard.propTypes = {
  section: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleSection: PropTypes.func.isRequired
}

export default SectionCard
