import "./ContactForm.css";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-control">
        <input
          type="text"
          id="ime_i_prezime_1"
          name="ime_i_prezime_1"
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="ime_i_prezime_1">{"Ime i prezime"}</label>
      </div>
      <div className="contact-form-control">
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="email">{"Email"}</label>
      </div>
      <div className="contact-form-control">
        <input
          type="text"
          id="broj_telefona"
          name="broj_telefona"
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="broj_telefona">{"Broj telefona"}</label>
      </div>
      <div className="contact-form-control">
        <textarea
          id="poruka"
          name="poruka"
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="poruka">{"Poruka"}</label>
      </div>
      <button
        type="submit"
        className="btn btn-square btn-red btn-red-full-color"
      >
        Pošalji
      </button>
    </form>
  );
};

export default ContactForm;
