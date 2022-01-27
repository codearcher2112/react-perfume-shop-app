import React from "react";
import { motion } from "framer-motion";

import LoginForm from '../components/Login/login';

const Login = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <LoginForm />
            </div>
        </motion.main>
    )
}

export default Login;