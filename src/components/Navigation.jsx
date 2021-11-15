import React from 'react';

// apis
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from "@mui/material/MenuItem";

// utils
import Typography from '../utils/Typography';
import TextField from '../utils/TextField';
import Dropdown from '../utils/Dropdown';

// assets
import IgniteLogo from '../assets/images/ignite_logo.png';
import Thumbnail1 from '../assets/images/thumbnail_1.png';
import Thumbnail2 from '../assets/images/thumbnail_2.png';

export default function Navigation() {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                    position="static" 
                    sx={{background: 'transparent', boxShadow: 0}}
                >
                    <Toolbar>
                        <Box 
                            variant="body1" 
                            component="div" 
                            sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
                        >
                            <img 
                                src={IgniteLogo} 
                                alt="Ignite Logo" 
                                style={{width: '10rem'}} 
                            />
                            <TextField 
                                placeholder="Search" 
                                style={{display: 'inline', marginLeft: '40px'}} 
                            />
                        </Box>
                        
                        <Typography 
                            variant="body2" 
                            color="#ACB2CF" 
                            sx={{marginRight: '1rem'}}
                        >
                            Friends
                        </Typography>
                        
                        <Dropdown>
                            <MenuItem value="First">
                                <img src={Thumbnail2} alt="550" style={{width: '1.3rem'}} />&nbsp; 550
                            </MenuItem>
                        </Dropdown>
                        
                        <Dropdown>
                            <MenuItem value="First">
                                <img src={Thumbnail1} alt="IgnitePro" style={{width: '2rem'}} />&nbsp; IgnitePro
                            </MenuItem>
                        </Dropdown>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}