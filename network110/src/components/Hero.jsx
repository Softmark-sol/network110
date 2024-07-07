import React from "react";
import { useTranslation } from "react-i18next";
import "../css/hero.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero" id="hero">
      <div className="hero-container animate__animated animate__backInDown">
        <ul>
          <li>{t("hero.point1")}</li>
          <li>{t("hero.point2")}</li>
          <li>{t("hero.point3")}</li>
          <li>{t("hero.point4")}</li>
          <li>{t("hero.point5")}</li>
          <li>{t("hero.point6")}</li>
          <li>{t("hero.point7")}</li>
          <li>{t("hero.point8")}</li>
          <li>{t("hero.point9")}</li>
          <li>{t("hero.point10")}</li>
        </ul>
        <div className="hero-btn">
          <li>{t("hero.point11")}</li>
        </div>
      </div>
    </div>
  );
};

export default Hero;
