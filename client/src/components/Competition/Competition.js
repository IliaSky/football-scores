import React from 'react';
import { ListItem, ListItemText, Avatar } from '@material-ui/core';

// {
//   "id": 36,
//   "name": "English Premier League",
//   "country_id": 1
// },

const Competition = ({data, history}) => (
  <ListItem button onClick={() => history.push('/competitions/' + data.id)}>
    <Avatar alt={'flag'} src="/logo.png" />
    <ListItemText primary={data.name} />
  </ListItem>
);

export default Competition;

