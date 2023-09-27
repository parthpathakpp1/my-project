import React from 'react'
import './About.css'
import ME from '../../assets/myphoto.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year Experience</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Hello, I'm Parth Pathak. I've been working in web development for the past year and have completed numerous projects. I possess a strong proficiency in HTML, CSS, JavaScript, as well as frameworks such as React, Bootstrap, Node.js, and MongoDB. I am a full-stack developer.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About
