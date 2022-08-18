import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import robot from "../../assets/ai.png"
const Header = () => {
  return (
    <div className='header'>
        <div className='header-info'>
            <h3 className='header-title gradient_text'>Let's Build Something amazing with GPT-3 OpenAI</h3>
            <p className='header-description'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <div className='header-input-container'>
                <input placeholder="Your Email Address" />
                <button>Get Started</button>
            </div>
            <div className='people-img'>
                <img src={people} alt="" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>

        </div>
        <div className='header-img'>
            <img src={robot} alt="" />
        </div>
    </div>
  )
}

export default Header