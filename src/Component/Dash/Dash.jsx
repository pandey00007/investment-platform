import React from 'react';
import './Dash.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import {ResponsiveContainer,LineChart,Line, YAxis,XAxis, BarChart, CartesianGrid, Tooltip  } from 'recharts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  
export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const xyz = [
    {
      id: 1,

      campaign: "Horizon Ventures",
      username: "Sam Bix",
      posteddate:"05-23-2022",
      investoramt: "$4,748.50 USD",
      earning: "$251.50 USD",
    },
    {
        id: 2,

        campaign: "	Self-Cleaning Robot",
        username: "Amaz Alex",
        posteddate:"05-12-2022",
        investoramt: "$5,000,000.00 USD",
        earning: "$160.50 USD",
      },
      {
        id: 3,

        campaign: "	Global Wealth Group",
        username: "	Sam Bix",
        posteddate:"	04-15-2022",
        investoramt: "	$1,899.50 USD",
        earning: "$100.50 USD",
      },
      {
        id: 4,

        campaign: "	Rockers Tech Sol",
        username: "	Sam Bix",
        posteddate:"03-03-2022",
        investoramt: "	$4,749.00 USD",
        earning: "$400.99 USD",
      },
    
   
  ];

  const abc = [
    {
      id: 1,

      campaign: "Enginuity Power Systems",
      username: "Dishank Bhatt",
      posteddate:"03-01-2022",
      campaigngoal: "$5,000,000.00 USD",
      amountraised: "$0.00 USD",
    },
    {
        id: 2,

        campaign: "PI Energy",
        username: "Amaz Alex",
        posteddate:"02-24-2022",
        campaigngoal: "$90,000.00 USD",
        amountraised: "$1,100.00 USD",
      },
      {
        id: 3,

        campaign: "	Self-Cleaning Robot",
        username: "Amaz Alex",
        posteddate:"02-24-2022",
        campaigngoal: "$800,000.00 USD",
        amountraised: "$17,000.00 USD",
      },
      {
        id: 4,

        campaign: "AI LENS - Document & File Scanner",
        username: "Amaz Alex",
        posteddate:"03-03-2022",
        campaigngoal: "$9,000,000.00 USD",
        amountraised: "$4,300.00 USD",
      },
      {
        id: 5,

        campaign: "	Global Wealth Group",
        username: "Sam Bix",
        posteddate:"03-03-2022",
        campaigngoal: "$9,000,000.00 USD",
        amountraised: "$500.00 USD",
      },
   
  ];

    const rows = [
        {
          id: 1,

          campaign: "Bulls-eye",
          username: "User One",
          posteddate:"06-24-2022",
          enddate: "01-31-2023",
          campaigngoal: "$2,500,000.00 USD",
        },
        
       
      ];
 const pdata= [
  {
day: 'Mon',
student: 7,
fee:4

 },
 {
  day: 'Tue',
  student: 9,
fee:7
 
   },
  {
   day: 'Wed',
   student: 2,
fee:3
 
  },
  {
    day: 'Thurs',
    student: 1,
fee:6
   
  },
  {
   day: 'Fri',
   student: 0,
fee:2

   
  },

 {
   day: 'Sat'

 },
 {
   day: 'Sun'

 },
];
const ydata= [
  {
month: 'Jan',
con:0 ,

 },
 {
  month: 'Feb',
  con: 3,
 
   },
  {
    month: 'Mar',
    con: 40,
 
  },
  {
    month: 'Apr',
    con: 70,

  },
  {
    month: 'May',
    con: 35,
  },

 {
  month: 'Jun',
  con: 52,

 },
 {
  month: 'Jul',
con: 46,

 },
 {
  month: 'Aug',
con:53 ,

 },
 {
  month: 'Sept',
con: 0,

 },
 {
  month: 'Oct',


 },
 {
  month: 'Nov',


 },
 {
  month: 'Dec',


 },
];

    return(
        <div className="home_dash">
         
         <div className="home-top">Dashboard</div>
    <div className="title-home">
        <div className="icon-ho"><HomeIcon/></div>
        <div className="dash_head">
            Dashboard
        </div>
    </div>
        <div className="featured">
               <div className="fetauredchart">
        <CircularProgressbar value={70} text={"70%"} className="progress" strokeWidth={6}/>
        <h4>293</h4>
        <p>New Users</p>
         </div>
          <div className="fetauredchart">
        <CircularProgressbar value={70} text={"70%"} className="progress" strokeWidth={6}/>
        <h4>1</h4>
        <p>Pending Campaigns</p>
        </div>
        <div className="fetauredchart">
        <CircularProgressbar value={70} text={"70%"} className="progress" strokeWidth={6}/>
        <h4>7</h4>
        <p>Running Campaigns</p>
         </div>
          <div className="fetauredchart">
        <CircularProgressbar value={70} text={"70%"} className="progress" strokeWidth={6}/>
        <h4>4</h4>
        <p>Successful Campaigns</p>
        </div>
        <div className="fetauredchart">
        <CircularProgressbar value={70} text={"70%"} className="progress" strokeWidth={6}/>
        <h4>0</h4>
        <p>Unsuccessful Campaigns</p>
         </div>
          <div className="fetauredchart">
        <CircularProgressbar value={70} text={"70%"} className="progress" strokeWidth={6}/>
        <h4>45</h4>
        <p>Running Invest</p>
        </div>
          </div>

          <div className="dash_tbl">
          <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>

          <div className="tbl">
            
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Last 10 Pending Campaigns</div>
            </div></div>
            
        </div>
            {/* <div className="tbl_title">
            <div className='icon-recorder'> <MenuIcon/></div>
               <div> <h3>Last 10 Pending Campaigns</h3></div>
                </div> */}
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
             <div className="ho_tbl">
          <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 850 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell align="center" >Campaign</TableCell>
          <TableCell align="center">Username</TableCell>
          <TableCell align="center">Posted Date</TableCell>
          <TableCell align="center">End Date</TableCell>
          <TableCell align="center">Campaign Goal</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell >
              {row.id}
            </TableCell>
            
            <TableCell align="center">{row.campaign}</TableCell>
            <TableCell align="center">{row.username}</TableCell>
            <TableCell align="center">{row.posteddate}</TableCell>
            <TableCell align="center">{row.enddate}</TableCell>
            
             <TableCell align="center" className={'status ${row.status}'} >{row.campaigngoal}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </Typography>
        </AccordionDetails>
        
      </Accordion>
     
  </div>

  <div className="tbl">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Last 5 New Running Campaigns</div>
            </div></div>
            
        </div>
        
            </AccordionSummary>
            <AccordionDetails>
          <Typography> 
             <div className="ho_tbl">
          <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 850 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell align="center" >Campaign</TableCell>
          <TableCell align="center">Username</TableCell>
          <TableCell align="center">Posted Date</TableCell>
          <TableCell align="center">Campaign Goal</TableCell>
          <TableCell align="center">Amount Raised</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {abc.map((abc) => (
          <TableRow
            key={abc.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell >
              {abc.id}
            </TableCell>
            
            <TableCell align="center">{abc.campaign}</TableCell>
            <TableCell align="center">{abc.username}</TableCell>
            <TableCell align="center">{abc.posteddate}</TableCell>
            <TableCell align="center">{abc.campaigngoal}</TableCell>
            
             <TableCell align="center" className={'status ${row.status}'} >{abc.amountraised}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </Typography>
        </AccordionDetails>
        
      </Accordion>
  </div>

  <div className="tbl">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Last 5 Completed Campaigns</div>
            </div></div>
            
        </div>
          
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
             <div className="ho_tbl">
          <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 850 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell align="center" >Campaign</TableCell>
          <TableCell align="center">Username</TableCell>
          <TableCell align="center">Posted Date</TableCell>
          <TableCell align="center">	Investor Amt</TableCell>
          <TableCell align="center">Earning</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {xyz.map((xyz) => (
          <TableRow
            key={xyz.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell >
              {xyz.id}
            </TableCell>
            
            <TableCell align="center">{xyz.campaign}</TableCell>
            <TableCell align="center">{xyz.username}</TableCell>
            <TableCell align="center">{xyz.posteddate}</TableCell>
            <TableCell align="center">{xyz.investoramt}</TableCell>
            
             <TableCell align="center" className={'status ${row.status}'} >{xyz.earning}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </Typography>
        </AccordionDetails>
        
      </Accordion>
  </div>

  <div className="tbl">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Last 5 Unsuccessful Campaigns</div>
            </div></div>
            
        </div>
         
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
             <div className="ho_tbl">
          <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 850 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No Record Found</TableCell>
         
        </TableRow>
      </TableHead>
   
    </Table>
  </TableContainer>
  </div>
  </Typography>
        </AccordionDetails>
        
      </Accordion>
  </div>
  </TabPanel>
  <TabPanel value={value} index={1}>
    <div className="Line-ch">
  <div className="Line-chart1">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Weekly Average Registration [Line]</div>
            </div></div>
            
        </div>
            
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
   
      <ResponsiveContainer width="100%"aspect={3}>
      <LineChart width={100} height={250} data={pdata}
  margin={{ top: 10, right: 5, left: 10, bottom: 5 }}>
 <CartesianGrid/>
  <XAxis dataKey="day" interval={'preserveStartEnd'} stroke="green"/>

  <YAxis stroke="red"/>
  <Tooltip/>
  <Line dataKey="student" stroke="orange" activeDot={{r:8}}/>
  <Line dataKey="fee" stroke="blue" activeDot={{r:8}}/>
 
</LineChart>
    </ResponsiveContainer>
    </Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>

    <div className="Line-chart2">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Weekly Average Registration [Line]</div>
            </div></div>
            
        </div>
            
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
   
      <ResponsiveContainer width="100%"aspect={3}>
      <BarChart width={100} height={80} data={pdata}
  margin={{ top: 10, right: 5, left: 10, bottom: 5 }}>
 
  <XAxis dataKey="day" interval={'preserveStartEnd'} />

  <YAxis />
  <Line dataKey="student" />
 
</BarChart>
    </ResponsiveContainer>
    </Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>
    </div>

    <div className="Line-ch">
  <div className="Line-chart1">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Monthly Average Registration [Line]</div>
            </div></div>
            
        </div>
            
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
   
      <ResponsiveContainer width="100%"aspect={3}>
      <LineChart width={100} height={80} data={ydata}
  margin={{ top: 10, right: 5, left: 10, bottom: 5 }}>
 <CartesianGrid/>
  <XAxis dataKey="month" interval={'preserveStartEnd'} stroke="green"/>

  <YAxis />
  <Tooltip/>
  <Line dataKey="con" stroke="orange" activeDot={{r:8}}/>
 
</LineChart>
    </ResponsiveContainer>
    </Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>

    <div className="Line-chart2">
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="topbar">
           <div className="left-topbar"> <div className="bar-icons"></div>
            <div className="transaction-bar">
             <div className="menu"><MenuIcon/></div><div className="title-bar">Weekly Average Registration [Line]</div>
            </div></div>
            
        </div>
            
            </AccordionSummary>
            <AccordionDetails>
          <Typography>
   
      <ResponsiveContainer width="100%"aspect={3}>
      <BarChart width={100} height={80} data={pdata}
  margin={{ top: 10, right: 5, left: 10, bottom: 5 }}>
 
  <XAxis dataKey="day" interval={'preserveStartEnd'} />

  <YAxis />
  <Line dataKey="student" />
 
</BarChart>
    </ResponsiveContainer>
    </Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>
    </div>
  </TabPanel>
</Box>
  </div>

        </div>

    )
}