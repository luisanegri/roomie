import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
    borderRadius: 0,
    marginBottom: '10px'
  },
  imgRoom: {
    width: '100%'
  },
  wrapper: {
    marginTop: '50px'
  },
  cardCustom: {
    paddingBottom: '16px !important'
  },
  price: {
    fontWeight: 'bold'
  },
  avatar: {
    borderRadius: '50%',
    width: '122px',
    height: '112px',
    display: 'block',
    margin: '0 auto'
  },
  user: {
    textAlign: 'center'
  },
  charUser: {},
  buttonMessage: {
    background: '#FB9A64',
    color: 'white',
    padding: '6px 17px',
    borderRadius: 0,
    textTransform: 'capitalize',
    marginTop: '20px'
  },
  links: {
    textAlign: 'center'
  },
  linkTitle: {
    color: 'black',
    textDecoration: 'none'
  },
  titleDesc: {
    fontWeight: 'bold',
    margin: '0 0 15px'
  },
  cardDesc: {
    padding: '30px'
  },
  listPA: {
    listStyle: 'none',
    paddingLeft: 0
  },
  listItem: {
    marginBottom: '2px'
  }
};

function Room(props) {
  const { classes } = props;
  return (
    <div>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <img
              className={classes.imgRoom}
              src="https://live.staticflickr.com/5034/5796076897_17825fa53d_b.jpg"
            />
          </Grid>
          <Grid item xs={5}>
            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.cardCustom}>
                <Typography component="span" className={classes.price}>
                  €800
                </Typography>
                <Typography component="span"> per month</Typography>
              </CardContent>
            </Card>

            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.cardCustom}>
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <img
                      className={classes.avatar}
                      src="https://static.scientificamerican.com/blogs/cache/file/EA411F89-5088-489C-BCA14BF336D02E43_source.jpg?w=590&h=800&D04C7830-7DF9-461D-B5A1B2DFAB3AB437"
                    />
                    <p className={classes.user}>Luisa, 28</p>
                  </Grid>
                  <Grid item xs={7}>
                    <div className="charUser">
                      <p>#Quiet</p>
                      <p>#Clean</p>
                      <p>#Funny</p>
                      <p>#Extroverted</p>
                      <p>#Tidy</p>
                    </div>
                    <Button className={classes.buttonMessage}>
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={7}>
            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.cardContentCustom}>
                <Grid container spacing={3} className={classes.links}>
                  <Grid item xs={3}>
                    <a href="#description" className={classes.linkTitle}>
                      Description
                    </a>
                  </Grid>
                  <Grid item xs={3}>
                    <a href="#priceavailability" className={classes.linkTitle}>
                      Price & Availability
                    </a>
                  </Grid>
                  <Grid item xs={3}>
                    <a href="#preferences" className={classes.linkTitle}>
                      Preferences
                    </a>
                  </Grid>
                  <Grid item xs={3}>
                    <a href="#houserules" className={classes.linkTitle}>
                      House Rules
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <section id="description">
              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.cardDesc}>
                  <Typography component="h4" className={classes.titleDesc}>
                    Description
                  </Typography>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </Typography>
                </CardContent>
              </Card>
            </section>

            <section id="priceavailability">
              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.cardDesc}>
                  <Typography component="h4" className={classes.titleDesc}>
                    Pricing & Availability
                  </Typography>
                  <ul className={classes.listPA}>
                    <li>
                      <Typography component="span" className={classes.price}>
                        Price:
                      </Typography>
                      <Typography component="span"> €800 per month</Typography>
                    </li>
                    <li>
                      <Typography component="span" className={classes.price}>
                        Deposit:
                      </Typography>
                      <Typography component="span"> €860</Typography>
                    </li>
                    <li>
                      <Typography component="span" className={classes.price}>
                        Bills:
                      </Typography>
                      <Typography component="span"> €60 per month</Typography>
                    </li>
                  </ul>
                  <Typography component="p">
                    Available from the 1st of February
                  </Typography>
                </CardContent>
              </Card>
            </section>

            <section id="preferences">
              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.cardDesc}>
                  <Typography component="h4" className={classes.titleDesc}>
                    Preferences
                  </Typography>
                  <ul className={classes.listPA}>
                    <li className={classes.listItem}>
                      <Typography component="span" className={classes.price}>
                        Gender:
                      </Typography>
                      <Typography component="span"> Male or Female</Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography component="span" className={classes.price}>
                        Couples:
                      </Typography>
                      <Typography component="span"> Not accepted</Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography component="span" className={classes.price}>
                        Students:
                      </Typography>
                      <Typography component="span"> Accepted</Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography component="span" className={classes.price}>
                        Professionals:
                      </Typography>
                      <Typography component="span"> Accepted</Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography component="span" className={classes.price}>
                        Age:
                      </Typography>
                      <Typography component="span"> No preference</Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="houserules">
              <Card className={classes.card} variant="outlined">
                <CardContent className={classes.cardDesc}>
                  <Typography component="h4" className={classes.titleDesc}>
                    House Rules
                  </Typography>
                  <ul className={classes.listPA}>
                    <li className={classes.listItem}></li>
                    <li className={classes.listItem}>
                      <Typography component="span">Pets not allowed</Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography component="span">
                        Smoking not allowed
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(Room);
