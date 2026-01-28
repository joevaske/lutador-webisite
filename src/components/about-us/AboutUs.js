import "./AboutUs.css";
import matejaValjarevic from "../../images/about-us/mateja-profilna-1.webp";
import FancyImage from "../ux-elements/fancy-image/FancyImage";
import FadeInLeft from "../animations/FadeInLeft";
import FadeInRight from "../animations/FadeInRight";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <FadeInLeft>
        <div className="about-us-image">
          <FancyImage image={matejaValjarevic} altText={"Mateja Valjarevic"} />
        </div>
      </FadeInLeft>
      <FadeInRight>
        <div className="about-us-text-wrapper">
          <h3>About Us</h3>
          <h2>Mateja Valjarević</h2>
          <p>
            Mateja Valjarević je <strong>crni pojas III stepen</strong> i jedini{" "}
            <strong>IBJJF-verifikovani profesor BJJ-a u Srbiji</strong>. Osnivač
            je kluba „Lutador” i trener sa više od petnaest godina iskustva u
            radu sa takmičarima. Završio je Sportsku akademiju u Beogradu i
            specijalizovao se na Fakultetu za sport i fizičko vaspitanje. Tokom
            karijere stvorio je brojne šampione i ostao aktivan takmičar
            posvećen razvoju sportista svih nivoa.
          </p>
          <button className="btn btn-red btn-red-full-color btn-square btn-lg">
            <span>Pročitaj više</span>
          </button>
        </div>
      </FadeInRight>
    </div>
  );
};

export default AboutUs;
