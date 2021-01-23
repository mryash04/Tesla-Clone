import React from 'react';
import teslaLogo from "../assets/teslaLogoSmall.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={teslaLogo} alt="teslaLogo" />
            </div>
            <div className="header-link">
                <p>Model s</p>
                <p>Model 3</p>
                <p>Model x</p>
                <p>Model y</p>
                <p>Solar Roof</p>
                <p>Solar Panels</p>
            </div>
            <div className="header-option">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default Header;
