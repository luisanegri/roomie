import React from 'react';
import {
  TextField,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  gridForm: {
    width: '50%',
    margin: '0 auto'
  }
};

function ListingForm(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Add a room
        </Typography>
        <Grid container spacing={3} className={classes.gridForm}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="image"
                name="image"
                label="Image"
                fullWidth
                autoComplete="image"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="rent"
                name="rent"
                label="Rent"
                fullWidth
                autoComplete="rent"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="deposit"
                name="deposit"
                label="Deposit"
                fullWidth
                autoComplete="deposit"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bills"
                name="bills"
                label="Bills"
                fullWidth
                autoComplete="bills"
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="students"
              name="students"
              label="Students Accepted?"
              fullWidth
              autoComplete="students"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="smoke"
              name="smoke"
              label="Smoke Allowed?"
              fullWidth
              autoComplete="smoke"
            />
          </Grid> */}
          </form>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(ListingForm);
