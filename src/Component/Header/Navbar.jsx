import React from 'react';
import { AppBar, Toolbar, Typography, Box} from "@mui/material";


import './Navbar.css';
import Profile from './Navtabs/profile';
import Notification from './Navtabs/notification';
import Message from './Navtabs/message';
import Download from './download.png';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
 






 
export default function Navbar() {
 
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };
  return (
    <AppBar position="static">
      
        <Toolbar className='tlbar'>
          
         
          <Typography variant="h6">
          <img src={Download} className='download' alt="download"/>
          
          </Typography>
         
         
          
          
            <Box style={{display:"flex"}} className="ml-2">
            <Notification />
              <Message />
            
              
              
            </Box>
            <Typography variant="h6" className='paragraph'>
            This demo is in sandbox mode and you will have limited access to the admin panel options. Have a question? 
          
          </Typography>
          <Typography variant="h6" className='paragraph1'>
          Contact Us
 
          
          </Typography>

          <Profile />




          {/* <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div> */}
        </Toolbar>
      </AppBar>
  );
}
