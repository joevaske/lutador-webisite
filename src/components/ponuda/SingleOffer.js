import "./SingleOffer.css";
import { BsArrowRight } from "react-icons/bs";

const SingleOffer = ({ offer }) => {
  return (
    <div className="single-offer">
      <div className="single-offer-desc">
        <div className="single-offer-desc-image">
          <img src={offer.icon} alt={offer.name} />
        </div>
        <h3 className="single-offer-title">{offer.name}</h3>
        <p>{offer.description}</p>
        <button className="single-offer-link">
          Read More <BsArrowRight className="single-offer-link-arrow" />
        </button>
      </div>
      <div className="single-offer-image">
        <img src={offer.img} alt={`Lutador BJJ ${offer.name}`} />
      </div>
    </div>
  );
};

export default SingleOffer;
