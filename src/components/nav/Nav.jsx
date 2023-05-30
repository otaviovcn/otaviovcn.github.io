import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  const changeActiveNav = (target) => setActiveNav(target)

  return (
    <nav>
      <a
        href='#'
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => changeActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => changeActiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => changeActiveNav('#experience')}
      >
          <BiBook />
      </a>
      {/* <a
        href='#services'
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => changeActiveNav('#services')}
      >
        <RiServiceLine />
      </a> */}
      <a
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => changeActiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
