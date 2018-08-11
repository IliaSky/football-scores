import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function TopToolbar(props) {
  const { classes, title } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

TopToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopToolbar);