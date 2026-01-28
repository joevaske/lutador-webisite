import PromoBox from "./PromoBox";
import "./PromoStatistika.css";

const promo = [
  {
    id: 1,
    count: "20",
    text: "Godina iskustva",
  },
  {
    id: 2,
    count: "15",
    text: "Promovisanih majstora",
  },
  {
    id: 3,
    count: "200",
    text: "Zadovoljnih korisnika",
  },
  {
    id: 4,
    count: "40",
    text: "Internacionalnih medalja",
  },
];

function PromoStatistika() {
  return (
    <div className="promo-statistika">
      <div className="promo-statistika-wrap">
        {promo.map((promocija) => (
          <PromoBox promocija={promocija} key={promocija.id} />
        ))}
      </div>
    </div>
  );
}

export default PromoStatistika;
