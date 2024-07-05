import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "ar", lang: "Arabic" },
];

const Switch = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    // You may want to handle direction changes based on selectedLanguage here if needed
    // document.body.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [selectedLanguage]);

  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === languages[0].code ? languages[1].code : languages[0].code;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
      <button onClick={toggleLanguage}>
        {selectedLanguage === languages[0].code ? languages[1].lang : languages[0].lang}
      </button>
  );
};

export default Switch;
