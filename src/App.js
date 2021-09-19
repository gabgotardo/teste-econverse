import React from "react";
import "./App.scss";

import Header from "./components/partials/Header";
import NewProducts from "./components/new-products";
import Categories from "./components/categories";
import News from "./components/news";
import BestBrands from "./components/best-brands";
import Highlighted from "./components/highlighted";
import AboutUs from "./components/about-us";
import Feedbacks from "./components/feedbacks";
import Footer from "./components/partials/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="Page">
      <Header />
      <NewProducts />
      <Categories />
      <News />
      <Highlighted />
      <BestBrands />
      <AboutUs />
      <Feedbacks />
      <Footer />
    </div>
  );
}

export default App;
