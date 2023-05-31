import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/" className="header__logo_text">TestHarcerski</Link>
                </div>
                <div className="header__right">
                    <div className="header__global-icon"></div>
                    <h2>PL</h2>
                    <div className="header__arrow"></div>
                    <div className="header__account"></div>
                    <div className= "header__menu">
                     <Menu/>
                     </div>
                </div>
            </div>
        </div>
    )
}   

export default Header;