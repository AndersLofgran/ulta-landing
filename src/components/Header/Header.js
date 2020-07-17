import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faSearch, faStoreAlt, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'


const Header = () => {
  return (
      <div className='header-links'>
        <FontAwesomeIcon icon={faBars}/>
        <FontAwesomeIcon icon={faSearch}/>
        <FontAwesomeIcon icon={faStoreAlt}/>
        <FontAwesomeIcon icon={faShoppingBag}/>
      </div>

      // {/* <div className='search-bar'>
      //   <input type='text' placeholder='Search' />
      // </div> */}
  )
}

export default Header