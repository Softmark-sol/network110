import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../css/aboutUs.css";
import ScrollReveal from "scrollreveal";

const AboutUs = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "200px",
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal(".company-history-wrapper , .mission-statement-img", {
      interval: 200,
    });
    sr.reveal(".company-history-img , .mission-statement-wrapper", {
      interval: 300,
      origin: "bottom",
    });
  }, []);

  return (
    <div className="container about-us" id="about">
      <h1>
        <span>{t("aboutUs.title")}</span>
      </h1>

      <div className="company-history">
        <div className="company-history-img">
          <img
            src="https://img.freepik.com/free-vector/business-infographic-with-photo_23-2148483320.jpg?t=st=1719940927~exp=1719944527~hmac=a172cda6b2764e7686863accf298b8467ce178245ce7660b218cc0c0c5d27d4a&w=1060"
            alt="company-history"
          />
        </div>
        <div className="company-history-wrapper">
          <h2>{t("aboutUs.companyHistory.heading")}</h2>
          <p>{t("aboutUs.companyHistory.content")}</p>
        </div>
      </div>

      <div className="mission-statement">
        <div className="mission-statement-wrapper">
          <h2>{t("aboutUs.missionStatement.heading")}</h2>
          <p>{t("aboutUs.missionStatement.content")}</p>
        </div>
        <div className="mission-statement-img">
          <img
            src="https://img.freepik.com/premium-photo/target-strategy-concept-businessman-focus-aim-by-throwing-dart-targeting_28629-1458.jpg?w=826"
            alt="mission-statement-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
