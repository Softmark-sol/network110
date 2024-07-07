import React from "react";
import { useTranslation } from "react-i18next";
import Cards from "./Cards";
import "../css/aboutUs.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      heading: t("services.heading1"),
      img: img1,
    },
    {
      heading: t("services.heading2"),
      img: img2,
    },
    {
      heading: t("services.heading3"),
      img: img3,
    },
    {
      heading: t("services.heading4"),
      img: img4,
    },
    {
      heading: t("services.heading5"),
      img: img5,
    },
    {
      heading: t("services.heading6"),
      img: img6,
    },
    {
      heading: t("services.heading7"),
      img: img7,
    },
    {
      heading: t("services.heading8"),
      img: img8,
    },
    {
      heading: t("services.heading9"),
      img: img9,
    },
  ];

  return (
    <div className="about-us" id="services">
      <h1>
        <span>{t("services.title")}</span>
      </h1>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        {servicesData.map((service, index) => (
          <Cards
            key={index}
            heading={service.heading}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
