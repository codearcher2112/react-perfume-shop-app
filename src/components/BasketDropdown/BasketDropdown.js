import React from "react";
import { Link } from "react-router-dom";

const BasketDropdown = ({basket, dispatch}) => {
    return (
        <span className="header__basket-dropdown-wrapper">
            {
                basket.length > 0 ? (
                    <>
                        <ul className="header__basket-dropdown">
                            {
                                basket.map(prod => (
                                    <li key={prod.id} className="header__basket-dropdown-item">
                                        <span className="header__basket-dropdown-item-img-wrapper">
                                            {/*Add alt below*/}
                                            <img className="header__basket-dropdown-item-img" src={prod.imgSrc} />
                                        </span>

                                        <span className="header__basket-dropdown-item-info">
                                            <span className="header__basket-dropdown-item-info-title">
                                                {prod.name}
                                            </span>
                                            <span className="header__basket-dropdown-item-info-price">
                                                {prod.price}
                                            </span>
                                        </span>

                                        <button onClick={() => dispatch(
                                            {
                                                type: "REMOVE_FROM_BASKET",
                                                payload: prod
                                            }
                                        )} type="button" className="header__basket-dropdown-item-trash-btn">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>

                        <Link to="/basket" className="header__basket-dropdown-to-basket-btn">
                            Go To Basket
                        </Link>
                    </>
                ) : (
                    <span className="header__basket-dropdown-text-empty">The Basket Is Empty!</span>
                )
            }
        </span>
    )
}

export default BasketDropdown;