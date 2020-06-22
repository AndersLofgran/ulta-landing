import React from 'react'
import Header from './components/Header/Header'
import UpperCarousel from './components/Carousel/UpperCarousel'
import LowerCarousel from './components/Carousel/LowerCarousel'
import Nav from './components/Nav/Nav'
import ProductTrack from './components/ProductTrack/ProductTrack'

import logo from './assets/Images/Ulta_Beauty_logo.png'
import ultaPropa1 from './assets/Images/Promotions/ulta_propa_1.jpg'
import ultaDeal1 from './assets/Images/Deals/ulta_deal_1.jpg'
import ultaDeal2 from './assets/Images/Deals/ulta_deal_2.jpg'
import ultaDeal3 from './assets/Images/Deals/ulta_deal_3.jpg'
import './App.scss'

const App = () => {  
  return (
    <div className='app'>
      <div className='header'>
        <img src={logo} alt='Ulta beauty logo'/>
      </div>
      <Header />
      <UpperCarousel />
      <Nav />
      <img className='landing-img' src={ultaPropa1} alt='' style={{height: '300px'}}/>
      <img className='landing-img' src={ultaDeal1} alt=''/>
      <LowerCarousel />
      <ProductTrack />
      <img className='landing-img' src={ultaDeal2} alt=''/>
      <img className='landing-img' src={ultaDeal3} alt=''/>
    </div>
  )
}

export default App