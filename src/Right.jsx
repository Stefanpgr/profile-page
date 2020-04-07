import React from "react";

const Right = () => {
  return (
    <div class="right">
      <div class="info">
        <h3>Information</h3>
        <div class="info_data">
          <div class="data">
            <h4>Email</h4>
            <p>alex@gmail.com</p>
          </div>
          <div class="data">
            <h4>Phone</h4>
            <p>0001-213-998761</p>
          </div>
        </div>
      </div>

      <div class="projects">
        <h3>Projects</h3>
        <div class="projects_data">
          <div class="data">
            <h4>Recent</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="data">
            <h4>Most Viewed</h4>
            <p>dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div class="social_media">
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Right;
