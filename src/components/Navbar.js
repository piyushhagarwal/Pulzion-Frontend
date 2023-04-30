import React from "react";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-dark  py-2 ">
        <div class="container-fluid ">
          <a class="navbar-brand ms-4" href="/">
            Give a Pad
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blogs">
                  Campaigns
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#gallery">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
