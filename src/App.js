import React from 'react'
import Header from './components/Header/Header'
import UpperCarousel from './components/Carousel/UpperCarousel'
import LowerCarousel from './components/Carousel/LowerCarousel'
import Nav from './components/Nav/Nav'
import ProductTrack from './components/ProductTrack/ProductTrack';
import './App.scss'

import ultaPropa1 from './assets/Promotions/ulta_propa_1.jpg'
import ultaDeal1 from './assets/Deals/ulta_deal_1.jpg'
import ultaDeal2 from './assets/Deals/ulta_deal_2.jpg'
import ultaDeal3 from './assets/Deals/ulta_deal_3.jpg'

const App = () => {  
  return (
    <div className='app'>
      <Header />
      <UpperCarousel />
      <img className='landing-img' src={ultaDeal1} alt=''/>
      <Nav />
      <img className='landing-img' src={ultaPropa1} alt='' style={{height: '300px'}}/>
      <LowerCarousel />
      <img className='landing-img' src={ultaDeal2} alt=''/>
      <img className='landing-img' src={ultaDeal3} alt=''/>
      <ProductTrack />
    </div>
  )
}

export default App