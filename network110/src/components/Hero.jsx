import React from "react";
import { useTranslation } from "react-i18next";
import "../css/hero.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero" id="hero">
      <div className="hero-container animate__animated animate__backInDown">
        <h2>{t('hero.title')}</h2>
        <p>{t('hero.description')}</p>
      </div>
    </div>
  );
};

export default Hero;
