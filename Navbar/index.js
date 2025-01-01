import React from 'react'
import { FaBars } from "react-icons/fa6";
import './index.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <h1>H<span>emalatha</span></h1>
      </div>
      <ul className='nav-menu'>
        <li className='active'>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
      <div className='nav-btn'>
        <button>Connect With Me</button>
        <FaBars className='menu-bar' />
      </div>
      
    </nav>
  )
}

export default Navbar
