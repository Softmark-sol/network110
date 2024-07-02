import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Cards /> */}
       <AboutUs />
    </div>
  );
};

export default Home;
