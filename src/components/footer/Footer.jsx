import React from 'react'
import './Footer.css'
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Parth</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><AiOutlineFacebook /></a>
        <a href='https://www.linkedin.com/in/parth-pathak-69626b249/'><AiOutlineLinkedin /></a>
        <a href='https://twitter.com'><AiFillTwitterSquare /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Parth Pathak. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer