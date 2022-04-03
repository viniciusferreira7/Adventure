import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className='navbar-logo'>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={() => setClick(c => !c)}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => setClick(false)}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={() => setClick(false)}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={() => setClick(false)}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sing-up' className='nav-links-mobile' onClick={() => setClick(false)}>
                Sing-Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
