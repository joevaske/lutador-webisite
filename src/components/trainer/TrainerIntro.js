import React from "react";
import "./TrainerIntro.css";
import FancyImage from "../ux-elements/fancy-image/FancyImage";

const TrainerIntro = ({ image, text }) => {
  return (
    <div className="trainer-intro">
      <div className="trainer-intro-image">
        <FancyImage image={image} altText={"Trainer"} />
      </div>

      <div
        className="trainer-intro-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default TrainerIntro;
