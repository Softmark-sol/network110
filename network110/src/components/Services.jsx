import React from "react";
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
  const servicesData = [
    {
      heading: "تمديد كابل الإنترنت",
      desc: "تمديد داخلي مخفي دون كسر.",
      f1: "تمديد سلس",
      f2: "دون انقطاع كبير",
      img: img1,
    },
    {
      heading: "تركيب وبرمجة أجهزة الراوتر ونقاط الوصول",
      desc: "إعداد وتكوين أجهزة الشبكة.",
      f1: "أداء شبكي محسن",
      f2: "إعداد آمن",
      img: img2,
    },
    {
      heading: "تركيب وإنشاء كاميرات المراقبة",
      desc: "إعداد أنظمة المراقبة وتمديد كابلات الكاميرا.",
      f1: "أمان معزز",
      f2: "تركيب احترافي",
      img: img3,
    },
    {
      heading: "فحص وصيانة الإنترنت",
      desc: "حل جميع مشاكل الإنترنت بما في ذلك الاتصالات الضعيفة والمتقطعة.",
      f1: "إنترنت موثوق",
      f2: "خدمات الإصلاح",
      img: img4,
    },
    {
      heading: "تركيب كابلات الإنترنت ورؤوس RJ45",
      desc: "تركيب احترافي لكابلات الإنترنت والرؤوس.",
      f1: "اتصالات عالية الجودة",
      f2: "تركيب متخصص",
      img: img5,
    },
    {
      heading: "حلول لمشاكل الإنترنت والكاميرات والكهرباء",
      desc: "حلول شاملة لجميع المشاكل ذات الصلة.",
      f1: "حلول فعالة",
      f2: "إصلاح متخصص",
      img: img6,
    },
    {
      heading: "صيانة وإعداد وتشغيل الشبكات",
      desc: "صيانة دورية وإعداد تشغيلي للشبكات.",
      f1: "أداء شبكي مثالي",
      f2: "دعم مستمر",
      img: img7,
    },
    {
      heading: "اتصال إنترنت في جميع أنحاء المنزل",
      desc: "ضمان سرعة إنترنت متسقة في جميع أنحاء المنزل.",
      f1: "تغطية للمنزل بأكمله",
      f2: "أداء مستقر",
      img: img8,
    },
    {
      heading: "تركيب الإنترنت والكاميرات في مواقع متنوعة",
      desc: "خدمات للمنازل والمكاتب والفنادق والمتاجر.",
      f1: "تركيب متعدد الاستخدامات",
      f2: "حلول مخصصة",
      img: img9,
    },
    {
      heading: "حلول كهربائية وتركيب كابلات",
      desc: "حلول لمشاكل الكهرباء والتركيبات الكهربائية.",
      f1: "عمل كهربائي آمن وموثوق",
      f2: "خدمة مهنية",
      img: img10,
    },
  ];

  return (
    <div className="about-us" id="services">
      <h1>خدماتنا</h1>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "100px",
          marginLeft: "200px",
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
