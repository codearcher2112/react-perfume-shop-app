import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__menu-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'navbar__link navbar__link--is-active' : 'navbar__link'}
                    >
                        Home
                    </NavLink>
                </li>

                <li className="navbar__menu-item">
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'navbar__link navbar__link--is-active' : 'navbar__link'}
                    >
                        About
                    </NavLink>
                </li>

                <li className="navbar__menu-item">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'navbar__link navbar__link--is-active' : 'navbar__link'}
                    >
                        Contact
                    </NavLink>
                </li>

                <li className="navbar__menu-item">
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => isActive ? 'navbar__link navbar__link--is-active' : 'navbar__link'}
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;