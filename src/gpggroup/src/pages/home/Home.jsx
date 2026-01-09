import React from "react";
import Hero from "../../companents/hero/Hero";
import Catalog from "../../companents/catalog/Catalog";
import Information from "../../companents/information/Information";
import Service from "../../companents/service/Service";
import Arrow from "../../companents/arrow/Arrow";
import Filter from "../../companents/filter/Filter";
import Card from "../../companents/card/Card";
import Made from "../../companents/made/Made";
import Lube from "../../companents/lube/Lube";
import Leazy from "../../companents/leazy/Leazy";
import Animate from "../../companents/animate/Animate";
import Part from "../../companents/part/Part";
import "./home.scss"
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="home-bg">
        {/* <Made /> */}
        <Animate />
      </div>
      <Catalog />
      <Lube />
      <Service />
      <Information />
      <Card />
      <Part />
    </div>
  );
};

export default Home;
