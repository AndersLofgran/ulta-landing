import React, { useState, useEffect } from 'react'
import './Carousel.scss'

import lowerCarouselImg1 from '../../assets/Images/CarouselImgs/lower_carousel_img_1.jpg'
import lowerCarouselImg2 from '../../assets/Images/CarouselImgs/lower_carousel_img_2.jpg'
import lowerCarouselImg3 from '../../assets/Images/CarouselImgs/lower_carousel_img_3.jpg'
import lowerCarouselImg4 from '../../assets/Images/CarouselImgs/lower_carousel_img_4.jpg'
import lowerCarouselImg5 from '../../assets/Images/CarouselImgs/lower_carousel_img_5.jpg'

const LowerCarousel = () => {
  let lowerCarouselImgs = [lowerCarouselImg1, lowerCarouselImg2, lowerCarouselImg3, lowerCarouselImg4, lowerCarouselImg5]
  const [lowerImgNum, setLowerImgNum] = useState(0)
  
  //cycles carousel images
  useEffect(() => {
    setTimeout(() => {
      if(lowerImgNum < lowerCarouselImgs.length - 1) setLowerImgNum(lowerImgNum => ++lowerImgNum)
      else setLowerImgNum(0)
    }, 5000);
  }, [lowerImgNum])
  
  return (
    <div className='carousel-wrapper'>
      <img src={lowerCarouselImgs[lowerImgNum]} className='carousel-img'/>
      <button style={{left: 'calc(50vw - 82px)'}}>Shop Deals</button>
    </div>
  )
}

export default LowerCarousel