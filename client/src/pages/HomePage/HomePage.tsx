import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import "./HomePage.css";
import ModelCarousel from "../../components/ModelCarousel/ModelCarousel";

function HomePage() {
  return (
    <div className="home-page-container">
      <PageHero />
      <div className="model-carousel-container">
        <ModelCarousel />
      </div>
    </div>
  );
}

export default HomePage;
