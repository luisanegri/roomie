import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
    textTransform: 'capitalize'
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
              <Typography variant="h6" className={classes.logo}>
                Roomie
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" className={classes.btnNav}>
                List room
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
