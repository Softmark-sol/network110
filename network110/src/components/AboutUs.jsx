import React from "react";
import "../css/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="container about-us">
      <h1>About Us</h1>
      <div className="company-history">
        <div className="company-history-img">
          <img
            src="https://img.freepik.com/free-vector/business-infographic-with-photo_23-2148483320.jpg?t=st=1719940927~exp=1719944527~hmac=a172cda6b2764e7686863accf298b8467ce178245ce7660b218cc0c0c5d27d4a&w=1060"
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

      <div className="mission-statement">
        <div className="mission-statement-wrapper">
          <h2>Mission Statement</h2>
          <p>
            At Network 110, our mission is to provide exceptional internet,
            network, and surveillance solutions tailored to meet the unique
            needs of our clients. We are dedicated to delivering reliable,
            high-quality services that ensure seamless connectivity, enhanced
            security, and peace of mind. Through innovative technology and
            expert craftsmanship, we strive to exceed customer expectations and
            foster long-term relationships built on trust and satisfaction.
          </p>
        </div>
        <div className="mission-statement-img">
          <img
            src="https://img.freepik.com/free-vector/illustration-business-graph-analysis_53876-36925.jpg?uid=R153806790&ga=GA1.1.88436429.1719244827&semt=ais_user"
            alt="mission-statement-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
