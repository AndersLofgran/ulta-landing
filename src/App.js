import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Nav from './components/Nav/Nav'
import './App.scss'

import logo from './assets/Ulta_Beauty_logo.png'
import landingImg2 from './assets/landing_pic_2.jpg'
import ultaPropa1 from './assets/ulta_propa_1.jpg'
import ultaDeal1 from './assets/ulta_deal_1.jpg'
import ultaDeal2 from './assets/ulta_deal_2.jpg'

const App = () => {  
  return (
    <div className='app'>
      <div className='header'>
        <img src={logo} alt='Ulta beauty logo'/>
        <div className='header-links'>
          <div>Menu</div>
          <div>Deals</div>
          <div>Stores</div>
          <div>Bag</div>
        </div>
      </div>

      <div className='landing-img'>
        <Carousel />
      </div>

      <div className='landing-img'>
        <img style={{width: '100%'}} src={ultaDeal1} alt=''/>
      </div>

      <div className='landing-nav'>
        <div>Hair</div>
        <div>Nails</div>
        <div>Skin</div>
        <div>Beauty</div>
        <div>Tools</div>
        <div>Gifts</div>
      </div>

      <div className='landing-img'>
        <img style={{height: '300px'}} src={ultaPropa1} alt=''/>
      </div>

      <div className='landing-img'>
        <img className='landing-img-two' src={landingImg2} alt=''/>
        <button>Shop Deals</button>
      </div>

      <div className='landing-img'>
        <img style={{width: '100%'}} src={ultaDeal2} alt=''/>
      </div>

      {/* <Nav /> */}
    </div>
  )
}

export default App