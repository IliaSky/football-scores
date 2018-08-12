import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon, Home as HomeIcon } from '@material-ui/icons';
import { auth } from '../../utils';

const styles = {
  leftButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

const directLocations = ['/matches', '/countries', '/competitions', '/favorites', '/auth'];

const LeftButton = withRouter((props) => {
  const {location, history} = props;
  const path = location.pathname;
  const isDirect = directLocations.includes(path);
  const onClick = () => isDirect ? history.replace('/') : history.goBack();

  return (
    <IconButton style={styles.leftButton} onClick={onClick}>
      {isDirect ? <HomeIcon /> : <ArrowBackIcon />}
    </IconButton>
  );
});

const RightButton = withRouter((props) => {
  const {history} = props;
  const isLogged = auth.isLogged;

  if (!isLogged) {
    return (<Button color="inherit" onClick={() => history.push('/auth')}>Login</Button>);
  }
  return (<Button color="inherit">Logout</Button>);
});

class TopToolbar extends Component {
  render() {
    const { title, location } = this.props;
    const isHome = location.pathname === '' || location.pathname === '/';
    const isAuth = location.pathname === '/auth';

    return (
      <AppBar position="static" style={{textAlign: 'center'}}>
        <Toolbar>
          {!isHome && <LeftButton />}
          <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
            {title}
          </Typography>
          {!isAuth && <RightButton />}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(TopToolbar);