import React from "react";
import logo from "../../assets/logos/logo.png"
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo-box">
                    <Link className="header__logo-link" to="/"></Link>

                    <div className="header__logo-wrapper">
                        <img
                            className="header__logo"
                            src={logo}
                            alt="Le Parfum logo"
                        />
                    </div>

                    <div className="header__logo-txt">
                        <span>Le</span>
                        <span>Parfum</span>
                    </div>
                </div>

                <Navbar />
                
                <div className=""></div>
            </div>
        </header>
    )
}

export default Header;