import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// components
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Widget from './components/Widget';

// utils
import Typography from './utils/Typography';
// import Button from './utils/Button';

// assets
import BackgroundImage from './assets/images/background.png';

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#17181E',
        backgroundImage: `url(${BackgroundImage})`
      }}
    >
      <Navigation />
      <Grid container item xs={12}>
        <Grid item xs={2}>
          <Drawer />
        </Grid>
        
        <Grid 
          item 
          xs={10}
          sx={{
            // height: '85vh', 
            backgroundColor: '#1C1D23', 
            borderTopLeftRadius: '25px', 
            padding: 2,
            marginTop: 1
          }}
        >
          <Typography color="white" fontSize="28px" fontWeight="bold" letterSpacing="2px">
            TENKA Statistics
          </Typography>
          <Widget />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
