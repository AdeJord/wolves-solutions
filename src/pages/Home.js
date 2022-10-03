import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Background from '../images/wolfGrey.png'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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

const Home = () => {

    const classes = useStyles()

  return (
    <div className={classes.main}>
      <p>
        Welcome to Wolves Solutions Limited, we are a security company based in the West Midlands
      </p>
      <p>
        We offer high quality and reliable services. Offering services with many years of experience
        within events, festivals, private events, retail and many more.
      </p>

    </div>
  )
}

export default Home