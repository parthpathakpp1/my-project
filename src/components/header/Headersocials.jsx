import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
const parasocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/parth-pathak-69626b249/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/parthpathakpp1' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default parasocials