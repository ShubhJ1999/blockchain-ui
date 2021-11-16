import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// data
import { DrawerList } from '../data/DrawerList';

export default function CustomDrawer() {    
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Drawer
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        background: 'transparent',
                        width: 225,
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
                        {DrawerList.map((item) => {
                            return (
                                <>
                                    {item.children
                                        ? <>
                                            <ListItemButton onClick={handleClick}>
                                                <img src={item.src} alt={item.title} />&nbsp;&nbsp;
                                                <ListItemText primary={item.title} sx={{fontWeight: open?'bold':'normal'}} />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItemButton>
                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {item.children.map((child) => {
                                                        return (
                                                            <ListItemButton 
                                                                sx={{ 
                                                                    pl: 5.7, 
                                                                    fontWeight: 'normal', 
                                                                    fontSize: '14px'
                                                                }}
                                                            >
                                                                {child}
                                                            </ListItemButton>
                                                        )
                                                    })}
                                                </List>
                                            </Collapse>
                                        </>
                                        : <>
                                            <ListItem>
                                                <img src={item.src} alt={item.title} />
                                                &nbsp;&nbsp;{item.title}
                                            </ListItem>
                                        </>
                                    }
                                </>
                            )
                        })}
                    </List>
            </Drawer>
        </>
    )
}