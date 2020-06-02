import React from 'react'
import Header from './components/Header/Header'
import UpperCarousel from './components/Carousel/UpperCarousel'
import LowerCarousel from './components/Carousel/LowerCarousel'
import Nav from './components/Nav/Nav'
import './App.scss'

import ultaPropa1 from './assets/ulta_propa_1.jpg'
import ultaDeal1 from './assets/ulta_deal_1.jpg'
import ultaDeal2 from './assets/ulta_deal_2.jpg'
import ultaDeal3 from './assets/ulta_deal_3.jpg'

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
      <div className='product-section' >
        <h2>Trending Now</h2>
      </div>
      <div className='product-section' >
        <h2>Summer Favorites</h2>
      </div>
    </div>
  )
}

export default App