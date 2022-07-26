import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {TbBook} from 'react-icons/tb'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" on onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" on onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ''}><TbBook/></a>
      <a href="#contact" on onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><BsFillTelephoneFill/></a>

    </nav>
  )
}

export default Nav