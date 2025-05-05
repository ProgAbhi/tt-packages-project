import React from 'react'
import './PackageCard.css'

export const PackageCard = ({url, image, title, days, nights, rating, discountedPrices, originalPrices}) => {
  return (
    
  <div className='cardContainer'>
        <a target="_blank" rel="noreferrer noopener" href={url}>
        <img src={image} alt={title} className='img-class'/></a>
        
        <div className="card-content">
        <h2 className='heading'>{title}</h2>
        <div><span className='span-left border'>{days} Days & {nights}nights</span> 
        <span className='span-right'>{rating} Star Hotels included</span></div>

        <div className='price-row'>
        <h4><span>₹{discountedPrices}/-</span>
        <span className='original'>₹{originalPrices}/-</span>
        <p>per person on twin sharing</p></h4>
        <span className="discount-wrapper">
          <span className="discount-label">{Math.ceil(((originalPrices - discountedPrices)/originalPrices)*100)}% Off</span>
        </span>
       </div>

        <p className='valid'><strong>Validity:</strong> Till 30th Nov 2025 (Booking Validity)</p>
        <p className='cities'><strong>Cities:</strong> Addu City (5D)</p>
        <div className="card-actions">
          <a target="_blank" rel="noreferrer noopener" href={url} className="card-link">View Deal</a>
        <button className='btn'>Check Availability</button>
        </div>
       </div>
  </div>
  )
}

