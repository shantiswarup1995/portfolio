import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProfileImage from '../ProfileImage';

const styles = {
  card: {
    maxWidth: 250,
    display: 'inline-block',
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Profile(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <ProfileImage />
        <CardContent>
          <Typography gutterBottom variant="subheading" component="b" >
            {props.title}
          </Typography>
          <Typography variant="caption" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);