import React from "react";
import "../css/aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container about-us">
      <h1>About Us</h1>
      <div className="company-history">
        <div className="company-history-img">
          <img
            src="https://img.freepik.com/free-vector/business-infographic-with-pic_23-2148334381.jpg?t=st=1719935902~exp=1719939502~hmac=f2939233b46441b58506ca7ce4d24f506e9ed240b17720d846ecf2253c7a0fb2&w=1060"
            alt="company-history"
          />
        </div>
        <div className="company-history-wrapper">
          <h2>Company History</h2>
          <p>
            Founded seven years ago, Network 110 has grown into a trusted name
            in internet, network, and surveillance solutions across the Kingdom
            of Saudi Arabia (KSA). Over the years, we have built a strong
            reputation for delivering high-quality, reliable services that
            consistently meet the needs of our clients. Our commitment to
            excellence and customer satisfaction has earned us a loyal
            clientele, making us a preferred choice for homes, offices, hotels,
            and shops throughout the region. Our experienced team continues to
            drive innovation and uphold the highest standards in every project
            we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
