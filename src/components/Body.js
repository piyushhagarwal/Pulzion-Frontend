import React from "react";
import "../css/body.css";

export default function Body() {
  return (
    <div>
      <div class="pad">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="bodyHeading">
              Sanitary pad donation is crucial to ensuring menstrual hygiene and
              reducing absenteeism among women and girls in underprivileged
              communities.
            </h1>
            <button style={{ marginRight: " 2%" }}>Donate</button>
            <button style={{ marginRight: " 2%" }}>Raise Campaign</button>
          </div>
          <div class="col-lg-6">
            <img
              class="title-image"
              src="https://png.pngtree.com/png-clipart/20211212/original/pngtree-aesthetic-girl-long-hair-and-weeds-simple-cartoon-png-image_6961771.png"
              alt="iphone-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
