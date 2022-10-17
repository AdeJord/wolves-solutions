import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "auto",
    height: "auto",
    color: "black",
    background: "white",
  },
  left: {
    display: "flex",
    fontSize: '10px',
    alignItems: "center",
    justifyContent: "center",
    width: "33.3333333%",
    height: "15vh",
    // border: " black solid 1px",
  },
  center: {
    display: "flex",
    fontSize: '10px',
    alignItems: "center",
    justifyContent: "center",
    width: "33.3333333%",
    height: "15vh",
    // border: " black solid 1px",
  },
  right: {
    display: "flex",
    fontSize: '10px',
    alignItems: "center",
    justifyContent: "center",
    width: "33.3333333%",
    height: "15vh",
    // border: " black solid 1px",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.left}>Footer Left</div>
      <div className={classes.center}>Footer Center</div>
      <div className={classes.right}>Footer Right</div>
    </div>
  );
};

export default Footer;
