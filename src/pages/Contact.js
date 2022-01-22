import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <h1>Contact</h1>
            </div>
        </motion.main>
    )
}

export default Contact;