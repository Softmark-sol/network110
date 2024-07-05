import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "../css/aboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
      easing: 'ease', // Easing function for animation
    });
  }, []);

  return (
    <div className="container about-us" id="about">
      <h1><span>{t('aboutUs.title')}</span></h1>
      
      <div className="company-history">
        <div className="company-history-img" data-aos="fade-up-right" data-aos-duration="1500">
          <img
            src="https://img.freepik.com/free-vector/business-infographic-with-photo_23-2148483320.jpg?t=st=1719940927~exp=1719944527~hmac=a172cda6b2764e7686863accf298b8467ce178245ce7660b218cc0c0c5d27d4a&w=1060"
            alt="company-history"
          />
        </div>
        <div className="company-history-wrapper" data-aos="fade-up-left" data-aos-duration="1500">
          <h2>{t('aboutUs.companyHistory.heading')}</h2>
          <p>{t('aboutUs.companyHistory.content')}</p>
        </div>
      </div>

      <div className="mission-statement">
        <div className="mission-statement-wrapper" data-aos="fade-up-right" data-aos-duration="1500">
          <h2>{t('aboutUs.missionStatement.heading')}</h2>
          <p>{t('aboutUs.missionStatement.content')}</p>
        </div>
        <div className="mission-statement-img" data-aos="fade-up-left" data-aos-duration="1500">
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
