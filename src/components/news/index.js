import React from 'react';
import './styles/news.scss';



const newProducts = () => {
    return (
        <section className="news">
            <div className="side-left">
                <div className="items">
                    <h3>NOVIDADES</h3>
                    <div className="divider"></div>
                    <p className="title">ÁUDIO</p>
                    <p className="text">PROFISSIONAL</p>
                    <button>CONFIRA</button>
                </div>
            </div>
            <div className="side-right">
                <div className="items">
                    <h3>NOVIDADES</h3>
                    <div className="divider"></div>
                    <p className="title">INSTRUMENTOS</p>
                    <p className="text">MUSICAIS</p>
                    <button>CONFIRA</button>
                </div> 
            </div>
        </section>
    );
}

export default newProducts;