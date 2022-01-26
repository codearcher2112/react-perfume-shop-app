import React from "react";

const Social = () => {
    return (
        <ul className="social">
            <li className="social__item">
                <a className="social__item-link" href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </li>

            <li className="social__item">
                <a className="social__item-link" href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </li>

            <li className="social__item">
                <a className="social__item-link" href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </li>

            <li className="social__item">
                <a className="social__item-link" href="#">
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    )
}

export default Social;