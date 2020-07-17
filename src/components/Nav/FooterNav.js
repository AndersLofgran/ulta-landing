import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

const FooterNav = () => {
  let linkNames = ['Stores', 'Ultamate Rewards', 'Orders', 'Contact Us', 'Get Email & Text Alerts']

  let navLinks = linkNames.map((category, i) => {
    return (
      <div key={i}>
        <strong>{category}</strong>
        <FontAwesomeIcon icon={faAngleRight} className='nav-link-arrow'/>
      </div>
    )
  })
  

  return (
    <div className='nav'>
      {navLinks}
    </div>
  )
}

export default FooterNav