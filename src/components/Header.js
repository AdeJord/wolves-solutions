import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import wolvesBadge from "../images/wolvesBadge.jpg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SideBar from "./SideBar";
import NavLinks from "../Navigation/NavLinks";
import NavBar from "../Navigation/NavBar";
import Backdrop from './Backdrop'
import "./../Navigation/MainNav.css";
import "./Sidebar.css";
import './Header.css'

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "14vh",
    color: "white",
    background: "black",
    fontSize: "14px",
    paddingBottom: '25px',
  },
  left: {
    display: "flex",
    alignItems: "flex-end",
    paddingLeft: '25px',
    justifyContent: "left",
    width: "25vw",
    height: "100%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    fontSize: "6vw",
    justifyContent: "center",
    objectFit: "cover",
    paddingTop: "5px",
    width: "40vh",
    height: "100%",
    color: "orange",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25vw",
    height: "100%",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideBar show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideBar>
      <div className={classes.container}>
        <div className={classes.left}>
          <a style={{color: '#348feb'}} href='https://www.facebook.com/groups/102407936939834'>
            <FacebookIcon style={{fontSize: '4vh'}} />
            </a>
            <a style={{color: 'white'}} href='https://www.instagram.com/wolvessolutionsltd/'>
            <InstagramIcon style={{fontSize: '4vh'}} />
            </a>
            </div>
        <div className={classes.center}>
          <img src={wolvesBadge} width="70%" height="60%" alt="Wolves Badge" />
        </div>
        <div className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <MenuRoundedIcon style={{ fontSize: '4vh'}}/>
          Menu
        </div>
      </div>
      <NavBar />
    </React.Fragment>
  );
};

export default Header;
