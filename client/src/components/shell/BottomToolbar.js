import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { withRouter, Link } from 'react-router-dom';

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
      value: -1
    };
  }

  updateIndex(){
    this.setState({
      value: items.findIndex(item => window.location.pathname.startsWith(item.to))
    });
  }

  componentWillMount() {
    this.updateIndex();
    this.unlisten = this.props.history.listen(() => this.updateIndex());
  }

  componentWillUnmount() {
      this.unlisten();
  }

  render() {
    const { value } = this.state;

    return (
      <footer className="BottomToolbar">
        <BottomNavigation className="BottomToolbar-tabs"
          value={value}
          showLabels
        >
          {this.state.items.map(({text, Icon, to}) =>
            <BottomNavigationAction label={text} icon={<Icon />} to={to} key={to} component={Link}/>
          )}
        </BottomNavigation>
      </footer>
    );
  }
}


export default withRouter(BottomToolbar);