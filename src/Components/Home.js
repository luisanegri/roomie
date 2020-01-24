import React from 'react';
import '../App.css';
import Image from '../people-gathered-inside-house-sitting-on-sofa-1054974.jpg';
import { Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  titleHome: {
    textAlign: 'center',
    color: 'white',
    fontSize: '45px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textShadow: '0 1px 3px rgba(34,36,38,.5)'
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
        </Container>
      </section>
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);
