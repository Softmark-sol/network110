import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <AboutUs />
    </div>
  );
};

export default Home;
