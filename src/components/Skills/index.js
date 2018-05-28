import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SkillChip from '../SkillChip';
import reactLogo from './react.png';
import scalaLogo from './scala.png';
import pythonLogo from './python.png';
import javascriptLogo from './javascript.png';
import htmlLogo from './html.png';
import cssLogo from './css.png';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
});

function Skills(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <SkillChip 
                icon={reactLogo}
                label='react.js'
                details='reactjs, redux'
            />
            <SkillChip 
                icon={scalaLogo}
                label='scala'
                details='scala, akka actor, akka stream, akka http'
            />
            <SkillChip 
                icon={pythonLogo}
                label='python'
                details='Python'
            />
            <SkillChip 
                icon={htmlLogo}
                label='html'
                details='html'
            />
            <SkillChip 
                icon={cssLogo}
                label='css'
                details='css'
            />
            <SkillChip 
                icon={javascriptLogo}
                label='javascript'
                details='javascript es6'
            />
        </div>
    )
}

Skills.protoTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills);