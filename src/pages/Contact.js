import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Background from '../images/wolfGrey.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  main: {
    border: ' black solid 1px',
    height: '70vh',
    backgroundColor : 'black',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    backgroundSize: '45vh',
    color: 'white',
    paddingLeft: '15vw',
    paddingRight: '15vw',
    paddingTop: '4vh',
    font: 'roboto',
    fontSize: '2vh',
    textAlign: 'center'
  }
})

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link style={{fontSize: '2vh', color: 'orange'}} 
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

const Contact = () => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
  <p style={{fontSize: '2.5vh'}}>Contact Us</p>
  <p style={{fontSize: '3vh'}}>WOLVES SECURITY LIMITED</p>
  <p style={{fontSize: '2vh'}}>Supplying security to industry, leisure, and retail events</p>
  <p style={{fontSize: '2vh'}}>For more information please email <ButtonMailto label="info@wolvessolutionsltd.co.uk" mailto="mailto:info@wolvessolutionsltd.co.uk" /></p> 
  
  <p>or call</p>
  <p style={{fontSize: '3vh', color: 'white'}}>Mark</p>
  <a style={{fontSize: '3vh', color: 'white'}} href="tel:+447846917147">07846917147</a>
  <p style={{fontSize: '3vh', color: 'white'}}>Kieran</p>
  <a style={{fontSize: '3vh', color: 'white'}} href="tel:+447415690313">07415690313</a>




    </div>
  )
}

export default Contact