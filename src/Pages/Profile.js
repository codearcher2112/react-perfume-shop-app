import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
    let navigate = useNavigate();
    let {username} = useParams();

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <h1>Profile for {username}</h1>
                <button onClick={() => {
                    navigate("/")
                }}>
                    Back to Homepage
                </button>
            </div>
        </motion.main>
    )
}

export default Profile;