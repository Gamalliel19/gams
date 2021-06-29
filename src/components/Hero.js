import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    hero: {
        textAlign: "center"
        // margin: "-100px"
    },
    title: {
        textAlign: "center",
        fontSize: "400px",
        letterSpacing: "-3px",
        fontFamily: "Bebas Neue', cursive"
    }
  });

function Hero() {
    const classes = useStyles();
    return(
        <>
            <Container className={classes.layout}>
                <h1 className="title">GAMAL</h1>
                <Typography className={classes.hero} variant="h4">
                    Front-End Engineer 
                </Typography>
            </Container>
        </>
    );
}

export default Hero;