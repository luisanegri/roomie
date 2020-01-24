import React from 'react';
import '../App.css';
import Image from '../people-gathered-inside-house-sitting-on-sofa-1054974.jpg';
import { Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  titleHome: {
    textAlign: 'center',
    color: 'white',
    fontSize: '45px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textShadow: '0 1px 3px rgba(34,36,38,.5)'
  },
  homeBtns: {
    margin: '0 auto',
    marginTop: '50px',
    textAlign: 'center'
  },
  homeCta: {
    padding: '8px 13px',
    background: '#FB9A64',
    margin: '0 7px',
    color: '#fafafa',
    fontWeight: 'bold',
    textTransform: 'unset'
  },
  link: {
    textDecoration: 'none'
  }
};

function Home(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <section class="hero" style={{ backgroundImage: `url(${Image})` }}>
        <Container maxWidth="md">
          <div>
            <Typography component="h1" className={classes.titleHome}>
              Live with friends, find a roomie!
            </Typography>
          </div>
          <div className={classes.homeBtns}>
            <Link to="/rooms" className={classes.link}>
              <Button className={classes.homeCta}>Find a room</Button>
            </Link>

            <Link to="/roomies" className={classes.link}>
              <Button className={classes.homeCta}>Find a roomie</Button>
            </Link>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);
