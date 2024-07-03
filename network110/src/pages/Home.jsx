import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
