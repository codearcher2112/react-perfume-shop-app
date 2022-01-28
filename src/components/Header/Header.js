import React from "react";
import logo from "../../assets/logos/logo.png"
import Navbar from "../Navbar/Navbar";
import BasketDropdown from "../BasketDropdown/BasketDropdown";
import { Link } from "react-router-dom";
import { BasketState } from "../../context/Context";
import {useAuthContext} from '../../context/AuthContext';

const Header = () => {
    const {
        state: { basket },
        dispatch,
    } = BasketState()

    const { user, setUser } = useAuthContext();

    const handleLogout = () => {
        setUser({});
    }

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
                    {!user.id ? <>
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
                    </> : <>
                        <li className="header__user-interaction-item">
                            <span onClick={handleLogout} className="header__user-interaction-link">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                Log Out
                            </span>
                        </li>
                    </>
                    }

                    <li className="header__user-interaction-item header__user-interaction-item">
                        <div className="header__user-interaction-link header__user-interaction-link--basket">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>

                            <div className="header__user-interaction-product-count">
                                {basket.length}
                            </div>
                            <BasketDropdown basket={basket} dispatch={dispatch} />
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;