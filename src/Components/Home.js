import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const mobileScreen = window.matchMedia("(max-width: 1023px)").matches;
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/wykonajtest");
  };

  if (mobileScreen) {
    return (
      <div className="home">
        <div className="home__description">
          <h2 className="home__title">Czy wiedziałeś, że harcerze oceniają</h2>
          <p className="home__text">
            swoje umiejętności
            <br/> 
            harcerskie zupełnie inaczej,
            <br/>
            niż widzą to inni harcerze
          </p>
        </div>
        <div className="home__img_board">
          <div className="home__background"></div>
          <div className="home__pink-ellipse"></div>
          <div className="home__img_first"></div>
          <div className="home__ellipse-1"></div>
          <div className="home__img_second"></div>
          <div className="home__ellipse-2"></div>
          <div className="home__img_third"></div>
          <div className="home__ellipse-3"></div>
          <div className="home__img_fourth"></div>
          <div className="home__ellipse-4"></div>

        </div>
        <button className="btn home__btn" onClick={handleStartTest}>
          <span className="home__btn_txt_first">Zrób test harcerski</span>
          <br />
          <span className="home__btn_txt_second">Zobacz jak oceniają cię inni</span>
          <div className="home__arrow_icon"></div>
        </button>
      </div>
    );
  } else {
    return (
      <div className="home">
        <div className="home__description">
          <h2 className="home__title">Czy wiedziałeś, że harcerze</h2>
          <p className="home__text">
            oceniają swoje umiejętności harcerskie
            <br />
            zupełnie inaczej, niż widzą to inni harcerze
          </p>
          <p className="home__btn_txt_first">Zrób test harcerski</p>
          <button className="btn home__btn" onClick={handleStartTest}>
            <span className="home__btn_txt_second">Zobacz jak oceniają cię inni</span>
            <div className="home__arrow_icon"></div>
          </button>
        </div>
        <div className="home__img_board">
          <div className="home__background"></div>
          <div className="home__pink-ellipse"></div>
          <div className="home__img_first"></div>
          <div className="home__ellipse-1"></div>
          <div className="home__img_second"></div>
          <div className="home__ellipse-2"></div>
          <div className="home__img_third"></div>
          <div className="home__ellipse-3"></div>
          <div className="home__img_fourth"></div>
          <div className="home__ellipse-4"></div>

        </div>
      </div>
    );
  }
};

export default Home;
