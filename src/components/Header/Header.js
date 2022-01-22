import React from "react";
import logo from "../../assets/logos/logo.png"
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import imgCard from "../../assets/images/PikPng.com_perfume-png_1269742.png";

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

                <ul className="header__user-interaction">
                    <li className="header__user-interaction-item">
                        <Link to="/register" className="header__user-interaction-link">
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                            Register
                        </Link>
                    </li>

                    <li className="header__user-interaction-item">
                        <Link to="/login" className="header__user-interaction-link">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            Log In
                        </Link>
                    </li>

                    <li className="header__user-interaction-item header__user-interaction-item">
                        <Link to="/basket" className="header__user-interaction-link header__user-interaction-link--basket">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>

                            <span className="header__user-interaction-product-count">8</span>

                            <span className="header__basket-dropdown-wrapper">
                                <ul className="header__basket-dropdown">
                                    <li className="header__basket-dropdown-item">
                                        <span className="header__basket-dropdown-item-img-wrapper">
                                            <img className="header__basket-dropdown-item-img" src={imgCard} alt=""/>
                                        </span>

                                        <span className="header__basket-dropdown-item-info">
                                            Some Info About product here!
                                        </span>
                                    </li>

                                    <li className="header__basket-dropdown-item">
                                        <span className="header__basket-dropdown-item-img-wrapper">
                                            <img className="header__basket-dropdown-item-img" src={imgCard} alt=""/>
                                        </span>

                                        <span className="header__basket-dropdown-item-info">
                                            Some Info About product here!
                                        </span>
                                    </li>
                                </ul>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;