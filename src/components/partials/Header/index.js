import React from 'react';
import './styles/index.scss';

import groupCadeado from '../../../assets/svg/groupCadeado.svg';
import ninjaLogo from '../../../assets/svg/ninjaLogo.svg';
import groupBolsa from '../../../assets/svg/group-bolsa.svg';
import groupPorcentagem from '../../../assets/svg/groupPorcentagem.svg';
import groupBoneco from '../../../assets/svg/groupBoneco.svg';
import groupCaminhao from '../../../assets/svg/groupCaminhao.svg';
import groupLupa from '../../../assets/svg/groupLupa.png';
import groupWhats from '../../../assets/svg/groupWhats.svg';


export default () =>  {
    return (
        <header>
            <div className="header-1">
                <div className="header-1-items">
                    <img className="cadeado" src={groupCadeado} alt="#" />
                   <p className="header-1-text">COMPRA 100%</p>
                </div>
                <div className="header-1-items-line"></div>
                <div className="header-1-items">
                   <p href className="header-1-text"> 1 TROCA GRATIS</p>
                </div>
                <div className="header-1-items-line"></div>
                <div className="header-1-items">
                    <img className="percent" src={groupPorcentagem} alt="porcentagem" />
                    <p className="header-1-text">5X SEM JUROS</p>
                </div>
                <div className="header-1-items-line"></div>
                <div className="header-1-items">
                    <img className="caminhao" src={groupCaminhao} alt="#" />
                    <p className="header-1-text"> ENTREGAS EM TODO O BRASIL</p>
                </div>
            </div>
            <div className="header-2">
                <div className="header-2-logo">
                    <img src={ninjaLogo} alt="ninjaLogo" />
                </div>
                <form className="header-2-searchBox">
                    <img className="header-2-lupa" src={groupLupa} alt="lupa" />
                    <input className="header-2-input" type="text" placeholder="BUSQUE AQUI..."/>
                </form>
                <div className="header-2-icons-tel">
                    <img src={groupWhats} alt="whatsapp" />
                    <p>(11) 99999-9999</p>
                </div>
                <div className="header-2-icons-user">
                    <img src={groupBoneco} alt="user" />
                    <ul className="options">
                        <li className="visit">OLÁ, VISITANTE</li>
                        <li className="my-account">MINHA CONTA</li>
                    </ul>
                </div>
                <div className="header-2-cart">
                    <img className="cart" src={groupBolsa} alt="cart" />
                    <p className="my-cart">MEU CARRINHO</p>
                    <p className="my-items">0 item (s)</p>
                </div>
            </div>
            <nav className="header-menu-nav">
                <ul className="header-menu-list">
                    <li className="header-menu-item">TODAS AS CATEGORIAS</li>
                    <li className="header-menu-item">SOM PROFISSIONAL</li>
                    <li className="header-menu-item">INSTRUMENTOS MUSICAIS</li>
                    <li className="header-menu-item">PROMOÇÕES</li>
                    <li className="header-menu-item">CONTATO</li>
                </ul>
            </nav>
        </header>
    );
}