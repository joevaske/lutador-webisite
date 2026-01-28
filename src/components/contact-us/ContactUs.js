import ContactForm from "../contact-form/ContactForm";
import "./ContactUs.css";

import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import GoogleMap from "../google-map/GoogleMap";

const ContactUs = () => {
  return (
    <div className="contact-wrap">
      <div className="contact-us" id="contact">
        <div className="contact-us-text">
          <h3>Javite se</h3>
          <h2>Kontaktirajte nas za više informacija</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="contact-us-text-location">
            <div className="contact-us-text-location-address">
              <div className="contact-us-text-location-address-image">
                <TfiLocationPin />
              </div>
              <div className="contact-us-text-location-address-desc">
                <h3>Lokacija</h3>
                <p>Kondina 22. 11000 Beograd</p>
              </div>
            </div>
            <div className="contact-us-text-location-email">
              <div className="contact-us-text-location-email-image">
                <TfiEmail />
              </div>
              <div className="contact-us-text-location-email-desc">
                <h3>Pošaljite nam poruku</h3>
                <p>lutador@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-us-social">
            <h3>Zvanične društvene mreže</h3>
            <div className="social-links">
              <div className="youtube">
                <FaYoutube />
              </div>
              <div className="instagram">
                <FaInstagram />
              </div>
              <div className="facebook">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-form">
          <ContactForm />
        </div>
      </div>
      <div className="map">
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactUs;
