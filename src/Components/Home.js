import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const mobileScreen = window.matchMedia("(max-width: 1023px)").matches;

    if(mobileScreen){
    return (
        <div className="home">
            <div className="home__description">
                <h2 className="home__title">Czy wiedziałeś, że inni harcerze oceniają</h2>
                <p className="home__text">swoje umiejętności harcerskie zupełnie inaczej, 
                    niż widzą to inni harcerze</p>
            </div>
            <div className="home__img_board">
                <div className="home__background"></div>
                <div className="home__img_first"></div>
                <div className="home__img_second"></div>
                <div className="home__img_third"></div>
                <div className="home__img_fourth"></div>
            </div>
            <Link to="/wykonajtest">
                    <button className="btn home__btn">
                        <span className="home__btn_txt_first">Zrób test harcerski</span>
                        <br/>
                        <span className="home__btn_txt_second">Zobacz jak oceniają cię innni</span>
                        <div className="home__arrow_icon"></div>
                    </button>
                </Link>
        </div>
    )
    }else {
        return (
            <div className="home">
                <div className="home__description">
                    <h2 className="home__title">Czy wiedziałeś, że inni harcerze</h2>
                    <p className="home__text">oceniają swoje umiejętności harcerskie zupełnie inaczej, 
                        niż widzą to inni harcerze</p>
                        <Link to="/wykonajtest">
                <span className="home__btn_txt_first">Zrób test harcerski</span>
                        <button className="btn home__btn">
                            <span className="home__btn_txt_second">Zobacz jak oceniają cię innni</span>
                            <div className="home__arrow_icon"></div>
                        </button>
                    </Link>
                </div>
                <div className="home__img_board">
                    <div className="home__background"></div>
                    <div className="home__img_first"></div>
                    <div className="home__img_second"></div>
                    <div className="home__img_third"></div>
                    <div className="home__img_fourth"></div>
                </div>
                
            </div>
        )
    }
}

export default Home;