import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";
import Background from "../images/wolfGrey.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SCOimage from "../images/1.jpg";
import DSimage from "../images/IMG-7708.jpg";
import Card from "../components/Card";
import "./Home.css";
import "../components/Card.css";

const useStyles = makeStyles({
  main: {
    // border: " green solid 10px",
    height: "70vh",
    width: "auto",
    backgroundColor: "black",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "40vh",
    color: "white",
    paddingTop: "1vh",
    font: "roboto",
    fontSize: "2.5vh",
    overflow: "scroll",
    borderTop: "solid #eb8034 1px",
  },
  image: {
    width: "auto",
    height: "auto",
    // background: 'red',
    align: "center",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      {/* or ______Welcome to Wolves Solutions Limited. 
      Based in the West Midlands we provide Security Solutions for a wide range of industries throughout the whole of the UK. */}
      <br />
      <Typography
        variant="h2"
        fontWeight="500"
        fontFamily="Roboto"
        fontSize="2.5vh"
        align="center"
        color="white"
      >
        Welcome to Wolves Solutions Limited.
      </Typography>
      <br />
      <Typography
        variant="h6"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize=".75em"
        align="center"
        color="white"
        paddingLeft="20px"
        paddingRight="20px"
      >
        We are a security company based in the West Midlands however our client
        base is nationwide.
      </Typography>

      <p></p>
      <Typography
        variant="h4"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize=".7em"
        align="center"
        color="white"
        paddingLeft="20px"
        paddingRight="20px"
      >
        Here at Wolves, we pride ourselves on our reputation of delivering a
        high standard of effective security.
      </Typography>
      <br />

      <Typography
        variant="h3"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize=".75em"
        color="white"
        paddingLeft="20px"
        paddingRight="20px"
      >
        We offer high quality reliable personnel. Offering services with many
        years of experience within events, festivals, private, retail, and many
        more. Providing friendly professional guards to meet your requirements.
      </Typography>
      <br />
      <Typography
        variant="h1"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize="1em"
        align="center"
        color="white"
      >
        Services Provided include
      </Typography>
      <div className="main-container">
        <Card
          className="header"
          header="Steward / Customer Support Officer"
          imgSrc={SCOimage}
          alt="SCO Image"
          content="is a great way to introduce yourself
      to the security industry. Delivering a high standard of customer service
      skills to customers."
        />
        <Card
          className="content"
          header="SIA Door Supervisor"
          imgSrc={DSimage}
          alt="SIA Image"
          content="Sia door supervisors are highly trained, delivering a professional
        service which creates a safe event for customers to enjoy themselves."
        />
        <Card
          header="Another Card"
          imgSrc={DSimage}
          alt="Another Card"
          content="Another Card."
        />
      </div>
      <br />
      <Typography
        variant="p"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize=".85em"
        align="right"
        color="white"
      >
        Steward/CSO
      </Typography>
      <br />
      <div className={classes.image}></div>

      <br />
      {/* <Typography
        variant="p"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize=".85em"
        align="right"
        color="white"
      >
        Steward/ customer support officer, is a great way to introduce yourself
        to the security industry. Delivering a high standard of customer service
        skills to customers.
      </Typography> */}
      <Typography
        variant="p"
        fontWeight="300"
        fontFamily="Roboto"
        fontSize=".85em"
        align="right"
        color="white"
      >
        SIA Door Supervisor
      </Typography>
      {/* Image here */}

      <ul>
        <li>SIA DOORSUPERVISOR</li>
        <li>RETAIL SECURITY</li>
        <li>EVENT SECURITY</li>
        <li>SITE SECURITY</li>
        <li>KEY HOLDING</li>
        <li>MOBILE OFFICER</li>
        <li>STATIC GUARDING</li>
      </ul>
    </div>
  );
};

export default Home;
