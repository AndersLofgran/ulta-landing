import React, { useState, useEffect } from 'react'
import './Carousel.scss'

import upperCarouselImg1 from '../../assets/Images/CarouselImgs/upper_carousel_img_1.jpg'
import upperCarouselImg2 from '../../assets/Images/CarouselImgs/upper_carousel_img_2.jpg'
import upperCarouselImg3 from '../../assets/Images/CarouselImgs/upper_carousel_img_3.jpg'
import upperCarouselImg4 from '../../assets/Images/CarouselImgs/upper_carousel_img_4.jpg'
import upperCarouselImg5 from '../../assets/Images/CarouselImgs/upper_carousel_img_5.jpg'

const UpperCarousel = () => {
  let upperCarouselImgs = [upperCarouselImg1, upperCarouselImg2, upperCarouselImg3, upperCarouselImg4, upperCarouselImg5]
  const [upperImgNum, setUpperImgNum] = useState(0)
  
  // cycles carousel images
  useEffect(() => {
    setTimeout(() => {
      if(upperImgNum < upperCarouselImgs.length - 1) setUpperImgNum(upperImgNum => ++upperImgNum)
      else setUpperImgNum(0)
    }, 5000);
  }, [upperImgNum])
  
  return (
    <div className='carousel-wrapper'>
      <img src={upperCarouselImgs[upperImgNum]} className='carousel-img'/>
      <button>Shop Bestsellers</button>
    </div>
  )
}

export default UpperCarousel