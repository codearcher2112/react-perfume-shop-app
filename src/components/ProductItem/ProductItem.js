import React from "react";
import { BasketState } from "../../context/Context";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const ProductItem = ({prod}) => {
    const {
        state: { basket },
        dispatch,
    } = BasketState();

    return (
        <div className="product__item">
            <div className="product__item-img-wrapper">
                <div className="product__item-img-overlay">
                    <Link className="product__item-link" to="/product">
                        <span className="product__item-link-txt">More Info</span>
                    </Link>
                </div>

                <img className="product__item-img" src={prod.imgSrc} alt={prod.brand} />
            </div>

            <div className="product__item-info-wrapper">
                <h4 className="product__item-title">
                    {prod.brand}
                </h4>

                <h5 className="product__item-name">
                    {prod.name}
                </h5>

                <p className="product__item-info-txt">
                    {prod.desc}
                </p>

                {
                    prod.fastDelivery ? (
                        <div className="product__item-delivery">
                            Fast Delivery
                        </div>
                    ) : (
                        <div className="product__item-delivery">
                            2 Days Delivery
                        </div>
                    )
                }

                <div className="product__item-rating-wrapper">
                    <Rating rating={prod.ratings} />
                </div>

                <div className="product__item-price">
                    {prod.price}$
                </div>

                {
                    basket.some(p => p.id === prod.id) ? (
                        <button onClick={() => {
                            dispatch({
                                type: "REMOVE_FROM_BASKET",
                                payload: prod,
                            })
                        }} className="product__item-add-btn product__item-add-btn--remove">
                            <span className="product__item-add-btn-txt">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                Remove From Basket
                            </span>
                        </button>
                    ) : (
                        <button onClick={() => {
                            dispatch({
                                type: "ADD_TO_BASKET",
                                payload: prod,
                            })
                        }} className={ prod.inStock ? "product__item-add-btn" : "product__item-add-btn product__item-add-btn--disabled"}>
                            <span className="product__item-add-btn-txt">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                {prod.inStock ? "Add To Basket" : "Out Of Stock"}
                            </span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default ProductItem;