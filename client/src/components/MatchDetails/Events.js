import React from 'react';
import { Paper, Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import shortid from 'shortid';

const eventTypes = ['', 'Goal', 'Own Goal', 'Penalty', 'Penalty Missed', 'Yellow Card', 'Second Yellow Card', 'Red Card', 'Substitution'];

// [{ "team": 2, "minute": 15, "type": 1, "players": [{"name"}] }]

const Events = ({data}) => (
  <div className="MatchEvents">
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric>Team</TableCell>
            <TableCell numeric>Minute</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Players</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(e => (
            <TableRow key={shortid.generate()}>
              <TableCell numeric>{e.team}</TableCell>
              <TableCell numeric>{e.minute}</TableCell>
              <TableCell>{eventTypes[e.type]}</TableCell>
              <TableCell>{e.players.map(e => e.name).join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
  // <Typography variant="headline" component="h2">
  //   Events: {data.length}
  // </Typography>

export default Events;

