import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home__description">
                <h2 className="home__title">Czy wiedziałeś, że inni harcerze oceniają</h2>
                <p className="home__text">swoje umiejętności
                        <br/>
                    zupełnie inaczej, 
                        <br/>
                    niż widzą to inni harcerze</p>
                <Link to="/wykonajtest">
                    <button className="btn home__btn">
                        <span className="home__btn_txt_first">Zrób test harcerski</span>
                        <br/>
                        <span className="home__btn_txt_second">Zobacz jak oceniają cię innni</span>
                        <div className="home__arrow_icon"></div>
                    </button>
                </Link>
            </div>
            <div className="home__img_board">
                <div className="home_img_first"></div>
                <div className="home_img_second"></div>
                <div className="home_img_third"></div>
                <div className="home_img_fourth"></div>
                <div className="home__background"></div>
            </div>
        </div>
    )
}

export default Home;