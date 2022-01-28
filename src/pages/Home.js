import React from "react";
// import { BasketState } from "../context/Context";
import Banner from "../components/Banner/Banner";
import ProductList from '../components/Filter/ProductList';


import { motion } from "framer-motion";
// Remove below after add data
import bgImgHome from "../assets/images/chanel-coco-mademoiselle.png";

const Home = () => {
    // const {
    //     state: { products }
    // } = BasketState();

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Banner highlightedTitle="Best Aromatic" simpleTitle="Perfumes ever!" bgImg={bgImgHome} />
            <ProductList />
        </motion.main>
    )
}

export default Home;