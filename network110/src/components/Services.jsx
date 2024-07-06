import React from "react";
import { useTranslation } from "react-i18next";
import Cards from "./Cards";
import "../css/aboutUs.css";
import img1 from "../assets/images/cable.jpg";
import img2 from "../assets/images/installing.jpg";
import img3 from "../assets/images/camera.jpg";
import img4 from "../assets/images/maintenance.jpeg";
import img5 from "../assets/images/RJ45-headers.jpg";
import img6 from "../assets/images/solutions.jpg";
import img7 from "../assets/images/network-maintenance.jpg";
import img8 from "../assets/images/throughout-house.jpg";
import img9 from "../assets/images/camera2.jpg";
import img10 from "../assets/images/electrical-installation.jpg";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      heading: t("services.heading1"),
      desc: t("services.desc1"),
      f1: t("services.f1_1"),
      f2: t("services.f2_1"),
      img: img1,
    },
    {
      heading: t("services.heading2"),
      desc: t("services.desc2"),
      f1: t("services.f1_2"),
      f2: t("services.f2_2"),
      img: img2,
    },
    {
      heading: t("services.heading3"),
      desc: t("services.desc3"),
      f1: t("services.f1_3"),
      f2: t("services.f2_3"),
      img: img3,
    },
    {
      heading: t("services.heading4"),
      desc: t("services.desc4"),
      f1: t("services.f1_4"),
      f2: t("services.f2_4"),
      img: img4,
    },
    {
      heading: t("services.heading5"),
      desc: t("services.desc5"),
      f1: t("services.f1_5"),
      f2: t("services.f2_5"),
      img: img5,
    },
    {
      heading: t("services.heading6"),
      desc: t("services.desc6"),
      f1: t("services.f1_6"),
      f2: t("services.f2_6"),
      img: img6,
    },
    {
      heading: t("services.heading7"),
      desc: t("services.desc7"),
      f1: t("services.f1_7"),
      f2: t("services.f2_7"),
      img: img7,
    },
    {
      heading: t("services.heading8"),
      desc: t("services.desc8"),
      f1: t("services.f1_8"),
      f2: t("services.f2_8"),
      img: img8,
    },
    {
      heading: t("services.heading9"),
      desc: t("services.desc9"),
      f1: t("services.f1_9"),
      f2: t("services.f2_9"),
      img: img9,
    },
    {
      heading: t("services.heading10"),
      desc: t("services.desc10"),
      f1: t("services.f1_10"),
      f2: t("services.f2_10"),
      img: img10,
    },
  ];

  return (
    <div className="about-us" id="services">
      <h1><span>{t('services.title')}</span></h1>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          // marginTop: "100px",
        }}
      >
        {servicesData.map((service, index) => (
          <Cards
            key={index}
            heading={service.heading}
            desc={service.desc}
            f1={service.f1}
            f2={service.f2}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
