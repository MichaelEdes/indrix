import React from "react";
import "./ModelCarousel.css";

function ModelCarousel() {
  return (
    <div className="model-carousel">
      <h1>Live. Forever.</h1>
      <div className="carousel-content">
        <div className="carousel-image-container">
          <img
            alt="robot"
            src="https://media.discordapp.net/attachments/1038329663187062804/1104107464028323920/starshadowx2_Chris_Cunningham_style_transparent_blue_techwear_i_4223a935-18fe-4e12-8ddd-a377599a7d83.png?width=393&height=701"
          />
        </div>
        <div className="carousel-card-text">
          <h2>SOBIE X PRO</h2>
          <p>
            Discover eternal life with Indrex's SOBIE X PRO. Immerse yourself in
            a sleek, feminine, sapphire-blue robotic body. With cutting-edge
            tech, we ensure seamless memory transplants for a timeless
            existence. SOBIE X PRO - your key to infinite horizons. Experience
            the future, today.
          </p>
          <div className="button-container">
            <button className="standard-button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCarousel;
