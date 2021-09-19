import React from 'react';
import Slider from "react-slick";

import './styles/new-products.scss';
import bannerImage from '../../assets/svg/bannerImage.png';

import arrowRight from "../../assets/svg/arrow-right.png";
import arrowLeft from "../../assets/svg/arrow-left.png";

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

export default () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    return (
        <section className="banner">
            <Slider {...settings}>
                {[1, 2].map((item) => (
                    <img src={bannerImage} alt="" />
                ))}
            </Slider>
            <div className="content">
                <h3>NOVOS PRODUTOS</h3>
                <h1 className="stronger">INSTRUMENTOS</h1>
                <h1>PROFISSIONAIS</h1>
                <button>CONFIRA</button>
            </div>
        </section>
    );
}