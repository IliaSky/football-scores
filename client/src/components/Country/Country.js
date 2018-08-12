import React from 'react';
import { ListItem, ListItemText, Avatar, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Star as StarIcon } from '@material-ui/icons';
import { favorites } from '../../utils'

const Country = ({data}) => (
  <ListItem button>
    <Avatar alt={data.name + ' flag'} src="/logo.png" />
    <ListItemText primary={data.name} />
    <ListItemSecondaryAction
      onClick={() => favorites.add({name: data.name, id: data.id})} >
      <IconButton>
        <StarIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Country;

