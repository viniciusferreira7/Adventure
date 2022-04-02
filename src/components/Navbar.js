import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className='navbar-logo'>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </>
  )
}
