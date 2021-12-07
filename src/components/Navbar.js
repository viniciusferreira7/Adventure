import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link tp="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar
