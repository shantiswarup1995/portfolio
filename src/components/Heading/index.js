import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Heading(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Heading);