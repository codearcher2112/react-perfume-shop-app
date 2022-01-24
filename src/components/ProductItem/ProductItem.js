import React from "react";
import { BasketState } from "../../context/Context";

const ProductItem = ({prod}) => {
    const {
        state: { basket },
        dispatch,
    } = BasketState();

    return (
        <div className="product__item">
            <div className="product__item-img-wrapper">
                <div className="product__item-img-overlay">
                    <a className="product__item-link" href="#">
                        <span className="product__item-link-txt">More Info</span>
                    </a>
                </div>

                <img className="product__item-img" src={prod.imgSrc} alt={prod.name} />
            </div>

            <div className="product__item-info-wrapper">
                <div className="product__item-info">
                    <h4 className="product__item-title">
                        {prod.name}
                    </h4>

                    <p className="product__item-info-txt">
                        {prod.desc}
                    </p>

                    {
                        prod.fastDelivery ? (
                            <div className="products__item-delivery">
                                Fast Delivery
                            </div>
                        ) : (
                            <div className="products__item-delivery">
                                2 Days Delivery
                            </div>
                        )
                    }

                    <div className="product__item-price">
                        {prod.price}
                    </div>
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