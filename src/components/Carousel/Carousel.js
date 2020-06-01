import React, { useState, useEffect } from 'react'
import './Carousel.scss'

import upperCarouselImg1 from '../../assets/upper_carousel_img_1.jpg'
import upperCarouselImg2 from '../../assets/upper_carousel_img_2.jpg'

const Carousel = () => {
  let upperCarouselImgs = [upperCarouselImg1, upperCarouselImg2]
  const [upperImgNum, setUpperImgNum] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      if(upperImgNum < upperCarouselImgs.length - 1) setUpperImgNum(upperImgNum => upperImgNum += 1)
      else setUpperImgNum(0)
    }, 5000);
  })
  
  return (
    <div className='landing-img' >
      <div className='search-bar'>
        <input type='text' placeholder='Search' />
      </div>
      <img src={upperCarouselImgs[upperImgNum]} alt=''/>
      <button>Shop Bestsellers</button>
    </div>
  )
}

export default Carousel