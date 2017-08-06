import React from 'react'

const Footer = () => (
  <div style={style.footer}>
    <div style={style.infoContainer}>
      <div style={style.infoDiv}>
        <div style={style.infoHeader}>LOCATION</div>
        <div style={style.infoLine}>
          <a href='https://goo.gl/maps/sGbpVqzp1F42' style={style.infoLine}>395A Toorak Road</a>
        </div>
        <div style={style.infoLine}>
          <a href='https://goo.gl/maps/sGbpVqzp1F42' style={style.infoLine}>South Yarra VIC 3141</a>
        </div>
      </div>
      <div style={style.infoDiv}>
        <div style={style.infoHeader}>CONTACT</div>
        <div style={style.infoLine}>
          <a href='mailto:raelizabeth@gmail.com' style={style.infoLine}>raelizabeth@gmail.com</a>
        </div>
        <div style={style.infoLine}>
          <a href='tel:+61431536778' style={style.infoLine}>+61 431 536 778</a>
        </div>
        <div style={style.infoLine} />
        <div style={style.infoLine}><i style={style.infoLine}>&copy; 2017 RAE Design Studios</i></div>
      </div>
      <div style={style.infoDiv}>
        <div style={style.infoHeader}>FOLLOW</div>
        <div style={style.infoLine} />
        <div style={style.infoLine}>
          <ul style={style.sociconList}>
            <a href='//facebook.com/raelizabeth' title='Follow us on Facebook' style={style.socicon}><li className='socicon socicon-facebook' /></a>
            <a href='//instagram.com/rlzbth' title='Follow us on Instagram' style={style.socicon}><li className='socicon socicon-instagram' /></a>
            <a href='//pinterest.com/rlzbth' title='Follow us on Pinterest' style={style.socicon}><li className='socicon socicon-pinterest' /></a>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const style = {
  footer: {
    padding: '5vw',
    width: '100%'
  },
  infoContainer: {
    display: 'flex',
    flexFlow: 'row',
    margin: '0 auto'
  },
  infoDiv: {
    width: '33.3333%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  },
  infoHeader: {
    height: '32px',
    fontFamily: 'Raleway, sans-serif'
  },
  infoLine: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    fontFamily: 'Yrsa, serif',
    fontSize: '1em'
  },
  sociconList: {
    display: 'flex',
    flexFlow: 'row'
  },
  socicon: {
    fontSize: '1.25em',
    margin: '0px 8px'
  }
}

export default Footer
