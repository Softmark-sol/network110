import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
    </div>
  );
};

export default Home;
