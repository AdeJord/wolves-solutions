import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import "./NavLink.css";

const useStyles = makeStyles({
  container: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "right",
    fontSize: "1.5vw",
  },
});

const NavLinks = () => {
  const classes = useStyles();

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/enquiry">Enquiry</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
