import React, { useState, useEffect } from 'react'
import CrossfadeImage from 'react-crossfade-image'
import './Carousel.scss'

import upperCarouselImg1 from '../../assets/Images/CarouselImgs/upper_carousel_img_1.jpg'
import upperCarouselImg2 from '../../assets/Images/CarouselImgs/upper_carousel_img_2.jpg'
import upperCarouselImg3 from '../../assets/Images/CarouselImgs/upper_carousel_img_3.jpg'
import upperCarouselImg4 from '../../assets/Images/CarouselImgs/upper_carousel_img_4.jpg'
import upperCarouselImg5 from '../../assets/Images/CarouselImgs/upper_carousel_img_5.jpg'

const UpperCarousel = () => {
  let upperCarouselImgs = [upperCarouselImg1, upperCarouselImg2, upperCarouselImg3, upperCarouselImg4, upperCarouselImg5]
  const [upperImgNum, setUpperImgNum] = useState(0)
  
  //cycles carousel images
  useEffect(() => {
    setTimeout(() => {
      if(upperImgNum < upperCarouselImgs.length - 1) setUpperImgNum(upperImgNum => ++upperImgNum)
      else setUpperImgNum(0)
    }, 6000);
  })
  
  return (
    <div className='landing-img' >
      <CrossfadeImage 
        src={upperCarouselImgs[upperImgNum]}
        duration={800}
        style={{
          height: '400px',
          width: 'initial'
        }} />
      <button>Shop Bestsellers</button>
    </div>
  )
}

export default UpperCarousel