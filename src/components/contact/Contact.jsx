import React from 'react'
import './Contact.css'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
// import emailjs from 'emailjs-com'

const Contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_x44npsv', 'template_7qliv4f', form.current, '5-OY_siKe9t3hyaO-')
  //   e.target.reset()
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>parthpathakpp1@gmail.com</h5>
            <a href='mailto:parhtpathakpp1@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin />
            <h4>Linkedin</h4>
            <h5></h5>
            <a href='https://www.linkedin.com/in/parth-pathak-69626b249/'>Connect on Linkedin</a>
          </article>
        </div>
        <form>
          <input type='text' placeholder='Your Full Name' name='name' required />
          <input type='email' placeholder='Your Email Adress' name='email' required />
          <input type='message' placeholder='Write Message' name='message' row="7" required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact