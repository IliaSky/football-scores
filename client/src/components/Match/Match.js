import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

// {
//   "id": 1365604,
//   "competition_id": 1379,
//   "time": "2017-03-14T07:00:00Z",
//   "matchTime": "2017-03-14T07:58:50Z",
//   "(home|away)Team": {"name", "score"},
//   "isLiveStream": false,
//   "status": "2H"
// }

const Match = ({data, history}) => (
  <ListItem button onClick={() => history.push('/matches/' + data.id)}>
    <ListItemText
      primary={data.homeTeam.name + ' - ' + data.awayTeam.name}
      secondary={data.homeTeam.score + ' - ' + data.awayTeam.score} />
    <div>Live: {data.isLiveStream ? 'yes' : 'no'}</div>
    <div>Status: {data.status}</div>
  </ListItem>
);

export default Match;

