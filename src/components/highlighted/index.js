import React, { useState } from "react";

import useProducts from "../../hooks/useProducts";

import "./styles/highlighted.scss";

export default () => {
  const { products } = useProducts();
  const [modal, setModal] = useState(undefined);

  return (
    <div className="highlighted">
      <div className="highlighted-title">
        <h2>INSTRUMENTOS DESTAQUE</h2>
        <h4>It is a long established fact that a reader will be destracted by the readable</h4>
      </div>
      <section className="highlighted-vitrine">
        <div className="highlighted-vitrine-items">
          {products.map((product) => {
            const value = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price);
            return (
              <div onClick={() => setModal(product)} className="highlighted-vitrine-items-list">
                  <div className="transform">
                    <div className="gradient" />
                    <img className="product-photo" src={product.photo} alt={product.productName} />
                  </div>
                <h4 className="product-name">{product.productName}</h4>
                <p className="product-desc">{product.descriptionShort}</p>
                <p className="product-price">{value}</p>
              </div>
            );
          })}
        </div>
        <button className="seeMore">VER MAIS </button>
      </section>
      {modal && (
        <div className={`modal modal--${modal ? "active" : "disabled"}`}>
          <div class="modal-content">
            <span onClick={() => setModal(undefined)} class="close">
              &times;
            </span>
            <div className="modal-items">
              <img src={modal.photo} alt={modal.productName} />
              <div className="modal-details">
                <div className="modal-title">{modal.productName}</div>
                <div className="moda-price">{modal.price}</div>
                <div className="modal-desc">{modal.descriptionShort}</div>
                <div className="modal-seeMore">Veja mais detalhes do produto </div>
                <button className="modal-button">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
