import React, { useState, useContext } from "react";
import "../css/createCampaign.css";
import NgoContext from "../context/ngoContext";

export default function CreateCampaign() {
  const context = useContext(NgoContext);
  const { addNgo } = context;
  const [ngo, setNgo] = useState({
    name: "",
    email: "",
    tel: "",
    description: "",
    quantity: "",
  });

  const submitNgo = (e) => {
    addNgo(ngo.name, ngo.email, ngo.tel, ngo.description, ngo.quantity);
    setNgo({
      name: "",
      email: "",
      tel: "",
      description: "",
      quantity: "",
    });
    e.preventDefault();
    alert("Form submitted successfully ");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNgo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2>Raise Campaign</h2>
          </div>
          <div class="contact-form-wrapper">
            <form onSubmit={submitNgo}>
              <div class="form-item">
                <input
                  type="text"
                  required
                  name="name"
                  value={ngo.name}
                  onChange={handleOnChange}
                />
                <label>Name of the NGO:</label>
              </div>
              <div class="form-item">
                <input
                  type="text"
                  name="email"
                  required
                  value={ngo.email}
                  onChange={handleOnChange}
                />
                <label>Email:</label>
              </div>
              <div class="form-item">
                <input
                  type="tel"
                  name="tel"
                  required
                  value={ngo.tel}
                  onChange={handleOnChange}
                />
                <label>Phone number:</label>
              </div>
              <div class="form-item">
                <textarea
                  class=""
                  name="description"
                  required
                  value={ngo.description}
                  onChange={handleOnChange}
                ></textarea>
                <label>Description</label>
              </div>
              <div class="form-item">
                <input
                  type="text"
                  name="quantity"
                  required
                  value={ngo.quantity}
                  onChange={handleOnChange}
                />
                <label>Quantity:</label>
              </div>
              <button class="submit-btn" type="submit" onSubmit={submitNgo}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
