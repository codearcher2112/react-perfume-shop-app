import "./App.scss"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import AdSection from "./components/AdSection/AdSection";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import ErrorPage from "./pages/ErrorPage";


function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Header />

            <AnimatePresence exitBeforeEnter initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </AnimatePresence>

            <AdSection />

            <Footer />
        </div>
    );
}

export default App;
