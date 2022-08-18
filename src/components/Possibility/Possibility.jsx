import React from 'react'
import "./possibility.css"
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='possibility'>
      <div className='possibility-img'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='possibility-info'>
        <h6 className='possibility-subtext'>Request Early Access to Get Started</h6>
        <h3 className='gradient_text'>The possibilities are beyond your imagination</h3>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h6 className='possibility-subtext'>Request Early Access to Get Started</h6>

      </div>
    </div>
  )
}

export default Possibility