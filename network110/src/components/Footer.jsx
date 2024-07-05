import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <h1>{t('footer.logo')}</h1>
        </div>
        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li onClick={() => scrollToSection('hero')}>{t('footer.links.home')}</li>
            <li onClick={() => scrollToSection('services')}>{t('footer.links.services')}</li>
            <li onClick={() => scrollToSection('about')}>{t('footer.links.aboutUs')}</li>
            <li onClick={() => scrollToSection('form')}>{t('footer.links.contactUs')}</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('footer.contact.contact')}</h3>
          <ul>
            <li>{t('footer.contact.phone')}</li>
            <li>{t('footer.contact.address')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
