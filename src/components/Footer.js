import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="footer-container">
        <div class="social-links">
          <div class="link">
            <a href="#">
              <i class="fab fa-facebook" id="icon1"></i>
            </a>
          </div>
          <div class="link">
            <a href="#">
              <i class="fab fa-instagram" id="icon1"></i>
            </a>
          </div>
          <div class="link">
            <a href="#">
              <i class="fab fa-twitter" id="icon1"></i>
            </a>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; Copyright, 2023 </p>
        </div>
      </footer>
    </div>
  );
}
