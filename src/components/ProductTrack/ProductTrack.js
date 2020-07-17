import React from 'react';
import productData from '../../assets/Data/productData'
import './ProductTrack.scss'

// fills tracks
let productTracks = productData.titles.map((title, i) => {

  // fills products within respective track
  let products = productData.products.map(product => {
    if(product.track === i + 1){
      return (
        <div className='track-item'>
          <div className='product-img-container'>
            <img src={product.imgURL} alt=''/>
          </div>
          <div className='product-text-container'>
            <div>
              <div className='product-brand'>{product.brand}</div>
              <div className='product-name'>{product.name}</div>
            </div>
            <strong>${Number(product.price).toFixed(2)}</strong>
          </div>
        </div>
      )
    }
  })
  
  return (
    <>
      <h2>{title}</h2>
      <div className='img-divider'></div>
      <div className='product-track' >
        {products}
      </div>
    </>
  )
})


const ProductTrack = () => {
  
  return (
    <div className='products' >
      {productTracks}
    </div>
  )
}
 
export default ProductTrack;