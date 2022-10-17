import React from "react";
import { makeStyles } from "@material-ui/styles";
import Background from "../images/wolfGrey.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './Gallery.css'

import { ImageGroup, Image } from 'react-fullscreen-image'

const itemData = [
  {
    img: "https://i.imgur.com/E8KJqYv.jpg",
    title: "The Team",
  },
  {
    img: "https://i.imgur.com/potQxzo.jpg",
    title: "Peaky Blinders",
  },
  {
    img: "https://i.imgur.com/XTwLIbZ.jpg",
    title: "Football",
  },
  {
    img: "https://i.imgur.com/htJFHCd.jpg",
    title: "Relaxing",
  },
  {
    img: "https://i.imgur.com/SNda9ab.jpg",
    title: "More Team",
  },
  {
    img: "https://i.imgur.com/TU4LLMf.jpg",
    title: "Creamfields",
  },
  {
    img: "https://i.imgur.com/qk4DPzi.jpg",
    title: "Dinner Time",
  },
  {
    img: "https://i.imgur.com/7kRo0YE.jpg",
    title: "Memoirs Bar",
  },
  {
    img: "https://i.imgur.com/CjLBD5m.jpg",
    title: "Wrist Bands",
  },
  {
    img: "https://i.imgur.com/nK69uUp.jpg",
    title: "More Team",
  },
  {
    img: "https://i.imgur.com/rSXwrkl.jpg",
    title: "Ocean Bottle",
  },  
  
  {
    img: "https://i.imgur.com/T6xtvnY.jpg",
    title: "Download",
  },
  {
    img: "https://i.imgur.com/63EjzzI.jpg",
    title: "Downtown Village",
  },
  {
    img: "https://i.imgur.com/qNbliLM.jpg",
    title: "Wolves Winner",
  },
];

const images = [
  'https://i.imgur.com/E8KJqYv.jpg',
  'https://i.imgur.com/qNbliLM.jpg',
  'https://i.imgur.com/63EjzzI.jpg',
  'https://i.imgur.com/rSXwrkl.jpg'
]

const Images = () => {
  return (
    <ImageList sx={{ width: "auto", height: "55vh" }} cols={3} rowHeight='auto'>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={console.log('clicked')}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const useStyles = makeStyles({
  main: {
    border: " black solid 1px",
    height: "70vh",
    backgroundColor: "black",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "45vh",
    color: "white",
    paddingLeft: "15vw",
    paddingRight: "15vw",
    paddingTop: "4vh",
    font: "roboto",
    fontSize: "2vh",
    textAlign: "center",
  },
});

const Gallery = () => {
  const classes = useStyles();

  // return (
  //   <div className={classes.main}>
  //           <Typography variant="h5" style={{fontWeight: "400",fontFamily: "Roboto", fontSize: '1em'}}>
  //           Gallery
  //     </Typography>
  //     <Images />
  //   </div>
  // );

  return (
    <div className="container">
      <ImageGroup>
        <ul className="images">
          {itemData.map(i => (
            <li key={i.img}>
              <Image 
              src={i.img} 
              alt={i.title}
              style={{
                width: '100%',
                height: '100%', 
                // paddingBottom: '10px'
              }}
              />
            </li>
          ))}
        </ul>
      </ImageGroup>
    </div>
  )
};

export default Gallery;
