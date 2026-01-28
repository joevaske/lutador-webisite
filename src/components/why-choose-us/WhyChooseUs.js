import "./WhyChooseUs.css";
import WhyChooseUsImage from "../../images/why-choose-us/why-choose-us.webp";
import FancyImage from "../ux-elements/fancy-image/FancyImage";
import FadeInLeft from "../animations/FadeInLeft";
import FadeInRight from "../animations/FadeInRight";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <FadeInLeft>
        <div className="why-choose-us-text">
          <h3>Zašto odabrati nas</h3>
          <h2>Našim članovima obezbeđujemo najbolje uslove rada</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
      </FadeInLeft>
      <FadeInRight>
        <div className="why-choose-us-image">
          <FancyImage
            image={WhyChooseUsImage}
            altText={"Lutador Tim - zasto odabrati nas"}
          />
        </div>
      </FadeInRight>
    </div>
  );
};

export default WhyChooseUs;
