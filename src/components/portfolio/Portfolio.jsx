import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Ecommerce Website</h3>
          <div className='.portfolio__item-cta'>
            <a href='https://github.com/parthpathakpp1/mern-ecommerce-application' target='_blank' className='btn'>GitHub</a>
            <a href='https://clumsy-lime-belt.cyclic.cloud/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

         <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Ecommerce Website</h3>
          <div className='.portfolio__item-cta'>
            <a href='https://github.com/parthpathakpp1/mern-ecommerce-application' target='_blank' className='btn'>GitHub</a>
            <a href='https://clumsy-lime-belt.cyclic.cloud/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Fitness Website</h3>
          <div className='.portfolio__item-cta'>
            <a href='https://github.com/parthpathakpp1/Fitness-React-Website' target='_blank' className='btn'>GitHub</a>
            <a href='https://fitclubmaster.pages.dev/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Fashion Website</h3>
          <div className='.portfolio__item-cta'>
            <a href='https://github.com/parthpathakpp1/html-css-js-fashion-site' target='_blank' className='btn'>GitHub</a>
            <a href='https://fashion-44c.pages.dev/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>ChatGPT Clone</h3>
          <div className='.portfolio__item-cta'>
            <a href='https://github.com/parthpathakpp1/client-chatgpt' target='_blank' className='btn'>GitHub</a>
            <a href='https://client-chatgpt-delta.vercel.app/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Apple Doors</h3>
          <div className='.portfolio__item-cta'>
            <a href='https://github.com/parthpathakpp1/AppleDoors/tree/master' target='_blank' className='btn'>GitHub</a>
            <a href='https://appleee-doors.onrender.com/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
