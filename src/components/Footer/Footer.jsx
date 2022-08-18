import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <h3 className='footer-title gradient_text'>Do you want to step in to the future before others</h3>
            <button className='footer-btn'>Request Early Access</button>
            <div className='footer-info-container'>
                <div className='footer-info'>
                    <div className='footer-logo'>
                        <h3>GPT-3</h3>
                        <p>Crechterwoord K12 182 DK  <br />Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className='footer-lists'>
                        <ul className='footer-list'>
                            <li>Links</li>
                            <li><a href="">Overons</a></li>
                            <li><a href="">Social Media</a></li>
                            <li><a href="">Counters</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <ul className='footer-list'>
                            <li>Company</li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <ul className='footer-list'>
                            <li>Get in touch</li>
                            <li><a href="">Crechterwoord K12 <br /> 182 DK Alknjkcb</a></li>
                            <li><a href="">085-132567</a></li>
                            <li><a href="">info@payme.net</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='rights-text'>@ 2021 GPT-3. All rights reserved.</p>
        </div>
    )
}

export default Footer