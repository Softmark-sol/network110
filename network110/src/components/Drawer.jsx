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
import {  AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { MdWork } from 'react-icons/md';

const LeftDrawer = () => {
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

  const handleNavigation = (text) => {
    // Implement your navigation logic here
    console.log(`Navigate to ${text}`);
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
            { text: 'خدمات', icon: <AiOutlineInfoCircle color="#4599B4" /> },
          { text: 'معلومات عنا', icon: <FaRegAddressBook color="#4599B4" /> },
          { text: 'اتصل بنا', icon: <MdWork color="#4599B4" /> },           
          { text: '+966582180110', icon: <FaPhoneAlt color="#4599B4" /> },

        ].map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{ paddingLeft: '8px' }}
              onClick={() => handleNavigation(text)}
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
      <Button onClick={toggleDrawer('left', true)}><GiHamburgerMenu /></Button>
      <Drawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default LeftDrawer;