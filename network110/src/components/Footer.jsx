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
      <div className="footer-section">
          <h2>{t('footer.services.services')}</h2>
          <ul>
            <li >{t('footer.services.a')}</li>
            <li >{t('footer.services.b')}</li>
            <li >{t('footer.services.c')}</li>
            <li >{t('footer.services.d')}</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>{t('footer.quickLinks')}</h2>
          <ul>
            <li onClick={() => scrollToSection('hero')}>{t('footer.links.home')}</li>
            <li onClick={() => scrollToSection('services')}>{t('footer.links.services')}</li>
            <li onClick={() => scrollToSection('about')}>{t('footer.links.aboutUs')}</li>
            <li onClick={() => scrollToSection('form')}>{t('footer.links.contactUs')}</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>{t('footer.contact.contact')}</h2>
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
