import React from 'react'
import FooterNav from '../Nav/FooterNav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare, faPinterestSquare} from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <text>Connect with Us</text>
        <div className='footer-sm-icons'>
          <FontAwesomeIcon icon={faFacebookSquare}/>
          <FontAwesomeIcon icon={faInstagramSquare}/>
          <FontAwesomeIcon icon={faTwitterSquare}/>
          <FontAwesomeIcon icon={faYoutubeSquare}/>
          <FontAwesomeIcon icon={faPinterestSquare}/>
        </div>
      </div>
      <FooterNav />
      <div style={{fontSize: '12px', marginTop: '40px'}}>Terms & Conditions | Privacy Policy | Interest Based Ads</div>
      <div style={{fontSize: '10px'}}>Copyright 2000-2020 Ulta Beauty, Inc.</div>
    </div>
  )
}

export default Footer