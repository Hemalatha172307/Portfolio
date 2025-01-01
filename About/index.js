import React from 'react'
import './index.css'
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import { FaSkype } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import image from '../../assets/home.png'
const About = () =>  {
  return (
    <div className='home-section'>
      <div className='text-section'>
        <h4>FrontEnd Developer</h4>
        <div className='text-container'>
          <h1>Hemalatha Arjee</h1>
          <p>I'm a FrontEnd Developer with 10 years of Experience</p>
          <button className='btn'>Hire Me</button>
          <button className='btn1'>View Projects</button>
        </div>
        <div className='image-container'>
            <img src={image} alt="home-image"/>
        </div>
        <div className='share'>
          <p className='paragraph'>Check out my:</p>
            <div className='social'>
              <button><FaFacebookF /></button>
              <button><FaTwitter/></button>
              <button><FaLinkedinIn /></button>
              <button><FaSkype /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
