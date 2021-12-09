import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

const STYLE = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) 
    ? buttonStyle : STYLE[0]

    const checkButtonSize = SIZE.includes(buttonSize) 
    ? buttonSize : SIZE[0]

    return(
        <Link path="/" className="btn-mobile">
            <Button
                className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                type={type}
                onClick={onClick}>
                {children}
            </Button>
        </Link>
    )
}