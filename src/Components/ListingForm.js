import React from 'react';
import {
  TextField,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

function ListingForm(props) {
  const { classes } = props;
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="filled-full-width"
                label="Description"
                style={{ margin: 8, width: '60%' }}
                margin="normal"
                multiline={true}
                rows={5}
                rowsMax={5}
                variant="filled"
              />

              <TextField
                id="outlined-full-width"
                label="Image"
                style={{ margin: 8, width: '60%' }}
                placeholder="Image"
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
              <section>
                <Typography component="h5" className={classes.price}>
                  Costs & Availability
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Rent"
                  placeholder="Rent"
                  variant="outlined"
                />
                <TextField
                  id="outlined-textarea"
                  label="Deposit"
                  placeholder="Deposit"
                  variant="outlined"
                />
                <TextField
                  id="outlined-textarea"
                  label="Bills"
                  placeholder="Bills"
                  variant="outlined"
                />
                <div>
                  <TextField
                    id="date"
                    label="Available from"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
              </section>
              <section>
                <Typography component="h5">Preferences</Typography>
                <div>
                  <Typography component="span">Gender</Typography>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Female</Button>
                    <Button>Male</Button>
                  </ButtonGroup>
                </div>
                <div>
                  <Typography component="span">Couples</Typography>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </ButtonGroup>
                </div>
                <div>
                  <Typography component="span">Students</Typography>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </ButtonGroup>
                </div>

                <div>
                  <Typography component="span">Professionals</Typography>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </ButtonGroup>
                </div>
              </section>

              <section>
                <Typography component="h5">House Rules</Typography>
                <div>
                  <Typography component="span">Smoke</Typography>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </ButtonGroup>
                </div>
                <div>
                  <Typography component="span">Pets</Typography>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </ButtonGroup>
                </div>
              </section>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(ListingForm);
