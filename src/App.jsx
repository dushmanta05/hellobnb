import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/data";

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <section className="cards-list">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  </div>
);

export default App;
