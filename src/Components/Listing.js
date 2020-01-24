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
import { Link } from 'react-router-dom';

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
  console.log('props', props);
  const { classes } = props;

  const empty = !props.rooms.length;
  if (empty) {
    return <p className="info-message">There are no rooms available.</p>;
  }
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.wrapper}>
        {props.rooms.map(room => (
          <Card className={classes.card}>
            <CardActionArea>
              <Link to={`/room/${room.id}`}>
                <CardMedia
                  className={classes.media}
                  image="https://live.staticflickr.com/5034/5796076897_17825fa53d_b.jpg"
                  title="Contemplative Reptile"
                  alt="Room image"
                />
              </Link>
              <CardContent>
                <Typography className={classes.cardDesc}>
                  Available from 1st of February
                </Typography>
                <Typography component="p" className={classes.cardPrice}>
                  €{room.rent}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(Listing);
