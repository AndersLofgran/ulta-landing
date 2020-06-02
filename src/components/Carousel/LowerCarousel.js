import React, { useState, useEffect } from 'react'
import CrossfadeImage from 'react-crossfade-image'
import './Carousel.scss'

import lowerCarouselImg1 from '../../assets/lower_carousel_img_1.jpg'
import lowerCarouselImg2 from '../../assets/lower_carousel_img_2.jpg'
import lowerCarouselImg3 from '../../assets/lower_carousel_img_3.jpg'
import lowerCarouselImg4 from '../../assets/lower_carousel_img_4.jpg'
import lowerCarouselImg5 from '../../assets/lower_carousel_img_5.jpg'

const LowerCarousel = () => {
  let lowerCarouselImgs = [lowerCarouselImg1, lowerCarouselImg2, lowerCarouselImg3, lowerCarouselImg4, lowerCarouselImg5]
  const [lowerImgNum, setLowerImgNum] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      if(lowerImgNum < lowerCarouselImgs.length - 1) setLowerImgNum(lowerImgNum => ++lowerImgNum)
      else setLowerImgNum(0)
    }, 6000);
  })
  
  return (
    <div className='landing-img' >
      <CrossfadeImage 
        src={lowerCarouselImgs[lowerImgNum]}
        delay='3000'
        duration='800'
        style={{
          height: '400px',
          width: '100%'
        }} />
      <button>Shop Deals</button>
    </div>
  )
}

export default LowerCarousel