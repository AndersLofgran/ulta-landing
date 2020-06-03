import React from 'react';
import productData from './productData'
import './ProductTrack.scss'

console.log("productData", productData)
console.log("productData", productData.titles)
console.log("productData", productData.products)

let productTracks = productData.titles.map((title, i) => {
  let products = productData.products.filter(product => {
    if(product.track === i){
      return (
        <div className='track-item' >
          <div>{product.img}</div>
          <div>{product.rating}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.promotionText}</div>
        </div>
      )
    }
  })
  
  return (
    <>
      <h2>{title[i]}</h2>
      <div className='product-track' >
        {products}
      </div>
    </>
  )
})



const ProductTrack = () => {
  
  return (
    <div className='product-section' >
      {productTracks}
    </div>
  )
}
 
export default ProductTrack;