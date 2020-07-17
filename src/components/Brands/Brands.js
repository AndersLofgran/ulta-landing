import React from 'react'
import dermalogica from '../../assets/Images/Brands/dermalogica.jpg'
import esteeLauder from '../../assets/Images/Brands/estee-lauder.jpg'
import itCosmetics from '../../assets/Images/Brands/it-cosmetics.jpg'
import mac from '../../assets/Images/Brands/mac.jpg'
import marioBadescu from '../../assets/Images/Brands/mario-badescu.jpg'
import murad from '../../assets/Images/Brands/murad.jpg'
import no7 from '../../assets/Images/Brands/no7.jpg'
import pixi from '../../assets/Images/Brands/pixi.jpg'
import redken from '../../assets/Images/Brands/redken.jpg'
import tooFaced from '../../assets/Images/Brands/too-faced.jpg'
import urbanDecay from '../../assets/Images/Brands/urbandecay.jpg'
import './Brands.scss'

const Brands = () => {
  return (
    <div className='brands'>
      <div>- Featured Brands -</div>
      <img src={dermalogica}  className='brand-img'/>
      <img src={esteeLauder}  className='brand-img'/>
      <img src={itCosmetics}  className='brand-img'/>
      <img src={mac}          className='brand-img'/>
      <img src={marioBadescu} className='brand-img'/>
      <img src={murad}        className='brand-img'/>
      <img src={no7}          className='brand-img'/>
      <img src={pixi}         className='brand-img'/>
      <img src={redken}       className='brand-img'/>
      <img src={tooFaced}     className='brand-img'/>
      <img src={urbanDecay}     className='brand-img'/>
    </div>
  )
}
 
export default Brands;