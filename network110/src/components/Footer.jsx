import React from 'react';
import '../css/footer.css'; 

const Footer = () => {
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

      const Contact = () => {
        const servicesSection =
          document.getElementById("contact");
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      };

      const Home = () => {
        const servicesSection =
          document.getElementById("hero");
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          {/* <img src="https://img.freepik.com/premium-vector/cleaning-service_609550-333.jpg?w=740" style={{ width: '150px' }} alt="Logo" /> */}
          <h1>Network 110</h1>
        </div>
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul>
            <li onClick={()=>Home()}>بيت</li>
            <li onClick={()=>Services()}>خدمات</li>
            <li onClick={()=>About()}>معلومات عنا</li>
            <li onClick={()=>Contact()}>اتصل بنا</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>اتصل بنا</h3>
          <ul>
            <li>network110@gmail.com :بريد إلكتروني</li>
            <li>الهاتف: +966582180110</li>
            <li>العنوان: سوق العليا الرياض، المملكة العربية السعودية.</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 شبكة 110. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;