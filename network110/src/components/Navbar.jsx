import React from "react";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import LeftDrawer from "./Drawer";
import { FaPhoneAlt } from "react-icons/fa";
import Switch from "../languageSelector/Switch";
import Logo from "../assets/images/logo.png"

const Navbar = () => {
  const { t } = useTranslation();

  const Services = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const About = () => {
    const servicesSection = document.getElementById("about");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const Contact = () => {
    const contactSection = document.getElementById("form");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar1">
      <div className="left1 animate__animated animate__backInLeft">
        <img src={Logo} alt="logo" />
      </div>
      <div className="right1">
        <div>
          <span onClick={Services}>{t("navbar.services")}</span>
          <span onClick={About}>{t("navbar.about")}</span>
          <span onClick={Contact}>{t("navbar.contact")}</span>
          <span className="num">
            <FaPhoneAlt
              color="#00afef"
              size={15}
              style={{ marginRight: "5px", marginTop: "-2px" }}
            />
            +966582180110
          </span>
          <Switch />
        </div>
      </div>
      <div className="navbar-menu">
        <LeftDrawer />
      </div>
    </div>
  );
};

export default Navbar;
