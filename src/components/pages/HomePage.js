import React from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import Header from "../header/Header";
import PromoStatistika from "../promo-statistika/PromoStatistika";
import AboutUs from "../about-us/AboutUs";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <PromoStatistika />
      <AboutUs />
    </div>
  );
};

export default HomePage;
