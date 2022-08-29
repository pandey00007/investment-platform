
import React from 'react';

import Navbar from './Header/Navbar'

import Dash from './Dash/Dash';

import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Blogcomponent from './Dashboard/Blogcomponent';
import Notification from './Dashboard/Notification';
import Link from './Dashboard/Link';
import Logout from './Dashboard/Logout';
import LoginForm from './LoginForm/LoginForm';



export default function HeaderComponent() {
    return (
        <div className='scroller-btn'>
           <Navbar />
           
           <Dash/>
           {/* registration all routes */}
           
           <Routes>
        {/* <Route exact path="/" element={<Dashboard/>} /> */}
        <Route exact path="/blogs" element={<Blogcomponent/>} />
        <Route exact path="/link" element={<Link/>} />        
        <Route exact path="/notification" element={<Notification/>} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/loginform" element={<LoginForm/>} />

        
    
      </Routes>
      
        </div>
    )
}
