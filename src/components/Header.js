import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import BackdropFilter from "react-backdrop-filter";

const useStyles = makeStyles({
    appbars: {
        color: "#22223",
        background: "#fafafa"
        // border: "solid 1px #222223"
    },
    navbar: {
        color: "#222223"
    },
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
  });

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  
  export default function Header(props) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
        
          <AppBar elevation={1} className={classes.appbars}>
            <Toolbar>
            <Container className={classes.nav}>
                <Typography variant="h6">
                    <Link underline='none' href="#" className={classes.navbar}>
                        ABOUT
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.navbar}>GMLLSHRN</Typography>
                <Typography variant="h6">
                    <Link underline='none' href="#" className={classes.navbar}>
                        RESUME
                    </Link>
                </Typography>
            </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        {/* <Container>
          <Box my={2}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Container> */}
      </React.Fragment>
    );
  }