import React from 'react'
import './about.css'
import ME from '../../assets/20220702_211511888_iOS.jpg'
import {FaAward} from 'react-icons/fa'
import {FaNetworkWired} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me </h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaNetworkWired className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Contact</h5>
              <small>3+ Years Working</small>
            </article>

          </div>

          <p>
            Aloha Everyone, welcome to Kay's page.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About