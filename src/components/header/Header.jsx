import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/myphoto2bg.png'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Parth Pathak</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <Headersocials />
        <div className='me'>
          <img className='my_img' src={ME} alt="" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header