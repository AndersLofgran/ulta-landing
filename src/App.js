import React from 'react'
import Nav from './components/Nav/Nav'
import Carousel from './components/Carousel/Carousel'
import logo from './assets/Ulta_Beauty_logo.png'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <img src={logo} alt='Ulta beauty logo'/>
        <div className='header-links'>
          <div>Shop</div>
          <div>Deals</div>
          <div>Stores</div>
          <div>Bag</div>
        </div>
      </div>
      {/* <Nav /> */}
      <Carousel />
    </div>
  )
}

export default App