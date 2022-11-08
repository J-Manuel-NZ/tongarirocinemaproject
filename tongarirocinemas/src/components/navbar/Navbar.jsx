import './navbar.css'
import React, { useState } from 'react'
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

// This component will render a menu for both the desktop navbar and mobile navbar
const Menu = () => {
  return (
    <ul className='tc__navbar-container_menu-container'>
      <li className='tc__navbar-container_menu-container_item'><a href="/">Home</a></li>
      <li className='tc__navbar-container_menu-container_item'><a href="/#tc__dateselector">Schedule</a></li>
      <li className='tc__navbar-container_menu-container_item'><a href="/about">About Us</a></li>
      
    
    </ul>
  )
}


// This functional component is the Navigation Bar seen on each page
const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <div className='tc__navbar'>
      <div className='tc__navbar-container'>
        <div className='tc__navbar-container_logo'>
          <h2><a href='/'>LOGO</a></h2>
        </div>
        <div className='tc__navbar-container_menu'>
          <div className='tc__navbar-container_menu-container'>
            <div className='tc__navbar-container_menu-container-menu'>
             <Menu />
            </div>
            <div className='tc__navbar-container_menu-icons'>
              <a href='/staffpos'><FaUserAlt /></a>
              <a href='/staffpos'><FaShoppingCart /></a>
            </div>
          </div>
    {/* Displays the mobile menu */}
          <div className='tc__navbar-mobile_menu'>
        {mobile
        // This checks whether the mobile menu is open and changes the icon from hamburger menu to an X
        ? <RiCloseLine color="#fff" size={27} onClick={() => setMobile(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setMobile(true)} />
        }
        {mobile && (
          <div className='tc__navbar-mobile_menu-container swing-in-top-fwd'>
            <div className='tc__navbar-mobile_menu-container_links'>
              <Menu />
            </div>
          </div> 
        )}
      </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar