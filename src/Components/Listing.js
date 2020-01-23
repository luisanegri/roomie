import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid
} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 300,
    borderBottom: '3px solid #FB9A64'
  },
  media: {
    height: 200
  },
  wrapper: {
    marginTop: '130px'
  },
  cardDesc: {
    textAlign: 'left'
  },
  cardPrice: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black'
  }
};

function Listing(props) {
  const { classes } = props;
  return (
    <div>
      <Container maxWidth="md" className={classes.wrapper}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/5034/5796076897_17825fa53d_b.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className={classes.cardDesc}>
                    Available from 1st of February
                  </Typography>
                  <Typography component="p" className={classes.cardPrice}>
                    €800
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/5034/5796076897_17825fa53d_b.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className={classes.cardDesc}>
                    Available from 1st of February
                  </Typography>
                  <Typography className={classes.cardPrice} component="p">
                    €800
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/5034/5796076897_17825fa53d_b.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className={classes.cardDesc}>
                    Available from 1st of February
                  </Typography>
                  <Typography className={classes.cardPrice} component="p">
                    €800
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                {/* <Link to={`/room/${room.id}`}> */}
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/5034/5796076897_17825fa53d_b.jpg"
                  title="Contemplative Reptile"
                />
                {/* </Link> */}
                <CardContent>
                  <Typography className={classes.cardDesc}>
                    Available from 1st of February
                  </Typography>
                  <Typography className={classes.cardPrice} component="p">
                    €800
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(Listing);
