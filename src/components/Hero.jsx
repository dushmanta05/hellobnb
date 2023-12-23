import React from "react";
import gridBanner from "/src/assets/images/grid-banner.png";

const Hero = () => (
  <>
    <section className="hero">
      <img src={gridBanner} alt="Grid banner" className="hero-image" />
      <h2 className="hero-title">
        <span>Remote</span> Experiences
      </h2>
      <p className="hero-text">
        Join unique interactive activities led by one of a kind hosts all
        without leaving home.
      </p>
    </section>
  </>
);

export default Hero;
