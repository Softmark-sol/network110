import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { MdWork } from 'react-icons/md';
import Switch from '../languageSelector/Switch';
import { useTranslation } from 'react-i18next';

const LeftDrawer = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Services = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const About = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
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

  const handleNavigation = (text) => {
    switch(text){
      case 'services':
        Services();
        break;
      case 'aboutUs':
        About();
        break;
      case 'contactUs':
        Contact();
        break;
      default:
        console.log(`Navigate to ${text}`);
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: t('Services'), icon: <AiOutlineInfoCircle color="#00afef" />, key: "services" },
          { text: t('AboutUs'), icon: <FaRegAddressBook color="#00afef" />, key: "aboutUs" },
          { text: t('contactUs'), icon: <MdWork color="#00afef" />, key: "contactUs" },           
          { text: '+966582180110', icon: <FaPhoneAlt color="#00afef" />, key: "phone" },
        ].map(({ text, icon, key }) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              sx={{ paddingLeft: '8px' }}
              onClick={() => handleNavigation(key)}
            >
              <ListItemIcon
                sx={{ minWidth: '35px', color: '#1976d2' }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><GiHamburgerMenu size={25} color='#00afef'/></Button>
      <Drawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
        <Switch />  
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
