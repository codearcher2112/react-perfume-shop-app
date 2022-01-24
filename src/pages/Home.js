import React from "react";
import { BasketState } from "../context/Context";
import ProductItem from "../components/ProductItem/ProductItem";
import { motion } from "framer-motion";
// Remove below after add data
import img from "../assets/images/chanel-coco-mademoiselle.png";

const Home = () => {
    const {
        state: { products }
    } = BasketState();

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="banner">
                <div className="container banner__container">
                    <h1 className="banner__title">
                        <span>Best Aromatic</span> Perfumes ever!
                    </h1>

                    <div className="banner__img-wrapper">
                        <img className="banner__img"
                             src={img}
                             alt=""
                        />
                    </div>
                </div>
            </div>

            <section className="products">
                <div className="container">
                    <div className="products-wrapper">
                        {
                            products.map((prod) => {
                                return <ProductItem key={prod.id} prod={prod} />
                            })
                        }
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Home;