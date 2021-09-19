import React from 'react';
import Slider from "react-slick";

import './styles/best-brands.scss';

import arrowRight from "../../assets/svg/arrow-right.png";
import arrowLeft from "../../assets/svg/arrow-left.png";


import akgLogo from '../../assets/svg/akgLogo.png';
import rolandLogo from '../../assets/svg/roland.png';
import bossLogo from '../../assets/svg/boss.png';
import shureLogo from '../../assets/svg/shureLogo.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick} style={{ ...style, right: "80px", zIndex: 10 }}>
        <img src={arrowRight}  alt="arrow"/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick} style={{ ...style, left: "80px", zIndex: 10 }}>
        <img src={arrowLeft} alt="arrow" />
      </div>
    );
  }

const bestBrands = () => { 
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
        <div>
            <div className="best-brands-title">
                    <h2>AS <strong>MELHORES</strong> MARCAS</h2>
                    <p>it is a long established fact that a reader will be destracted by the readable</p>
            </div>
            <Slider {...settings}>
                {[1, 2].map((item) => (
                    <div>
                        <div className="best-brands">
                        <ul className="best-brands-logo" >
                            <li >
                                <img className="best-brands-logo-akg" src={akgLogo} alt="akgLogo" />
                            </li>
                            <li className="best-brands-logo">
                                <img src={rolandLogo} alt="rolandLogo" />
                            </li>
                            <li className="best-brands-logo">
                                <img src={bossLogo}alt="bossLogo" />
                            </li>
                            <li className="best-brands-logo">
                                <img src={shureLogo} alt="shureLogo" />
                            </li>
                        </ul>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default bestBrands;