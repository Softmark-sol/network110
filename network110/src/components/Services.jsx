import React from "react";
import Cards from "./Cards";
import "../css/aboutUs.css";
import img1 from "../assets/images/cable.jpg";
import img2 from "../assets/images/installing.jpg";
import img3 from "../assets/images/camera.jpg";
import img4 from "../assets/images/maintenance.jpeg";
import img5 from "../assets/images/RJ45-headers.jpg";
import img6 from "../assets/images/solutions.jpg";
import img7 from "../assets/images/network-maintenance.jpg";
import img8 from "../assets/images/throughout-house.jpg";
import img9 from "../assets/images/camera2.jpg";
import img10 from "../assets/images/electrical-installation.jpg";


const Services = () => {
  const servicesData = [
    {
      heading: "Internet Cable Extension",
      desc: "Hidden internal extension without breaking.",
      f1: "Seamless extension",
      f2: "minimal disruption",
      img: img1,
    },
    {
      heading: "Installing and Programming Routers and Access Point Devices",
      desc: "Setup and configuration of network devices.",
      f1: "Optimized network performance",
      f2: "secure setup",
      img: img2,
    },
    {
      heading: "Installation and Establishment of Surveillance Cameras",
      desc: "Setup of surveillance systems and extension of camera cables.",
      f1: "Enhanced security",
      f2: "professional installation",
      img: img3 ,
    },
    {
      heading: "Internet Inspection and Maintenance",
      desc: "Solving all Internet problems, including weak and intermittent connections.",
      f1: "Reliable internet",
      f2: "troubleshooting services",
      img: img4 ,
    },
    {
      heading: "Installing Internet Cables and RJ45 Headers",
      desc: "Professional installation of internet cables and headers.",
      f1: "High-quality connections",
      f2: "expert installation",
      img: img5,
    },
    {
      heading: "Solutions to Internet, Cameras, and Electricity Problems",
      desc: "Comprehensive problem-solving for all related issues.",
      f1: "Efficient solutions",
      f2: "expert troubleshooting",
      img: img6 ,
    },
    {
      heading: "Network Maintenance, Preparation, and Operation",
      desc: "Regular maintenance and operational setup for networks.",
      f1: "Optimal network performance",
      f2: "ongoing support",
      img: img7 ,
    },
    {
      heading: "Internet Connection throughout the House",
      desc: "Ensuring consistent internet speed throughout the house.",
      f1: "Whole-home coverage",
      f2: "consistent performance",
      img: img8,
    },
    {
      heading: "Installing Internet and Cameras in Various Locations",
      desc: "Services for homes, offices, hotels, and shops.",
      f1: "Versatile installation",
      f2: "tailored solutions",
      img: img9 ,
    },
    {
      heading: "Electrical Solutions and Cable Installations",
      desc: "Solutions to electrical problems and installations.",
      f1: "Safe and reliable electrical work",
      f2: "professional service",
      img: img10 ,
    },
  ];

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
        }}
      >
        {servicesData.map((service, index) => (
          <Cards
            key={index}
            heading={service.heading}
            desc={service.desc}
            f1={service.f1}
            f2={service.f2}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
