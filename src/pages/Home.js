import React from "react";
import { BasketState } from "../context/Context";
import Banner from "../components/Banner/Banner";
import Social from "../components/Social/Social";
import ProductItem from "../components/ProductItem/ProductItem";
import Filters from "../components/Filters/Filters";
import { motion } from "framer-motion";
// Remove below after add data
import bgImgHome from "../assets/images/chanel-coco-mademoiselle.png";

const Home = () => {
    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = BasketState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.brand.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Banner highlightedTitle="Best Aromatic" simpleTitle="Perfumes ever!" bgImg={bgImgHome} />

            <section className="products">
                <div className="container products__container">
                    <div className="products__wrapper">
                        {transformProducts().map((prod) => (
                            <ProductItem key={prod.id} prod={prod} />
                        ))}
                    </div>

                    <aside className='aside'>
                        <div className="products__filter">
                            <Filters />
                        </div>
                    </aside>
                </div>
            </section>

            <Social />
        </motion.main>
    )
}

export default Home;