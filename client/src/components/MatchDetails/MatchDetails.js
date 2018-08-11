import React, { Component } from 'react';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import Tabs from '../shell/Tabs';
import './MatchDetails.css';
// import { withStyles } from '@material-ui/core/styles';

const Team = ({data, teamType}) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary">
        {teamType} team
      </Typography>
      <Avatar alt={data.name + ' flag'} src={data.logo} />
      <Typography variant="headline" component="h2">
        {data.name}
      </Typography>
      <Typography color="textSecondary">
        {data.score}
      </Typography>
    </CardContent>
  </Card>
);

  // id, competition_id, time, matchTime,
  // "(home|away)Team": { id, name, logo, score },
  // status: "FT",
  // liveStreams: [{ "name", "url" }]
const Overview = ({data}) => (
  <div>
    <Team data={data.homeTeam} teamType="Home" />
    <Team data={data.awayTeam} teamType="Away" />
    <div>Status: {data.status}</div>
    <div>Live Streams: {data.liveStreams.length}</div>
  </div>
);

// [{ "team": 2, "minute": 15, "type": 1, "players": [{"name"}] }]
const Events = ({data}) => (
  <div>
  Events: {data.length}
  </div>
);

// "(home|away)Team": "(startingLineups|substitutes)": [{"name", "number"}],
const Lineups = ({data}) => (
  <div>
    Lineups
  </div>
);

// "statistics": [{ "description": "Corner Kicks", "homeTeam": "4", "awayTeam": "4" }]
const Statistics = ({data}) => (
  <div>
    Statistics: {data.length}
  </div>
);

class MatchDetails extends Component {
  render() {
    const {data} = this.props;
    console.log(2, data);

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

