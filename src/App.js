import React from 'react'
import Header from './components/Header/Header'
import UpperCarousel from './components/Carousel/UpperCarousel'
import LowerCarousel from './components/Carousel/LowerCarousel'
import LandingNav from './components/Nav/LandingNav'
// import FooterNav from './components/Nav/FooterNav'
import Brands from './components/Brands/Brands'
import ProductTrack from './components/ProductTrack/ProductTrack'
import Footer from './components/Footer/Footer'

import logo from './assets/Images/Ulta_Beauty_logo.png'
import ultaPropa1 from './assets/Images/Promotions/ulta_propa_1.jpg'
import ultaDeal1 from './assets/Images/Deals/ulta_deal_1.jpg'
import ultaDeal2 from './assets/Images/Deals/ulta_deal_2.jpg'
import ultaDeal3 from './assets/Images/Deals/ulta_deal_3.jpg'
import './App.scss'

const App = () => {
  const divider = <div className='img-divider'></div>
  
  return (
    <div className='app'>
      <div className='header'>
        <img src={logo} alt='Ulta beauty logo'/>
      </div>
      <Header />
      <UpperCarousel />
      {divider}
      <LandingNav />
      {divider}
      <img className='landing-img' src={ultaPropa1} alt='' style={{height: '300px'}}/>
      {divider}
      <img className='landing-img' src={ultaDeal1} alt=''/>
      {divider}
      <Brands />
      {divider}
      <LowerCarousel />
      <ProductTrack />
      <img className='landing-img' src={ultaDeal2} alt=''/>
      {divider}
      <img className='landing-img' src={ultaDeal3} alt=''/>
      {divider}
      <Footer />
    </div>
  )
}

export default App