import React from 'react'
import './Header.scss'


const Header = () => {
  return (
    <div className='header-sticky'>
      <div className='header-links'>
        <div>Menu</div>
        <div>Search</div>
        <div>Stores</div>
        <div>Bag</div>
      </div>

      {/* <div className='search-bar'>
        <input type='text' placeholder='Search' />
      </div> */}
    </div>
  )
}

export default Header