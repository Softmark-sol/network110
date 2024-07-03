import React from "react";
import Cards from "./Cards";
import "../css/aboutUs.css";

const Services = () => {
  return (
    <div className="about-us" id="services">
      <h1>Our Services</h1>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Services;
