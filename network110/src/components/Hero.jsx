import React from "react";
import { useTranslation } from "react-i18next";
import "../css/hero.css";
import LogoParticles from "./ParticleLogo";

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Detect the current language
  const currentLanguage = i18n.language;

  return (
    <div className="hero" id="hero">
      <div className="hero-container animate__animated animate__backInDown">
        <div>
          <ul>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point1")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point2")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point3")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point4")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point5")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point6")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point7")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point8")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point9")}
            </li>
            <li className={currentLanguage === "en" ? "english-text" : ""}>
              {t("hero.point10")}
            </li>
          </ul>
        </div>
        <div className="hero-btn">
          <li className={currentLanguage === "en" ? "english-text" : ""}>
            {t("hero.point11")}
          </li>
        </div>
      </div>
      <div className="logo-animation">
        <LogoParticles />
      </div>
    </div>
  );
};

export default Hero;
