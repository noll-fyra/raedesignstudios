import React from 'react'
import PropTypes from 'prop-types'
import constants from '../../constants/constants'

const SectionCard = ({section, index, handleSection}) => (
  <div style={style.section} onClick={() => handleSection(true, index)}>
    {section.name}
    {section.id}
  </div>
)

const style = {
  section: {
    width: `calc((100vw - ${constants.paddingLeft} - 2 * ${constants.sectionMargin} - ${constants.paddingRight}) / 3)`,
    height: `calc((100vh - 80px - 2 * ${constants.sectionMargin}) / 2)`,
    marginLeft: constants.sectionMargin,
    marginBottom: constants.sectionMargin,
    border: '1px solid red'
  }
}

SectionCard.propTypes = {
  section: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleSection: PropTypes.func.isRequired
}

export default SectionCard
