import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './Navbar.css'
import './Button.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] =useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () =>{
        if(window.innerWidth <= 960)
            setButton(false)
        else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-links" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to='/products'>Products</Link>
                    </li>
                    <li className="menu-mobile" onClick={closeMobileMenu}>
                        <Link className="nav-links-mobile" to="/sing-up">Sign up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
    )
}

export default Navbar
