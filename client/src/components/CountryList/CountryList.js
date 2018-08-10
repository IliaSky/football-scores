import React, { Component } from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Avatar, CircularProgress } from '@material-ui/core';
import {Star as StarIcon} from '@material-ui/icons';
import {footballAPI} from 'utils';

class CountryList extends Component {

  constructor() {
    super();
    this.state = {countries: [], loading: true};
  }

  componentDidMount() {
    footballAPI('countries').then(countries => {
      this.setState({countries, loading: false})
    });
  }

  render() {
    if (this.state.loading) {
      return <CircularProgress style={{marginTop: '30px'}}/>;
    }
    return (
      <List component="nav">
        {this.state.countries.map(country =>
          <ListItem button key={country.id}>
            <Avatar alt={country.name + ' flag'} src="/logo.png" />
            <ListItemText primary={country.name} />
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
          </ListItem>
        )}
      </List>
    );
  }
}

export default CountryList;

