import React from "react";
import img from "../../assets/images/chanel-coco-mademoiselle.png";

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="container banner__container">
                <h1 className="banner__title">
                    <span>{props.highlightedTitle}</span> {props.simpleTitle}
                </h1>

                <div className="banner__img-wrapper">
                    <img className="banner__img"
                         src={props.bgImg}
                         alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner;