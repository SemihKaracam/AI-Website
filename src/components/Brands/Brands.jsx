import React from 'react'
import "./brands.css"
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

const Brands = () => {
  return (
    <div className='brands'>
        <div className='brand'><img src={google} alt="" /></div>
        <div className='brand'><img src={slack} alt="" /></div>
        <div className='brand'><img src={atlassian} alt="" /></div>
        <div className='brand'><img src={dropbox} alt="" /></div>
        <div className='brand'><img src={shopify} alt="" /></div>
    </div>
  )
}

export default Brands