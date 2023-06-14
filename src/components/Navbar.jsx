import React from "react";
import Airbnblogo from "/src/assets/airbnb-logo.png"

export default function Navbar(){
    return (
        <nav>
            <img src={Airbnblogo} alt="Airbnb-logo" className="nav-logo" />
        </nav>
    )
}