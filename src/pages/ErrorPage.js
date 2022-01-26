import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner/Banner";

const ErrorPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Banner highlightedTitle="Error page" simpleTitle="not found!" />
        </motion.main>
    )
}

export default ErrorPage;