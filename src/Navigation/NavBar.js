import React from "react";
import NavLinks from "./NavLinks";
import { makeStyles } from "@material-ui/styles";
import './NavLink.css'
import '../Navigation/MainNav.css'

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    height: "8vh",
    color: "white",
    background: "black",
    fontSize: "14px",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className={'main-navigation__header-nav'}>
      <NavLinks />
    </nav>
  );
};

export default NavBar;
