import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// components
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Widget from './components/Widget';
import Table from './components/Table';
import Chart from './components/Chart';

// utils
import Typography from './utils/Typography';

// data
import { WidgetDataList } from './data/WidgetDataList';
import { TableData } from './data/TableData';

// assets
import BackgroundImage from './assets/images/background.png';

function App() {
  return (
    <Box
      sx={{
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
            backgroundColor: '#1C1D23', 
            borderTopLeftRadius: '25px', 
            padding: 2,
            marginTop: 10
          }}
        >
          <Grid item xs={12}>
            <Typography color="white" fontSize="28px" fontWeight="bold" letterSpacing="2px">
              TENKA Statistics
            </Typography>
            <Widget dataList={WidgetDataList} />
          </Grid>
          
          <Grid container item spacing={2} sx={{marginTop: 0}}>
            <Grid item xs={8}>
              <Table rows={TableData} />
            </Grid>
            <Grid item xs={4}>
              <Chart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;