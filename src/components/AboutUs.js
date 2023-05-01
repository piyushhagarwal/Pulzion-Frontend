import React from "react";
import "../css/aboutUs.css";

export default function ContactUs() {
  return (
    <div class="aboutUs" id="aboutUs">
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6 pt-3">
            <small class="text-uppercase" style={{ color: "#9B5DE5" }}>
              About us
            </small>
            <h1 class="h2 mb-4" style={{ fontWeight: "600" }}>
              About Our <span style={{ color: "#9B5DE5" }}>Company</span>
            </h1>
            <p
              class="text-secondary"
              style={{ lineHeight: "2", textAlign: "left" }}
            >
              <b style={{ color: "rgb(75, 0, 130)" }}>
                We are a dedicated team of individuals who are passionate about
                improving menstrual hygiene and ensuring that every woman and
                girl has access to basic necessities such as sanitary pads. Our
                organization believes that menstruation is a natural and normal
                bodily function, and it should not be a barrier to education,
                work, or other opportunities.
              </b>
            </p>
            <p
              class="text-secondary"
              style={{ lineHeight: "2", textAlign: "left" }}
            >
              <b style={{ color: "rgb(75, 0, 130)" }}>
                We work tirelessly to connect the NGO's which distribute
                sanitary pads to underprivileged communities, schools, and other
                organizations to ensure that women and girls have access to safe
                and hygienic menstrual products. Our goal is to break the stigma
                around menstruation and empower women and girls to live their
                lives to the fullest.
              </b>
            </p>
          </div>
          <div class="col-md-6 text-center">
            <div class="row">
              <div class="col-md-6 mb-3">
                <img
                  src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="w-100 rounded"
                  alt=""
                />
              </div>
              <div class="col-md-6 mb-3">
                <img
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
