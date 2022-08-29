import React from 'react'
import {Box, Menu, MenuItem, Button, ListItem, ListItemIcon, ListItemText, Avatar} from "@mui/material";

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

export default function Profile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [

    {label:"setting",icon:<SettingsIcon/>},
    {label:"logout",icon:<LogoutIcon/>},
  ]
    return (
        <Box>
           
           <Button className="navavtar"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<Avatar><PersonIcon /></Avatar>}
      >
       
     
    
       <span>Admin</span>
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {dropDownData.map((item,i) =>  <MenuItem key={i} component={ListItem}  onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText id='nav-pro'>{item.label}</ListItemText>
            </MenuItem> )}
        
        
      </Menu> 
        </Box>
    )
}
