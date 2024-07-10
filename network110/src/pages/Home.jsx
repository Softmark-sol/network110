import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContactForm from "../components/Contactus";
import VideoPlayer from "../components/Video";
import ScrollToTopButton from "../components/ScrollToTop";

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
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
