import React from "react";
import { motion } from "framer-motion";

import img from "../assets/images/chanel-coco-mademoiselle.png";
import imgCard from "../assets/images/PikPng.com_perfume-png_1269742.png";

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="banner">
                <div className="container banner__container">
                    <h1 className="banner__title">
                        <span>Best Aromatic</span> Perfumes ever!
                    </h1>

                    <div className="banner__img-wrapper">
                        <img className="banner__img"
                             src={img}
                             alt=""
                        />
                    </div>
                </div>
            </div>

            <section className="cards">
                <div className="container">
                    <div className="cards-wrapper">
                        <div className="card__item">
                            <div className="card__item-img-wrapper">
                                <div className="card__item-img-overlay">
                                    <a className="card__item-link" href="#">
                                        <span className="card__item-link-txt">More Info</span>
                                    </a>
                                </div>

                                <img className="card__item-img" src={imgCard} alt=""/>
                            </div>

                            <div className="card__item-info-wrapper">
                                <div className="card__item-info">
                                    <h4 className="card__item-title">
                                        Lorem ipsum dolor sit.
                                    </h4>

                                    <p className="card__item-info-txt">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam?
                                    </p>

                                    <div className="card__item-price">
                                        $20
                                    </div>
                                </div>

                                <button className="card__item-add-btn">
                                    <span className="card__item-add-btn-txt">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                        Add to basket
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="card__item">
                            <div className="card__item-img-wrapper">
                                <div className="card__item-img-overlay">
                                    <a className="card__item-link" href="#">
                                        <span className="card__item-link-txt">More Info</span>
                                    </a>
                                </div>

                                <img className="card__item-img" src={imgCard} alt=""/>
                            </div>

                            <div className="card__item-info-wrapper">
                                <div className="card__item-info">
                                    <h4 className="card__item-title">
                                        Lorem ipsum dolor sit.
                                    </h4>

                                    <p className="card__item-info-txt">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam?
                                    </p>

                                    <div className="card__item-price">
                                        $20
                                    </div>
                                </div>

                                <button className="card__item-add-btn">
                                    <span className="card__item-add-btn-txt">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                        Add to basket
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="card__item">
                            <div className="card__item-img-wrapper">
                                <div className="card__item-img-overlay">
                                    <a className="card__item-link" href="#">
                                        <span className="card__item-link-txt">More Info</span>
                                    </a>
                                </div>

                                <img className="card__item-img" src={imgCard} alt=""/>
                            </div>

                            <div className="card__item-info-wrapper">
                                <div className="card__item-info">
                                    <h4 className="card__item-title">
                                        Lorem ipsum dolor sit.
                                    </h4>

                                    <p className="card__item-info-txt">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam?
                                    </p>

                                    <div className="card__item-price">
                                        $20
                                    </div>
                                </div>

                                <button className="card__item-add-btn">
                                    <span className="card__item-add-btn-txt">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                        Add to basket
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="card__item">
                            <div className="card__item-img-wrapper">
                                <div className="card__item-img-overlay">
                                    <a className="card__item-link" href="#">
                                        <span className="card__item-link-txt">More Info</span>
                                    </a>
                                </div>

                                <img className="card__item-img" src={imgCard} alt=""/>
                            </div>

                            <div className="card__item-info-wrapper">
                                <div className="card__item-info">
                                    <h4 className="card__item-title">
                                        Lorem ipsum dolor sit.
                                    </h4>

                                    <p className="card__item-info-txt">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam?
                                    </p>

                                    <div className="card__item-price">
                                        $20
                                    </div>
                                </div>

                                <button className="card__item-add-btn">
                                    <span className="card__item-add-btn-txt">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                        Add to basket
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Home;