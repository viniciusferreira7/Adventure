import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {Button} from './Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth() <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <nav className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3">
                </i>
            </Link>
            <div className="menu-icons" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className="nav-items">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/Service" className="nav-link">
                        Service
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/products" className="nav-link">
                        Products
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/sign-up" className="links-mobile" onClick={closeMobileMenu}>
                        SIGN UP
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>}
        </nav>
    )
}

export default Navbar
