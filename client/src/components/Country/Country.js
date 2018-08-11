import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core';
import { Star as StarIcon } from '@material-ui/icons';

const Country = ({data}) => (
  <ListItem button>
    <Avatar alt={data.name + ' flag'} src="/logo.png" />
    <ListItemText primary={data.name} />
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
  </ListItem>
);

export default Country;

