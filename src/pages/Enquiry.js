import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Background from '../images/wolfGrey.png'

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
    fontSize: '2vh'
  }
})

const Enquiry = () => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
  <h1>Application</h1>
  <p>Speak to Mark or Kieran</p>

    </div>
  )
}

export default Enquiry