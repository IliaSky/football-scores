import React, { Component } from 'react';
// import { Typography } from '@material-ui/core';
import Tabs from '../shell/Tabs';
import Overview from './Overview';
import Events from './Events';
import Lineups from './Lineups';
import Statistics from './Statistics';
import './MatchDetails.css';

class MatchDetails extends Component {
  render() {
    const {data} = this.props;

    return (
      <Tabs labels={['Overview', 'Events', 'Lineups', 'Statistics']}>
        <Overview data={data} />
        <Events data={data.events} />
        <Lineups data={data.lineups} />
        <Statistics data={data.statistics} />
      </Tabs>
    );
  }
};


export default MatchDetails;

