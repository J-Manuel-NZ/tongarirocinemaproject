import './contactpage.css'
import React from 'react'
import { Footer, Navbar } from '../../components/component_index'
import { FaMapMarkedAlt, FaBuilding, FaEnvelope, FaPhone} from 'react-icons/fa' 

const ContactPage = () => {
  return (
    <div className='tc__contactpage'>
      <Navbar />
      <div className='tc__contactpage-container'>
        <h1>Contact Us</h1>
        <div className='tc__contactpage-container_content'>
          <div className='tc__contactpage-container_content-details'>
            <div className="tc__contactpage-container_content-details_name">
              <FaBuilding />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="tc__contactpage-container_content-details_address">
              <FaMapMarkedAlt />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="tc__contactpage-container_content-details_email">
              <FaEnvelope />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="tc__contactpage-container_content-details_number">
              <FaPhone />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className='tc__contactpage-container_content-contactform'>
            <h3>Send us a message!</h3>
            <form>
              <input type='text' placeholder='name'/>
              <input type="text" placeholder='email' />
              <textarea type="text" placeholder='message' />
              <button type="submit" onClick={(e) => {e.preventDefault()}}>Send</button>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ContactPage