
import React from 'react';

import Navbar from './Header/Navbar'
import Sidenav from './Header/Sidenav';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Blogcomponent from './Dashboard/Blogcomponent';
import Notification from './Dashboard/Notification';
import Link from './Dashboard/Link';
import Logout from './Dashboard/Logout';

export default function HeaderComponent() {
    return (
        <div>
           <Navbar />
           <Sidenav />
           {/* registration all routes */}
           
           <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/blogs" element={<Blogcomponent/>} />
        <Route exact path="/link" element={<Link/>} />        
        <Route exact path="/notification" element={<Notification/>} />
        <Route exact path="/logout" element={<Logout/>} />
    
      </Routes>
      
        </div>
    )
}
