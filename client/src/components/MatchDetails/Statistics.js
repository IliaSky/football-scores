import React from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import shortid from 'shortid';

// "statistics": [{ "description": "Corner Kicks", "homeTeam": "4", "awayTeam": "4" }]

const Statistics = ({data}) => (
  <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell numeric>Home Team</TableCell>
          <TableCell numeric>Away Team</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(e => (
          <TableRow key={shortid.generate()}>
            <TableCell component="th" scope="row">{e.description}</TableCell>
            <TableCell numeric>{e.homeTeam}</TableCell>
            <TableCell numeric>{e.awayTeam}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Statistics;

