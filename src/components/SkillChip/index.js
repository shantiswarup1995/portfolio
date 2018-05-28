import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    chip: {
      margin: theme.spacing.unit,
      color: "#ffffff",
      backgroundColor: "#005b03",
    },
});

  function handleClick(details) {

    alert(details); // eslint-disable-line no-alert
  }

  function SkillChip(props) {
    const { classes } = props;
    return (
      <Chip
        avatar={<Avatar src={props.icon} />}
        label={props.label}
        onClick={() => handleClick(props.details)}
        className={classes.chip}
      />
  );
}

SkillChip.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SkillChip);