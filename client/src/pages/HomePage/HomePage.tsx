import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import "./HomePage.css";
import ModelCarousel from "../../components/ModelCarousel/ModelCarousel";
import FlowingText from "../../components/FlowingText/FlowingText";

function HomePage() {
  return (
    <div className="home-page-container">
      <PageHero />
      <div>
        <FlowingText />
      </div>
      <div className="model-carousel-container">
        <ModelCarousel />
      </div>
    </div>
  );
}

export default HomePage;
