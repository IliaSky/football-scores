import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core';
import { Star as StarIcon } from '@material-ui/icons';
import ItemList from '../ItemList/ItemList';

// {
//   "id": 36,
//   "name": "English Premier League",
//   "country_id": 1
// },

const Competition = ({data, history}) => (
  <ListItem button onClick={() => history.push('/competitions/' + data.id)}>
    <Avatar alt={'flag'} src="/logo.png" />
    <ListItemText primary={data.name} />
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
  </ListItem>
);

const CompetitionList = () => (
  <ItemList url="competitions" item={Competition} />
);

export default CompetitionList;

