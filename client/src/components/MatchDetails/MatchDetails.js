import React, { Component } from 'react';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';

  // "id": 1247691,
  // "competition_id": 36,
  // "time": "2016-09-10T11:30:00Z",
  // "matchTime": "2016-09-10T12:33:43Z",
  // "(home|away)Team": { "id", "name", "logo", "score" },
  // "awayTeam": { "id", "name", "logo", "score" },
  // "status": "FT",
  // "liveStreams": [{ "name", "url" }],
  // "events": [{ "team": 2, "minute": 15, "type": 1, "players": [{"name"}] }]
  // "lineups": {
  //   "(home|away)Team": {
  //     "startingLineups": [{"name", "number"}],
  //     "substitutes": [{"name", "number"}]
  //   },
  // },
  // "statistics": [{ "description": "Corner Kicks", "homeTeam": "4", "awayTeam": "4" }]

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

class MatchDetails extends Component {
  render() {
    const {data} = this.props;

    return (
      <div>
        <Team data={data.homeTeam} teamType="Home" />
        <Team data={data.awayTeam} teamType="Away" />
      </div>
    );
  }
};


export default MatchDetails;

