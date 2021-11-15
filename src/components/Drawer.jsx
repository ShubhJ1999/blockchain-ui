import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// assets
import More from '../assets/images/More.png';
import Documents from '../assets/images/Documents.png';
import Governance from '../assets/images/Governance.png';
import Pools from '../assets/images/Pools.png';
import Statistics from '../assets/images/Statistics.png';
import Tournaments from '../assets/images/Tournaments.png';
import Wallet from '../assets/images/Wallet.png';

export default function CustomDrawer({ children }) {
    return (
        <>
            <Drawer
                sx={{
                    width: 200,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        background: 'transparent',
                        width: 200,
                        boxShadow: 0,
                        border: 0
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Toolbar />
                    <List sx={{color: '#ACB2CF', fontSize: '15px', fontFamily: 'Sans-serif', fontWeight: 'bold'}}>
                        <ListItem>
                            <img src={Tournaments} alt="Tournaments" />
                            &nbsp;&nbsp;Tournaments
                        </ListItem>
                        <ListItem>
                            <img src={Statistics} alt="Statistics" />
                            &nbsp;&nbsp;Statistics
                        </ListItem>
                        <ListItem>
                            <img src={Pools} alt="Pools" />
                            &nbsp;&nbsp;Pools
                        </ListItem>
                        <ListItem>
                            <img src={Wallet} alt="Wallet" />
                            &nbsp;&nbsp;Wallet
                        </ListItem>
                        <ListItem>
                            <img src={Governance} alt="Governance" />
                            &nbsp;&nbsp;Governance
                        </ListItem>
                        <ListItem>
                            <img src={Documents} alt="Documents" />
                            &nbsp;&nbsp;Documents
                        </ListItem>
                        <ListItem>
                            <img src={More} alt="More" />
                            &nbsp;&nbsp;More
                        </ListItem>
                    </List>
            </Drawer>
        </>
    )
}