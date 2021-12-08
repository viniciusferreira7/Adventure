import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () =>{
        setClick(true)
        if()
    }

    return (
        <>
         <nav className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>   
        </>
    )
}

export default Navbar
