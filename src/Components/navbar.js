import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  logo: {
    color: '#FB9A64',
    fontWeight: 'bold'
  },
  nav: {
    background: 'white'
  },
  btnNav: {
    color: '#FB9A64',
    border: '1px solid',
    fontSize: '12px'
  },
  linkNav: {
    textDecoration: 'none'
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <Grid
            justify="space-between" // Add it here :)
            container
            spacing={24}
          >
            <Grid item>
              <Link to="/" className={classes.linkNav}>
                <Typography variant="h6" className={classes.logo}>
                  Roomie
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/add" className={classes.linkNav}>
                <Button color="inherit" className={classes.btnNav}>
                  List a room
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
