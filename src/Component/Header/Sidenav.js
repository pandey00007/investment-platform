import React, {  useState, forwardRef } from 'react';
import {List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
import './Navbar.css';
// import { ExpandLess, ExpandMore } from "@material-ui/icons";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import menuItems from './Sidedata';
import { NavLink as RouterLink, Link } from 'react-router-dom';

const Sidenav = (props) => {
    const [ menu, setMenu ] = useState({});
    const { className, ...rest } = props;
    
    const handleClick = (item) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }
    const CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));
    const handleMenu = ( children, level=0 ) => {
        return children.map(({children, name, url, links, icons }) => {
            if ( !children ) {
              return (
                <List component="div" disablePadding key={ name } >
                  <ListItem
                    
                    disableGutters
                   
                    key={name}
                  >
                    <i className={icons}></i>
                    <Link
                    
                      component={CustomRouterLink}
                      to={url}
                    >
                      {name}
                    </Link>
                  </ListItem>
                </List>
              )
            }
            return (
              <div key={ name } >
              <ListItem
                
                disableGutters
                key={name}
                onClick={() => handleClick(name)}
              >
              <i className={icons}></i>
                <Button id='add-btn'
                >
                  { name } { menu[ name ] ? <RemoveIcon /> : <AddIcon />}
                  </Button>
                </ListItem>
                <Collapse
                  in={ (menu[name]) ? true : false }
                  timeout="auto"
                  unmountOnExit
                >
                  { handleMenu( children, 1) }
                </Collapse>
              </div>
            )
        })
    }
return (
      <Drawer
          anchor="left"
          
          open={true}
          variant="persistent"
        >
          <List {...rest}  >
              { handleMenu(menuItems.data) }
          </List>
      </Drawer>
   )
}
export default Sidenav;