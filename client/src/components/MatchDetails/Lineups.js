import React, { Component } from 'react';
import { Grid, Paper, List, ListSubheader, ListItem, Divider, Typography } from '@material-ui/core';
import shortid from 'shortid';

// "(home|away)Team": "(startingLineups|substitutes)": [{"name", "number"}],

class Lineups extends Component {
  constructor(props) {
    super();
    const {data} = props;
    this.teams = [data.homeTeam, data.awayTeam];
    this.starting = this.teams.map(team => team.startingLineups);
    this.substitutes = this.teams.map(team => team.substitutes);
    this.hasData = this.starting.concat(this.substitutes).some(arr => arr.length);
  }

  renderEmpty() {
    return (
      <Typography style={{textAlign: 'center', margin: 30}}>
        No Lineup data available.
      </Typography>
    );
  }

  renderList(name, data) {
    return (
      <Grid item xs={6} key={name}>
        <List>
          <ListSubheader className="MatchLineups-team" >{name} team</ListSubheader>
          <Divider />
          {data.map(e => <ListItem key={shortid.generate()}>{e.name}</ListItem>)}
        </List>
      </Grid>
    );
  }

  renderTitle(name) {
    return (
      <Grid item xs={12}>
        <Typography component="h2" variant="subheading" className="MatchLineups-title">
          {name}
        </Typography>
      </Grid>
    );
  }

  renderFull() {
    return (
      <Grid container>
        {this.renderTitle('Starting Lineups')}
        {['home', 'away'].map((name, i) => this.renderList(name, this.starting[i]))}
        {this.renderTitle('Substitutes')}
        {['home', 'away'].map((name, i) => this.renderList(name, this.substitutes[i]))}
      </Grid>
    );
  }

  render() {
    return (
      <div className="MatchLineups">
        {this.hasData ? this.renderFull() : this.renderEmpty()}
      </div>
    );
  }
}

export default Lineups;

