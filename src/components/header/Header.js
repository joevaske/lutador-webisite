import React from "react";
import BgOne from "../../images/backgrounds/header/mateja-header-bg.webp";
import BgTwo from "../../images/backgrounds/header/mateja-header-bg-2.webp";
import BgTree from "../../images/backgrounds/header/mateja-header-bg-3.webp";

import Logo from "../../images/logo/logo.webp";
import { PiArrowFatLinesDownFill } from "react-icons/pi";

import "./Header.css";
import MobileMenu from "../mobile-menu/MobileMenu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="logo">
        <img src={Logo} alt="Lutador Logo" />
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="header-slider"
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            {" "}
            <img
              src={BgOne}
              alt="Lutador - Mateja Valjarevic"
              className="slide-1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            {" "}
            <img src={BgTwo} alt="Lutador BJJ Trening" className="slide-2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            {" "}
            <img src={BgTree} alt="Lutador - Uniform" className="slide-3" />
          </div>
        </SwiperSlide>
      </Swiper>

      <MobileMenu />
      <div className="header-text-box">
        <h1>Lutador BJJ</h1>
        <h2>Snaga, disciplina, karakter</h2>

        <button className="btn btn-red btn-outline btn-lg btn-rounded">
          <span>Zakaži probni trening</span>
        </button>
      </div>
      <PiArrowFatLinesDownFill className="arrow-down" />
    </div>
  );
};

export default Header;
