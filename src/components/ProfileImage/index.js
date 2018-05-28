import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import img from '../../profile.jpg'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 120,
    height: 120,
  },
};

function ProfileImage(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Shanti Swarup"
        src={img}   
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ProfileImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileImage);