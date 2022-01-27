import React from "react";
import { motion } from "framer-motion";

import { Registration } from '../components/Regitration/registration';

const Register = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <Registration />
            </div>
        </motion.main>
    )
}

export default Register;