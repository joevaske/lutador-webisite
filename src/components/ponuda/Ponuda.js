import "./Ponuda.css";

import BJJAdvanced from "../../images/ponuda/bjj-advanced.webp";
import BJJBasic from "../../images/ponuda/bjj-basic.webp";
import BoxingKickboxing from "../../images/ponuda/boxing-kickboxing.webp";
import IndividualTraining from "../../images/ponuda/individual-training.webp";
import SingleOffer from "./SingleOffer";

/* Icons */
import BoxingIcon from "../../images/ponuda/icons/boxing.png";
import PersonalIcon from "../../images/ponuda/icons/personal.png";
import BJJAdvancedIcon from "../../images/ponuda/icons/bjj-advanced.png";
import BJJBasicIcon from "../../images/ponuda/icons/bjj-basic.png";
import FadeIn from "../animations/FadeIn";

const ponuda = [
  {
    id: 1,
    icon: BJJAdvancedIcon,
    name: "Napredna Grupa",
    img: BJJAdvanced,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    link: "#link",
  },
  {
    id: 2,
    icon: BJJBasicIcon,
    name: "Početna Grupa",
    img: BJJBasic,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    link: "#link",
  },
  {
    id: 3,
    icon: BoxingIcon,
    name: "Boxing & Kickboxing",
    img: BoxingKickboxing,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    link: "#link",
  },
  {
    id: 4,
    icon: PersonalIcon,
    name: "Individualni Treninzi",
    img: IndividualTraining,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    link: "#link",
  },
];

const Ponuda = () => {
  return (
    <FadeIn>
      <div className="ponuda">
        {ponuda.map((offer) => (
          <SingleOffer offer={offer} key={offer.id} />
        ))}
      </div>{" "}
    </FadeIn>
  );
};

export default Ponuda;
