import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab } from '@material-ui/core';

// const TabContainer = ({ children }) => (
//   <div style={{padding: 24}}>{children}</div>
// );

class AnimatedTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { labels, children } = this.props;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            centered
          >
            {labels.map(label => <Tab label={label} key={label} />)}
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {children}
        </SwipeableViews>
      </div>
    );
  }
}

export default AnimatedTabs;
