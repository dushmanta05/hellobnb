import React from "react";
import airbnbLogo from "/src/assets/images/svg/airbnb.svg";

const Navbar = () => (
  <nav>
    <div className="navbar">
      <img src={airbnbLogo} alt="Airbnb logo" className="nav-logo" />
      <h1 className="nav-text">Hellobnb</h1>
    </div>
  </nav>
);

export default Navbar;
