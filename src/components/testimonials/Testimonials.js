import "./Testimonials.css";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-intro-text">
        <h3>Testimonials</h3>
        <h2>Recenzije naših klijenata</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="testimonial-slider">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonials;
