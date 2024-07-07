import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContactForm from "../components/Contactus";
import VideoPlayer from "../components/Video";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoPlayer />
      <Services />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
