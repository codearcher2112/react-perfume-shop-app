import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BasketState } from "../context/Context";

const Basket = () => {
    const {
        state: { basket },
        dispatch,
    } = BasketState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(basket.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [basket]);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <section className="basket">
                <div className="container">
                    <div className="basket__inner">
                        <div className="basket__items-repeater">
                            {
                                basket.map((prod) => (
                                    <div className="basket__item" key={prod.id}>
                                        <div className="basket__item-img-wrapper">
                                            <img className="basket__item-img" src={prod.imgSrc} alt=""/>
                                        </div>

                                        <h4 className="basket__item-title">
                                            {prod.brand}
                                        </h4>

                                        <div className="basket__item-price">
                                            {prod.price}$
                                        </div>

                                        <div className="basket__item-count">
                                            <span className="basket__item-in-stock">
                                                Available Items In Stock.
                                                Select Product Number That You Want!
                                            </span>

                                            <select onChange={(e) => dispatch({
                                                type: "CHANGE_BASKET_QTY",
                                                payload: {
                                                    id: prod.id,
                                                    qty: e.target.value,
                                                }
                                            })} className="basket__item-select" value={prod.qty}>
                                                {[...Array(prod.inStock).keys()].map((item) => (
                                                    <option key={item + 1}>{item + 1}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <button onClick={() => dispatch(
                                            {
                                                type: "REMOVE_FROM_BASKET",
                                                payload: prod
                                            }
                                        )} type="button" className="basket__basket-item-trash-btn">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>

                        <aside className="aside">
                            <div className="basket__summary">
                                <div className="basket__summary-title">
                                    Subtotal ({basket.length}) items
                                </div>

                                <div className="basket__summary-total">
                                    <strong>Total: {total}$</strong>
                                </div>

                                <button className="basket__summary-proceed-btn">
                                    <span className="basket__summary-proceed-btn-txt">
                                       Proceed To Checkout
                                    </span>
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Basket;