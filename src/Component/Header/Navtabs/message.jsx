import React from 'react'
import {Box, Menu, IconButton, ListItem, ListItemIcon, ListItemText, Avatar, List} from "@mui/material";

import SettingsIcon from '@mui/icons-material/Settings';
// import Badge from '@mui/material/Badge';
import ForumIcon from '@mui/icons-material/Forum';


export default function Message() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [

    {label:"Alex",icon:<SettingsIcon/>, desc:"likes your feed.."},
    {label:"Jadugar",icon:<SettingsIcon/>, desc:"likes your feed.."},
    {label:"Rupali",icon:<SettingsIcon/>, desc:"likes your feed.."},
    {label:"Ajay",icon:<SettingsIcon/>, desc:"likes your feed.."},
    
  ]
    return (
        <Box>
           
           <IconButton className='jyk'
        id="basic-button"
        aria-controls={open ? 'Message' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        <ForumIcon/>
       
        {/* <Badge badgeContent={4} color="secondary">
   
</Badge>
        */}
     
    
        
      </IconButton>
      <Menu
        id="Message"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <List className='navlist'>
        {dropDownData.map((item,i) =>  <ListItem key={i}   onClick={handleClose}>
            <ListItemIcon>
                <Avatar className='avtar-ul'> {item.label[0].toUpperCase()}</Avatar>
            </ListItemIcon>
            <ListItemText primary={item.label}
            secondary={item.desc}
            ></ListItemText>
            </ListItem> )}
            </List>
        
        
      </Menu> 
        </Box>
    )
}
