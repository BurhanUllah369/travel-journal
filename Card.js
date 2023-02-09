import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

function Card({img,location,description,date,title}) {
  return (
    <div className='card'>
        <div className="img">
            <img src={img} alt="" />
        </div>

        <div className="details">
            <div className="location-container">
            <p className='location'><FaMapMarkerAlt className='icon'/>{location}</p>
            <p className='maps'>View on Google Maps</p>
            </div>
            <h1>{title}</h1>
            <h2 className='date'>{date}</h2>
            <p className='description'>{description}</p>
        </div>
    </div>
  )
}

export default Card
