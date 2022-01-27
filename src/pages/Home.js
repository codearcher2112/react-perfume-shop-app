import React from "react";
import { BasketState } from "../context/Context";
import Banner from "../components/Banner/Banner";
import Social from "../components/Social/Social";
import ProductItem from "../components/ProductItem/ProductItem";
import Search from '../components/Search/Search';
import Test from '../components/Filter/Test';


import { motion } from "framer-motion";
// Remove below after add data
import bgImgHome from "../assets/images/chanel-coco-mademoiselle.png";

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
            <Banner highlightedTitle="Best Aromatic" simpleTitle="Perfumes ever!" bgImg={bgImgHome} />
            {/*<section className="products">*/}
            {/*    <div className="container products__container">*/}
            {/*        <div className="products__wrapper">*/}
            {/*            {*/}
            {/*                products.map((prod) => {*/}
            {/*                    return (*/}
            {/*                        <ProductItem key={prod.id} prod={prod} />*/}
            {/*                    )*/}
            {/*                })*/}
            {/*            }*/}
            {/*        </div>*/}

            {/*        <aside className='aside'>*/}
            {/*            <div className="products__filter">*/}
            {/*                <div className="products__filter-row">*/}
            {/*                    <input type="text" placeholder="Search For Product"/>*/}
            {/*                </div>*/}

            {/*                <div className="products__filter-row">*/}
            {/*                    Filter Option 1*/}
            {/*                </div>*/}

            {/*                <div className="products__filter-row">*/}
            {/*                    Filter Option 2*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </aside>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<Social />*/}
            <Test />
        </motion.main>
    )
}

export default Home;