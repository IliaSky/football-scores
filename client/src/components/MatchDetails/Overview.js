import React from 'react';
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';

const logoStyle = {maxWidth: 100, maxHeight: 100, margin: 'auto'};

const Logo = ({data}) => {
  if (data.logo) {
    return <img alt={data.name + ' logo'} src={data.logo} style={logoStyle} />
  }
  return null;
};

const Team = ({data, teamType}) => (
  <Grid item xs={6}>
    <Typography color="textSecondary">
      {teamType} team
    </Typography>
    <Logo data={data} />
    <Typography variant="headline" component="h2">
      {data.name}
    </Typography>
  </Grid>
);

const Score = ({data}) => (
  <Grid item xs={6}>
    <Typography variant="headline" color="textSecondary">
      {data.score}
    </Typography>
  </Grid>
);

const GridDivider = () => (
  <Grid item xs={12}>
    <Divider style={{margin: '20px auto'}}/>
  </Grid>
);

  // id, competition_id, time, matchTime,
  // "(home|away)Team": { id, name, logo, score },
  // status: "FT",
  // liveStreams: [{ "name", "url" }]

const statusMap = {
  'NS': 'Not Started',
  '1H': 'First Half',
  'HT': 'Half Time',
  '2H': 'Second Half',
  'ET': 'Extra Time',
  'FT': 'Full Time',
  'Susp': 'Suspended',
  'Int': 'Interrupted',
  'Abd': 'Abandoned',
  'Post': 'Postponed',
  'Canc': 'Cancelled'
};

const Overview = ({data}) => (
  <div className="MatchOverview">
    <Card>
      <CardContent>
        <Grid container>
          <Team data={data.homeTeam} teamType="Home" />
          <Team data={data.awayTeam} teamType="Away" />
          <GridDivider />
          <Score data={data.homeTeam} />
          <Score data={data.awayTeam} />
          <GridDivider />
          <Grid item xs={6}>Status: {statusMap[data.status]}</Grid>
          <Grid item xs={6}>Live Streams: {data.liveStreams.length}</Grid>
        </Grid>
      </CardContent>
    </Card>
  </div>
);


export default Overview;

