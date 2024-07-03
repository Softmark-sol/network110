import React from "react";
import "../css/navbar.css";
import LeftDrawer from "./Drawer";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const Services = () => {
    const servicesSection =
      document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const About = () => {
    const servicesSection =
      document.getElementById("about");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="navbar1">
      <div className="left1">
        <h2>
          Network 110
          {/* الشبكة 110 */}
        </h2>
      </div>
      <div className="right1">
        <div>
          <span onClick={() => Services()}>
            {/* Services */}
            خدمات
          </span>
          <span onClick={() => About()}>
            {/* About Us */}
            معلومات عنا
          </span>
          <span>
            {/* Contact Us */}
            اتصل بنا
          </span>
          <span className="num">
            <FaPhoneAlt
              color="#6132f1"
              size={15}
              style={{ marginRight: "10px" }}
            />
            +966582180110
          </span>
        </div>
      </div>
      <div className="navbar-menu">
        <LeftDrawer />
      </div>
    </div>
  );
};

export default Navbar;
