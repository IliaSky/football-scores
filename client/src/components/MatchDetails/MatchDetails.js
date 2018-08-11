import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Avatar, Card, CardContent, Typography, CircularProgress } from '@material-ui/core';
import { footballAPI } from 'utils';
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
      <Typography component="p">
        paragraph text
      </Typography>
    </CardContent>
  </Card>
);

class MatchDetails extends Component {
  constructor() {
    super();
    this.state = {data: {}, loading: true};
  }

  componentDidMount() {
    this._isMounted = true;
    footballAPI(window.location.pathname).then(data => {
      if (this._isMounted) {
        this.setState({data, loading: false});
      }
    }).catch(error => {
      if (this._isMounted) {
        this.setState({loading: false, error});
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {data, loading, error} = this.state;

    if (loading) {
      return <CircularProgress style={{marginTop: '30px'}}/>;
    }
    if (error) {
      return <div className="error">{error.message}</div>;
    }
    return (
      <div>
        <Team data={data.homeTeam} teamType="Home" />
        <Team data={data.awayTeam} teamType="Away" />
      </div>
    );
  }
};


export default MatchDetails;

