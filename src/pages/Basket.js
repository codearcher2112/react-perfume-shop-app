import React from "react";
import { motion } from "framer-motion";
import { BasketState } from "../context/Context";

const Basket = () => {
    const {
        state: { basket },
        dispatch,
    } = BasketState();

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
                                    <div className="basket__item">
                                        <div className="basket__item-img-wrapper">
                                            <img className="basket__item-img" src={prod.imgSrc} alt=""/>
                                        </div>

                                        <h4 className="basket__item-title">
                                            {prod.name}
                                        </h4>

                                        <div className="basket__item-price">
                                            {prod.price}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="basket__summary">
                            <div className="basket__summary-title">
                                Subtotal ({basket.length}) items
                            </div>

                            <div className="basket__summary-total">
                                Total: $ total
                            </div>

                            <button className="basket__summary-proceed-btn">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Basket;