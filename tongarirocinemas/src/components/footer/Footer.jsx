import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <footer className='tc__footer'>
      <div className='tc__footer-container'>
        <div className='tc__footer-container_logo'>
          <h2><a href='/'>LOGO</a></h2>
        </div>

        <div className='tc__footer-container_links'>
          <ul>
            <li><a>Privacy Policy</a></li>
            <li><a href='/contact'>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer