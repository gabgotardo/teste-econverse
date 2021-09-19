import React from "react";

import Visa from "../../../assets/svg/visa.jpeg";
import MasterCard from "../../../assets/svg/mastercard.jpeg";
import AmericanExpress from "../../../assets/svg/americanexpress.jpeg";
import DinnersClub from "../../../assets/svg/dinnersclub.jpeg";
import BankInvoice from "../../../assets/svg/bankinvoice.jpeg";

import VtexPCI from "../../../assets/svg/vtex-pci.png";
import RapidSSL from "../../../assets/svg/rapidssl.png";

import StripeFooter from "../../stripe-footer";

import "./styles/styled.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="inner-wrapper">
          <ul className="hotlinks">
            <li className="main">institucional</li>
            <li className="sub">
              <a href="#">quem somos</a>
            </li>
            <li className="sub-last">
              <a href="#">nossas lojas</a>
            </li>
            <li className="main">atendimento</li>
            <li className="sub">
              <a href="#">fale conosco</a>
            </li>
            <li className="sub-last">
              <a href="#">vendas@ninjasom.com.br</a>
            </li>
          </ul>
          <ul className="hotlinks">
            <li className="main">ajuda e suporte</li>
            <li className="sub">
              <a href="#">política de privacidade</a>
            </li>
            <li className="sub">
              <a href="#">política de trocas</a>
            </li>
            <li className="sub">
              <a href="#">prazos de entrega</a>
            </li>
            <li className="sub">
              <a href="#">termos de uso</a>
            </li>
          </ul>
          <ul className="hotlinks">
            <li className="main">formas de pagamento</li>
            <div className="payment-methods">
              <img src={Visa} alt="#"/>
              <img src={MasterCard} alt="#"/>
              <img src={AmericanExpress} alt="#"/>
              <img src={DinnersClub} alt="#"/>
              <img src={BankInvoice} alt="#"/>
            </div>
            <li className="main">seguranca</li>
            <div className="seals">
              <img src={VtexPCI} alt="#"/>
              <img src={RapidSSL} alt="#"/>
            </div>
          </ul>
          <div className="newsletter">
            <p>
              ASSINE NOSSO <b>NEWSLETTER</b>
              <br /> E RECEBA NOVIDADES E PROMOCÕES
            </p>
            <div className="fields">
              <input placeholder="seu nome"></input>
              <input placeholder="seu e-mail"></input>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <StripeFooter />
    </>
  );
};

export default Footer;
