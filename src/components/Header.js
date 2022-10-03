import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import wolvesBadge from "../images/wolvesBadge.png";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SideBar from "./SideBar";
import NavLinks from "../Navigation/NavLinks";
import NavBar from "../Navigation/NavBar";
import './../Navigation/MainNav.css'
import './Sidebar.css'

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "auto",
    height: "13vh",
    color: "white",
    background: "black",
    fontSize: "14px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25vw",
    height: "100%",
    border: " black solid 1px",
  },
  center: {
    display: "flex",
    alignItems: "center",
    fontSize: "6vw",
    justifyContent: "center",
    objectFit: 'cover',
    paddingTop: '5px',
    width: "50vw",
    height: "100%",
    border: " black solid 1px",
    color: "orange",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25vw",
    height: "100%",
    border: " black solid 1px",
  }
});

const Header = () => {

  const classes = useStyles();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
      setDrawerIsOpen (true);
  };

  const closeDrawerHandler = () => {
      setDrawerIsOpen (false)
  };

  return (
    <React.Fragment>
    <SideBar show={drawerIsOpen} onClick={closeDrawerHandler}>
      <nav className='main-navigation__drawer-nav'><NavLinks style={{ flexDirection: 'column'}}/></nav>
    </SideBar>
    <div className={classes.container}>
      <div className={classes.left}>Header Left</div>
      <div className={classes.center}>
        <img 
        src={wolvesBadge} 
        width='85%' 
        height='85%' 
        alt="Wolves Badge" />
      </div>
      <div
       className={classes.right}><MenuRoundedIcon 
      onClick={openDrawerHandler}/>
      </div>
    </div>
    <NavBar />
    </React.Fragment>
  );
};

export default Header;
