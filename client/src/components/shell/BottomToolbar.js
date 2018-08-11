import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { Link } from 'react-router-dom';

const items = [
  {text: 'Matches', Icon: LiveTvIcon},
  {text: 'Countries', Icon: LocationOnIcon},
  {text: 'Competitions', Icon: LanguageIcon},
  {text: 'Favorites', Icon: FavoriteIcon}
];
items.forEach(item => item.to = '/' + item.text.toLowerCase());

class BottomToolbar extends Component {
  constructor() {
    super();

    this.state = {
      items: items,
      value: items.map(e => e.to).indexOf(window.location.pathname)
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{marginTop: 56}}>
        <BottomNavigation style={{position: 'fixed', bottom: 0, width: '100%'}}
          value={value}
          onChange={this.handleChange}
          showLabels
        >
          {this.state.items.map(({text, Icon, to}) =>
            <BottomNavigationAction label={text} icon={<Icon />} to={to} key={to} component={Link}/>
          )}
        </BottomNavigation>
      </div>
    );
  }
}


export default BottomToolbar;