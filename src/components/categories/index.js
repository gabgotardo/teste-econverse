import React from 'react';
import './styles/categories.scss';

import guitarras from '../../assets/svg/guitarras.jpg';
import microfones from '../../assets/svg/microfones.jpg';
import mesas from '../../assets/svg/mesas.jpg';
import teclados from '../../assets/svg/teclados.jpg';
import violao from '../../assets/svg/violao.jpg';
import baterias from '../../assets/svg/baterias.jpg';


const categories = () => {
    return (
        <div className="categories">
            <ul className="categories-list">
                <li className="categories-item">
                    <img src={guitarras} alt="#"/>
                    <p>GUITARRAS</p>
                </li>
                <li className="categories-item">
                    <img src={microfones} alt="#"/>
                    <p>MICROFONES</p>
                </li>
                <li className="categories-item">
                    <img src={mesas} alt="#"/>
                    <p>MESAS DE SOM</p>
                </li>
                <li className="categories-item">
                    <img src={teclados} alt="#"/>
                    <p>TECLADOS</p>
                </li>
                <li className="categories-item">
                    <img src={violao} alt="#"/>
                    <p>VIOLÃO</p>
                </li>
                <li className="categories-item">
                    <img src={baterias} alt="#"/>
                    <p>BATERIAS</p>
                </li>
            </ul>               
        </div>
    );
}

export default categories;