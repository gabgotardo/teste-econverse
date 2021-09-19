import React from "react";
import Slider from "react-slick";

import userPhoto from "../../assets/svg/userPhoto.png";

import arrowRight from "../../assets/svg/arrow-right.png";
import arrowLeft from "../../assets/svg/arrow-left.png";

import "./styles/feedbacks.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...style, right: "80px", zIndex: 10 }}>
      <img src={arrowRight} alt="#" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...style, left: "80px", zIndex: 10 }}>
      <img src={arrowLeft} alt="#"/>
    </div>
  );
}

const feedbacks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container-wrapper">
      <Slider {...settings}>
        {[1, 2].map((item) => (
          <div className="container-feedback">
            <img src={userPhoto} className="user" alt="user" />
            <div className="user-infos">
              <p className="user-name"> Felipe Salmin</p>
              <p className="user-role">Designer</p>
            </div>
            <div className="user-text">
              <div className="triangle"></div>
              <p>
                Many desktop publishing packages and web page editors now use Lorem Ipsum <br /> as their default model text, and a search for ‘lorem ipsum’{" "}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default feedbacks;