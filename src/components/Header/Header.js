import React from 'react'
import './Header.scss'

import logo from '../../assets/Ulta_Beauty_logo.png'

const Header = () => {
  return (
      <div className='header'>
        <img src={logo} alt='Ulta beauty logo'/>
        <div className='header-links'>
          <div>Menu</div>
          <div>Deals</div>
          <div>Stores</div>
          <div>Bag</div>
        </div>

        <div className='search-bar'>
          <input type='text' placeholder='Search' />
        </div>
      </div>
  )
}

export default Header