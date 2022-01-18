import "./App.scss"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";


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
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default App;
