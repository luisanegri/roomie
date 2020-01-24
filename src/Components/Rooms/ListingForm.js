import React from 'react';
import {
  TextField,
  Container,
  Typography,
  Button,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  gridForm: {
    width: '50%',
    margin: '0 auto'
  }
};

function ListingForm(props) {
  const { classes, onSubmit, onChange, value } = props;
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Add a room
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container className={classes.gridForm}>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                type="text"
                fullWidth
                value={value.description}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="image"
                name="image"
                label="Image"
                type="text"
                fullWidth
                value={value.image}
                onChange={onChange}
                autoComplete="image"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="rent"
                name="rent"
                label="Rent"
                type="number"
                fullWidth
                value={value.rent}
                onChange={onChange}
                autoComplete="rent"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="deposit"
                name="deposit"
                label="Deposit"
                type="number"
                value={value.deposit}
                onChange={onChange}
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
                type="number"
                value={value.bills}
                onChange={onChange}
                fullWidth
                autoComplete="bills"
              />
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
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
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(ListingForm);
