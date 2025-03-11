// src/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Logo from './assets/TruLightHorizontal.png'; // Ensure your logo is in src/assets/

const Header = () => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 40, mr: 2 }}
          alt="TruLight Logo"
          src={Logo}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Safety Risk Classifier
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
