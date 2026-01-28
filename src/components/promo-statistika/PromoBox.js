import CountUp from "../animations/CountUp";
import "./PromoBox.css";

const PromoBox = ({ promocija }) => {
  return (
    <div className="promo-box">
      <div className="promo-count">
        {" "}
        <CountUp to={promocija.count} />
      </div>
      <div className="promo-mark">+</div>
      <div className="promo-text">{promocija.text}</div>
    </div>
  );
};

export default PromoBox;
