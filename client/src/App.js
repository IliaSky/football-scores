import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import './utils.js';
import Navigator from './components/shell/Navigator';
import Country from './components/Country/Country';
import Match from './components/Match/Match';
import MatchDetails from './components/MatchDetails/MatchDetails';
import Competition from './components/Competition/Competition';
import Home from './components/Home/Home';

const routes = [
  { path: '/countries', component: Country, list: true, title: 'Countries' },
  { path: '/matches/:id', component: MatchDetails, title: 'Match Details' },
  { path: '/matches', component: Match, list: true, title: 'Matches' },
  { path: '/competitions', component: Competition, list: true, title: 'Competitions' },
  { path: '/competitions/:id', component: Competition },
  { path: '/', component: Home, title: 'Football Scores', offline: true },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4CAF50'
    },
    secondary: {
      main: '#00b0ff'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navigator routes={routes} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
