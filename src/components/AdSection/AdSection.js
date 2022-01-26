import React from "react";
// Remove if do not needed
import img1 from "../../assets/images/perfume-index-1.jpg";
import img2 from "../../assets/images/059_main.jpg";

const AdSection = () => {
    return (
        <section className="adSection">
            <div className="adSection__inner">
                <div className="adSection__item">
                    <img className="adSection__item-img" src={img1} alt=""/>

                    <div className="adSection__item-info">
                        <button className="adSection__item-btn" type="button">
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className="adSection__item">
                    <img className="adSection__item-img" src={img2} alt=""/>

                    <div className="adSection__item-info">
                        <button className="adSection__item-btn" type="button">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdSection;