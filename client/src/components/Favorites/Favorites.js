import React, { Component } from 'react';
import { Paper, TextField, Button, List, ListItem, ListItemText, ListItemIcon, ListSubheader } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

// import Page from '../shell/Page';
import shortid from 'shortid';
import { favorites, serverAPI, auth } from '../../utils';
import './Favorites.css'

class Favorites extends Component {
  state = {
    current: '',
    items: favorites.items()
  };

  handleChange = event => {
    this.setState({
      current: event.target.value,
    });
  };

  add = () => {
    const item = {name: this.state.current, id: shortid.generate()};
    this.setState({
      items: this.state.items.concat([item]),
      current: ''
    });
  };

  remove = (id) => {
    this.setState({
      items: this.state.items.filter(e => e.id !== id)
    });
  }

  save = () => {
    serverAPI('api/updateFavorites', this.state.items);
  };

  componentDidMount() {
    const update = (items) => this.setState({
      items: items.slice()
    });
    update(favorites.items());
    this.unsubscribe = favorites.subscribe(update);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="Favorites" disabled={!auth.isLogged}>
        {!auth.isLogged && <div className="Favorites-message">Login to use this feature</div>}
        <Paper className="Favorites-Paper" >
          <TextField
            margin="normal"
            label="Something you like"
            value={this.state.current}
            onChange={this.handleChange} />
          <Button onClick={this.add} variant="contained" color="primary" className="Favorites-Button">
            Add item
          </Button>
          <Button onClick={this.save} variant="contained" color="secondary" className="Favorites-Button">
            Save to server
          </Button>
        </Paper>

        <Paper className="Favorites-Paper">
          <List>
            <ListSubheader>Items</ListSubheader>
            {this.state.items.map(e =>
              <ListItem button key={e.id} onClick={() => this.remove(e.id)}>
                <ListItemIcon><DeleteIcon /></ListItemIcon>
                <ListItemText>{e.name}</ListItemText>
              </ListItem>)}
          </List>
        </Paper>
      </div>
    );
  }
};


export default Favorites;


