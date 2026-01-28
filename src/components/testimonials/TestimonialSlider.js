import "./TestimonialSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import AleksaBosnic from "../../images/testimonials/AleksaBosnic.webp";
import MarinaSpasic from "../../images/testimonials/MarinaSpasic.webp";
import MarkoRadojevic from "../../images/testimonials/MarkoRadojevic.webp";
import MatejVuckovic from "../../images/testimonials/MatejVuckovic.webp";
import StefanAtanaskovic from "../../images/testimonials/StefanAtanaskovic.webp";

const testimonials = [
  {
    id: 1,
    name: "Marina Spasić",
    src: MarinaSpasic,
    role: "Profi MMA borac",
    desc: "Sve pohvale za trenera Mateju Valjarevića, zaista je izvanredan u tome što radi. Način na koji vodi treninge i strpljivo objašava tehnike mi izuzetno odgovara. Krenuli smo od nule i sada koračamo ka ozbiljnijim profi MMA vodama.",
  },
  {
    id: 2,
    name: "Aleksa Bosnić",
    src: AleksaBosnic,
    role: "Braon pojas",
    desc: "Nemam dovoljno reči hvale za treninge brazilskog jiu-jitsua koje sam imao kod trenera Mateje Valjarevića. Njegova stručnost i posvećenost su neosporni. Sa svakim časom sam napredovao ne samo u tehnikama, već i u razumevanju strategija i taktika u borbi.",
  },
  {
    id: 3,
    name: "Stefan Atanasković",
    src: StefanAtanaskovic,
    role: "Ljubičasti pojas",
    desc: "Njegov pristup individualnom radu je nešto posebno, prilagođava se mom tempu učenja, identifikuje i rešava moje slabosti, i pruža konstantan feedback. Osećam se samouvereno u sparinzima zahvaljujući njegovim stručnim savetim.",
  },
  {
    id: 4,
    name: "Matej Vučković",
    src: MatejVuckovic,
    role: "Ljubičasti pojas",
    desc: "Jednostavno rečeno, trener Mateja Valjarević je u vrhu trenerskog posla kada su u pitanju treninzi Brazilske Džiu Džice. Njegova poznavanje BJJ-a i prenošenje tehnika, taktika i strategija je stvarno izuzetna. Svaki trening je prilagođen mom trenutnom nivou.",
  },
  {
    id: 5,
    name: "Marko Radojević",
    src: MarkoRadojevic,
    role: "Plavi pojas",
    desc: "Treninge brazilskog jiu-jitsua kod trenera Mateje Valjarevića preporučio mi je prijatelj, i iskreno sam mu zahvalan na tome. Mateja je i sjajan pedagog. Njegova sposobnost da prenese kompleksne tehnike na jednostavan način je impresivna.",
  },
  {
    id: 6,
    name: "Marina Spasić",
    src: MarinaSpasic,
    role: "Profi MMA borac",
    desc: "Sve pohvale za trenera Mateju Valjarevića, zaista je izvanredan u tome što radi. Način na koji vodi treninge i strpljivo objašava tehnike mi izuzetno odgovara. Krenuli smo od nule i sada koračamo ka ozbiljnijim profi MMA vodama.",
  },
  {
    id: 7,
    name: "Aleksa Bosnić",
    src: AleksaBosnic,
    role: "Braon pojas",
    desc: "Nemam dovoljno reči hvale za treninge brazilskog jiu-jitsua koje sam imao kod trenera Mateje Valjarevića. Njegova stručnost i posvećenost su neosporni. Sa svakim časom sam napredovao ne samo u tehnikama, već i u razumevanju strategija i taktika u borbi.",
  },
  {
    id: 8,
    name: "Stefan Atanasković",
    src: StefanAtanaskovic,
    role: "Ljubičasti pojas",
    desc: "Njegov pristup individualnom radu je nešto posebno, prilagođava se mom tempu učenja, identifikuje i rešava moje slabosti, i pruža konstantan feedback. Osećam se samouvereno u sparinzima zahvaljujući njegovim stručnim savetim.",
  },
  {
    id: 9,
    name: "Matej Vučković",
    src: MatejVuckovic,
    role: "Ljubičasti pojas",
    desc: "Jednostavno rečeno, trener Mateja Valjarević je u vrhu trenerskog posla kada su u pitanju treninzi Brazilske Džiu Džice. Njegova poznavanje BJJ-a i prenošenje tehnika, taktika i strategija je stvarno izuzetna. Svaki trening je prilagođen mom trenutnom nivou.",
  },
  {
    id: 10,
    name: "Marko Radojević",
    src: MarkoRadojevic,
    role: "Plavi pojas",
    desc: "Treninge brazilskog jiu-jitsua kod trenera Mateje Valjarevića preporučio mi je prijatelj, i iskreno sam mu zahvalan na tome. Mateja je i sjajan pedagog. Njegova sposobnost da prenese kompleksne tehnike na jednostavan način je impresivna.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[FreeMode, Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
        waitForTransition: true,
      }}
      speed={1000}
      spaceBetween={24}
      loop={true}
      watchSlidesProgress={true}
      grabCursor={true}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ width: "360px" }} // bitno za card-style slider
        >
          {/* OVDJE IDE TVOJ TESTIMONIAL CARD */}
          <div className="testimonial-card">
            <p>{item.desc}</p>

            <div className="testimonial-author">
              <div className="testimonial-card-author-image">
                <img src={item.src} alt={item.name} />
              </div>

              <div className="testimonial-card-author-data">
                <strong className="author-name">{item.name}</strong>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
