import React from 'react'
import Container from '@material-ui/core/Container'
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hero from './Hero'


const useStyles = makeStyles({
    borders: {
        border: "solid 1px #222223",
        marginTop: "100px"
    }
  });

function SelectedProject() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.borders}>
                <Hero />
            </Container>
        </>
    );
}
export default SelectedProject;